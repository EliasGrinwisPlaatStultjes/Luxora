using System.Text;
using Luxora.ApiService.Modules.Swagger;
using Luxora.Application.Services.Products;
using Luxora.Application.Services.Products.Interfaces;
using Luxora.Application.Services.Trips;
using Luxora.Application.Services.Trips.Interfaces;
using Luxora.Application.Services.Users;
using Luxora.Application.Services.Users.Interfaces;
using Luxora.Application.Services.Videos;
using Luxora.Application.Services.Videos.Interfaces;
using Luxora.Domain.Entities.EFUser;
using Luxora.Infrastructure.Configuration;
using Luxora.Infrastructure.Context;
using Luxora.Infrastructure.Repositories.Products;
using Luxora.Infrastructure.Repositories.Products.Interfaces;
using Luxora.Infrastructure.Repositories.Trips;
using Luxora.Infrastructure.Repositories.Trips.Interfaces;
using Luxora.Infrastructure.Repositories.Users;
using Luxora.Infrastructure.Repositories.Users.Interfaces;
using Luxora.Infrastructure.Repositories.Videos;
using Luxora.Infrastructure.Repositories.Videos.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add service defaults & Aspire client integrations.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

var config = builder.Configuration.GetSection("JwtSettings");

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidIssuer = config["Issuer"],
        ValidAudience = config["Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Key"])),
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true
    };
});

builder.Services.AddAuthorization();

builder.Services.AddIdentityCore<User>()
    .AddRoles<IdentityRole<Guid>>()
    .AddEntityFrameworkStores<LuxoraDbContext>()
    .AddUserManager<UserManager<User>>()
    .AddRoleManager<RoleManager<IdentityRole<Guid>>>()
    .AddDefaultTokenProviders()
    .AddApiEndpoints();

builder.Services.AddDbContext<LuxoraDbContext>(options =>
{
    options.UseSqlServer(connectionString);
});

builder.Services.AddScoped<IReadTripService, ReadTripService>();
builder.Services.AddScoped<IWriteTripService, WriteTripService>();
builder.Services.AddScoped<IReadProductService, ReadProductService>();
builder.Services.AddScoped<IWriteProductService, WriteProductService>();
builder.Services.AddScoped<IReadVideoService, ReadVideoService>();
// builder.Services.AddScoped<IWriteVideoService, WriteVideoService>();

builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddScoped<ITripRepository, TripRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IVideoRepository, VideoRepository>();

builder.Services.AddSingleton<TokenProvider>();

builder.AddServiceDefaults();

builder.Services.AddDataProtection();

builder.Services.AddControllers();

// Add services to the container.
builder.Services.AddProblemDetails();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddSwagger();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy.WithOrigins("http://localhost:3000") // Allow only your frontend
            .AllowAnyMethod()
            .AllowAnyOrigin()
            .AllowAnyHeader());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseExceptionHandler();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();

    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Swagger UI Modified V.2");
        c.RoutePrefix = string.Empty;
    });
}

app.UseCors("AllowFrontend"); // Apply CORS policy
app.UseAuthentication();
app.UseAuthorization();

app.MapDefaultControllerRoute();

app.MapIdentityApi<User>();

app.MapDefaultEndpoints();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<LuxoraDbContext>();
    context.Database.EnsureCreated();
}

using (var scope = app.Services.CreateScope())
{
    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole<Guid>>>();
    var roles = new[] { "Admin", "User" };
    
    foreach (var role in roles)
    {
        if (!await roleManager.RoleExistsAsync(role))
        {
            await roleManager.CreateAsync(new IdentityRole<Guid>(role));
        }
    }
}

using (var scope = app.Services.CreateScope())
{
    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
    var adminEmail = builder.Configuration["AdminEmail"] ?? "admin@localhost";
    const string adminPassword = "Admin1234!";
    
    if (await userManager.FindByEmailAsync(adminEmail) == null)
    {
        var user = new User();
        user.UserName = adminEmail;
        user.Email = adminEmail;
        
        await userManager.CreateAsync(user, adminPassword);
        await userManager.AddToRoleAsync(user, "Admin");
    }
}

app.Run();
