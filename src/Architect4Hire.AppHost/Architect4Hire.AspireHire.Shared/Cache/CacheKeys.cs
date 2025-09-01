using Microsoft.Extensions.Caching.Distributed;
using System.Text.Json;

namespace Architect4Hire.AspireHire.Shared.Cache
{
    public class CacheAside
    {
        private readonly IDistributedCache _cache;
        private readonly JsonSerializerOptions _jsonOptions;

        public CacheAside(IDistributedCache cache)
        {
            _cache = cache;
            _jsonOptions = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                WriteIndented = false,
                DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull
            };
        }

        public async Task<T> FetchFromCache<T>(string key, Func<Task<T>> builder, DistributedCacheEntryOptions? options = null)
        {
            var cachedData = await _cache.GetAsync(key);
            if (cachedData != null)
            {
                try
                {
                    var deserializedData = JsonSerializer.Deserialize<T>(cachedData, _jsonOptions);
                    if (deserializedData != null)
                    {
                        return deserializedData;
                    }
                }
                catch (JsonException ex)
                {
                    // Log deserialization error and continue to rebuild
                    Console.WriteLine($"Failed to deserialize cached data for key '{key}': {ex.Message}");
                    // Remove corrupted cache entry
                    await _cache.RemoveAsync(key);
                }
            }

            var result = await builder();

            // Don't cache null results
            if (result == null)
            {
                return result;
            }

            try
            {
                var serializedData = JsonSerializer.SerializeToUtf8Bytes(result, _jsonOptions);

                if (options != null)
                {
                    await _cache.SetAsync(key, serializedData, options);
                }
                else
                {
                    await _cache.SetAsync(key, serializedData);
                }
            }
            catch (JsonException ex)
            {
                // Log the serialization error but don't fail the operation
                // You might want to add proper logging here
                Console.WriteLine($"Failed to serialize object for cache key '{key}': {ex.Message}");
            }

            return result;
        }

        public async Task InvalidateCache(string key)
        {
            if (string.IsNullOrEmpty(key))
            {
                throw new ArgumentException("Cache key cannot be null or empty.", nameof(key));
            }
            await _cache.RemoveAsync(key);
        }
    }
}
