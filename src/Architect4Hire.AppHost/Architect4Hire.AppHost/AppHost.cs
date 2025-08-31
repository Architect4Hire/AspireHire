var builder = DistributedApplication.CreateBuilder(args);

var frontEnd = builder.AddNpmApp("FrontEnd", "../Architect4Hire.AspireHire.FrontEnd", "start")
    .WithHttpEndpoint(env: "PORT")
    .PublishAsDockerFile();

builder.Build().Run();
