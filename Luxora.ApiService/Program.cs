using Luxora.Application.Services.Products;
using Luxora.Application.Services.Products.Interfaces;
using Luxora.Infrastructure.Context;
using Luxora.Infrastructure.Repositories.Products;
using Luxora.Infrastructure.Repositories.Products.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add service defaults & Aspire client integrations.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<LuxoraDbContext>(options =>
{
    options.UseSqlServer(connectionString);
});

builder.Services.AddScoped<IReadProductService, ReadProductService>();
builder.Services.AddScoped<IWriteProductService, WriteProductService>();

builder.Services.AddScoped<IProductRepository, ProductRepository>();

builder.AddServiceDefaults();

builder.Services.AddControllers();

// Add services to the container.
builder.Services.AddProblemDetails();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseExceptionHandler();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.MapDefaultControllerRoute();

app.MapDefaultEndpoints();

app.Run();

