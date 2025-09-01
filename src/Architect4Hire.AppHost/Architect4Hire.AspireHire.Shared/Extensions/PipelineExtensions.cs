using Architect4Hire.AspireHire.Shared.Middleware;
using Asp.Versioning;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Scalar.AspNetCore;
using System.Runtime.CompilerServices;

namespace Architect4Hire.AspireHire.Shared.Extensions
{
    public static class PipelineExtensions
    {


        private static void AddCors(this WebApplicationBuilder builder)
        {
            builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(policy =>
                {
                    policy.WithOrigins("http://localhost:4200") // Specific origins allowed
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });
        }

        private static WebApplication ConfigureOpenApiAndScaler(this WebApplication app)
        {
            app.MapOpenApi();
            app.MapScalarApiReference(options =>
            {
                options
                    .WithPreferredScheme("Bearer") // Security scheme name from the OpenAPI document
                    .WithHttpBearerAuthentication(bearer =>
                    {
                        bearer.Token = "your-bearer-token";
                    });
                options.Title = $"{app.Environment.EnvironmentName} - {app.Environment.ApplicationName}";
            });
            return app;
        }

        private static void AddExceptionHandling(this WebApplicationBuilder builder)
        {
            builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
            builder.Services.AddProblemDetails();
        }

        public static void AddUniversalConfigurations(this WebApplicationBuilder builder)
        {
            AddCors(builder);
            AddExceptionHandling(builder);
            AddVersioning(builder, 1);
            builder.Services.AddRouting(options => options.LowercaseUrls = true);
            builder.Services.AddControllers();
        }
        public static void ConfigureApplicationDefaults(this WebApplication app)
        {
            ConfigureOpenApiAndScaler(app);
            app.UseCors();
            app.UseExceptionHandler();
            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();
        }

        private static void AddVersioning(this WebApplicationBuilder builder, int primaryVersion)
        {
            builder.Services.AddApiVersioning(options =>
            {
                options.DefaultApiVersion = new ApiVersion(primaryVersion, 0);
                options.ReportApiVersions = true;
                options.AssumeDefaultVersionWhenUnspecified = true;
                options.ApiVersionReader = ApiVersionReader.Combine(
                    new UrlSegmentApiVersionReader(),
                    new HeaderApiVersionReader("x-api-version"),
                    new QueryStringApiVersionReader("api-version")
                );
            })
        .AddApiExplorer(options =>
        {
            options.GroupNameFormat = "'v'VVV";
            // Replace the placeholder with the actual version
            options.SubstituteApiVersionInUrl = false;
        });
            builder.Services.AddOpenApi();
            builder.Services.AddOpenApi($"v{primaryVersion}");
        }
    }
}
