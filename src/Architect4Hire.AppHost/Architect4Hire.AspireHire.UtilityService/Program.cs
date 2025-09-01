using Architect4Hire.AspireHire.Shared.Extensions;

var builder = WebApplication.CreateBuilder(args);
builder.AddServiceDefaults();
builder.AddUniversalConfigurations();
var app = builder.Build();
app.ConfigureApplicationDefaults();
app.Run();
