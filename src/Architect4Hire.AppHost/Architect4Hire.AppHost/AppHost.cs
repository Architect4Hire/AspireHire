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

builder.AddProject<Projects.Architect4Hire_AspireHire_TokenService>("tokenservice");
builder.AddProject<Projects.Architect4Hire_AspireHire_UserService>("userservice");
builder.AddProject<Projects.Architect4Hire_AspireHire_ContractService>("contractservice");
builder.AddProject<Projects.Architect4Hire_AspireHire_JobService>("jobservice");
builder.AddProject<Projects.Architect4Hire_AspireHire_MessageService>("messageservice");
builder.AddProject<Projects.Architect4Hire_AspireHire_PaymentService>("paymentservice");
builder.AddProject<Projects.Architect4Hire_AspireHire_ProfileService>("profileservice");
builder.AddProject<Projects.Architect4Hire_AspireHire_ProposalService>("proposalservice");
builder.AddProject<Projects.Architect4Hire_AspireHire_UtilityService>("utilityservice");

#endregion services

#region apps

var frontEnd = builder.AddNpmApp("FrontEnd", "../Architect4Hire.AspireHire.FrontEnd", "start")
    .WithHttpEndpoint(env: "PORT")
    .PublishAsDockerFile();

#endregion apps

builder.Build().Run();
