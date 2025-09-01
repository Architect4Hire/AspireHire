using static Azure.Core.HttpHeader;

var builder = DistributedApplication.CreateBuilder(args);

#region infrastructure

var sql = builder.AddSqlServer("sql")
                 .WithLifetime(ContainerLifetime.Persistent);
var membershipDB = sql.AddDatabase("membership");
var metadataDB = sql.AddDatabase("metadata");

var cosmos = builder.AddAzureCosmosDB("cosmos").RunAsEmulator();
var cosmosdb = cosmos.AddCosmosDatabase("db");
var container = cosmosdb.AddContainer("documents", "/DocumentType");

var cache = builder.AddRedis("cache").WithRedisInsight();

#endregion region

#region services

var token = builder.AddProject<Projects.Architect4Hire_AspireHire_TokenService>("tokenservice").WithReference(sql).WithReference(cache);
var user = builder.AddProject<Projects.Architect4Hire_AspireHire_UserService>("userservice").WithReference(sql).WithReference(cache);
var contract = builder.AddProject<Projects.Architect4Hire_AspireHire_ContractService>("contractservice").WithReference(cosmos).WithReference(cache);
var job = builder.AddProject<Projects.Architect4Hire_AspireHire_JobService>("jobservice").WithReference(cosmos).WithReference(cache);
var message = builder.AddProject<Projects.Architect4Hire_AspireHire_MessageService>("messageservice").WithReference(cosmos).WithReference(cache);
var payment = builder.AddProject<Projects.Architect4Hire_AspireHire_PaymentService>("paymentservice").WithReference(cosmos).WithReference(cache);
var profile = builder.AddProject<Projects.Architect4Hire_AspireHire_ProfileService>("profileservice").WithReference(cosmos).WithReference(cache);
var proposal = builder.AddProject<Projects.Architect4Hire_AspireHire_ProposalService>("proposalservice").WithReference(cosmos).WithReference(cache);
var utility = builder.AddProject<Projects.Architect4Hire_AspireHire_UtilityService>("utilityservice").WithReference(sql).WithReference(cache);

#endregion services

#region apps

var frontEnd = builder.AddNpmApp("frontend", "../Architect4Hire.AspireHire.FrontEnd", "start")
    .WithHttpEndpoint(env: "PORT")
    .PublishAsDockerFile();

#endregion apps

builder.Build().Run();
