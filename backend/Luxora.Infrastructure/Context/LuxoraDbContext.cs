using Luxora.Domain.Entities.EFTrip;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Luxora.Infrastructure.Context;

public class LuxoraDbContext : IdentityDbContext<IdentityUser>
{
    public LuxoraDbContext(DbContextOptions<LuxoraDbContext> options) : base(options) { }
    
    public DbSet<Trip> Trips { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}