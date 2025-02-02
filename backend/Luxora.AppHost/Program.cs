var builder = DistributedApplication.CreateBuilder(args);

builder.AddRedis("cache");
builder.AddProject<Projects.Luxora_ApiService>("apiservice");

builder.Build().Run();
