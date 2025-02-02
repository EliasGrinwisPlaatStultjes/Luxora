using Luxora.Application.Services.Trips;
using Luxora.Application.Services.Trips.Interfaces;
using Luxora.Infrastructure.Context;
using Luxora.Infrastructure.Repositories.Trips;
using Luxora.Infrastructure.Repositories.Trips.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add service defaults & Aspire client integrations.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddAuthorization();

builder.Services.AddIdentityCore<IdentityUser>()
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<LuxoraDbContext>()
    .AddApiEndpoints();

builder.Services.AddDbContext<LuxoraDbContext>(options =>
{
    options.UseSqlServer(connectionString);
});

builder.Services.AddScoped<IReadTripService, ReadTripService>();
builder.Services.AddScoped<IWriteTripService, WriteTripService>();
builder.Services.AddScoped<ITripRepository, TripRepository>();

builder.AddServiceDefaults();

builder.Services.AddDataProtection();

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

app.MapIdentityApi<IdentityUser>();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<LuxoraDbContext>();
    context.Database.EnsureCreated();
}

using (var scope = app.Services.CreateScope())
{
    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
    var roles = new[] { "Admin", "User" };
    
    foreach (var role in roles)
    {
        if (!await roleManager.RoleExistsAsync(role))
        {
            await roleManager.CreateAsync(new IdentityRole(role));
        }
    }
}

using (var scope = app.Services.CreateScope())
{
    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<IdentityUser>>();
    var adminEmail = builder.Configuration["AdminEmail"] ?? "admin@localhost";
    const string adminPassword = "Admin1234!";
    
    if (await userManager.FindByEmailAsync(adminEmail) == null)
    {
        var user = new IdentityUser();
        user.UserName = adminEmail;
        user.Email = adminEmail;
        
        await userManager.CreateAsync(user, adminPassword);
        await userManager.AddToRoleAsync(user, "Admin");
    }
}

app.Run();
