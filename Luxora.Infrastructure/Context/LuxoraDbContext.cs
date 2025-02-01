using Luxora.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Luxora.Infrastructure.Context;

public class LuxoraDbContext : DbContext
{
    public LuxoraDbContext(DbContextOptions<LuxoraDbContext> options) : base(options) { }
    
    public DbSet<Product> Products { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().ToTable("Products");
    }
}