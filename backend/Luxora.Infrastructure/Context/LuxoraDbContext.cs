using Luxora.Domain.Entities.EFService;
using Luxora.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Luxora.Infrastructure.Context;

public class LuxoraDbContext : DbContext
{
    public LuxoraDbContext(DbContextOptions<LuxoraDbContext> options) : base(options) { }
    
    public DbSet<Product> Products { get; set; }
    
    public DbSet<Service> Services { get; set; }
    
    public DbSet<ServiceCategory> ServiceCategories { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().ToTable("Products");
        modelBuilder.Entity<Service>().ToTable("Services");
        modelBuilder.Entity<ServiceCategory>().ToTable("ServiceCategories");
    }
}