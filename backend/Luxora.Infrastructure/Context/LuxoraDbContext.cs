using Luxora.Domain.Entities.EFProduct;
using Luxora.Domain.Entities.EFTrip;
using Luxora.Domain.Entities.EFUser;
using Luxora.Domain.Entities.EFVideo;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Luxora.Infrastructure.Context;

public class LuxoraDbContext : IdentityDbContext<User, IdentityRole<Guid>, Guid>
{
    public LuxoraDbContext(DbContextOptions<LuxoraDbContext> options) : base(options) { }
    
    public DbSet<Trip> Trips { get; set; }
    
    public DbSet<Product> Products { get; set; }
    
    public DbSet<Video> Videos { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        modelBuilder.Entity<Trip>()
            .HasOne(x => x.User)
            .WithMany(x => x.Trips)
            .HasForeignKey(x => x.UserId);
    }
}