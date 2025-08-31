using Architect4Hire.AspireHire.Shared.Models.Domain.Sql;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BuddyNetworks.Networks.Shared.Context
{
    public abstract class AuditDBContext : DbContext
    {
        public DbSet<Audit> Audits { get; set; }

        protected AuditDBContext(DbContextOptions options) : base(options)
        {

        }


        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var entityEntries = ChangeTracker.Entries()
                .Where(x => x.State != EntityState.Unchanged && x.State != EntityState.Detached);

            foreach (var entry in entityEntries)
            {
                var audit = new Audit
                {
                    TableName = entry.Entity.GetType().Name,
                    Action = entry.State.ToString(),
                    KeyValues = GetKeyValues(entry),
                    Changes = GetFieldChanges(entry) != null ? System.Text.Json.JsonSerializer.Serialize(GetFieldChanges(entry)) : null
                };
                Audits.Add(audit);
            }

            return await base.SaveChangesAsync(cancellationToken);
        }

        protected static string GetKeyValues(EntityEntry entry)
        {
            var keyNames = entry.Metadata.FindPrimaryKey().Properties.Select(p => p.Name);
            var dict = keyNames.ToDictionary(k => k, k => entry.Property(k).CurrentValue?.ToString());
            return System.Text.Json.JsonSerializer.Serialize(dict);
        }

        protected static List<AuditFieldChange> GetFieldChanges(EntityEntry entry)
        {
            var changes = new List<AuditFieldChange>();

            if (entry.State == EntityState.Added)
            {
                foreach (var p in entry.Properties)
                {
                    changes.Add(new AuditFieldChange
                    {
                        Field = p.Metadata.Name,
                        OldValue = null,
                        NewValue = SerializeValue(p.CurrentValue)
                    });
                }
            }
            else if (entry.State == EntityState.Deleted)
            {
                foreach (var p in entry.Properties)
                {
                    changes.Add(new AuditFieldChange
                    {
                        Field = p.Metadata.Name,
                        OldValue = SerializeValue(p.OriginalValue),
                        NewValue = null
                    });
                }
            }
            else
            {
                foreach (var p in entry.Properties)
                {
                    if (!AreEqual(p.OriginalValue, p.CurrentValue))
                    {
                        changes.Add(new AuditFieldChange
                        {
                            Field = p.Metadata.Name,
                            OldValue = SerializeValue(p.OriginalValue),
                            NewValue = SerializeValue(p.CurrentValue)
                        });
                    }
                }
            }

            return changes.Count == 0 ? null : changes;
        }

        protected static bool AreEqual(object oldValue, object newValue)
        {
            if (oldValue is System.Collections.IEnumerable oldEnum && newValue is System.Collections.IEnumerable newEnum
                && !(oldValue is string) && !(newValue is string))
            {
                var oldList = oldEnum.Cast<object>().ToList();
                var newList = newEnum.Cast<object>().ToList();
                return oldList.SequenceEqual(newList);
            }
            return Equals(oldValue, newValue);
        }

        protected static string SerializeValue(object value)
        {
            if (value is System.Collections.IEnumerable enumerable && !(value is string))
            {
                return System.Text.Json.JsonSerializer.Serialize(enumerable);
            }
            return value?.ToString();
        }
    }
}
