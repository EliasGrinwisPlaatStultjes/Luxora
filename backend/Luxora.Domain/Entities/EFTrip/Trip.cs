using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Luxora.Domain.Entities.EFTrip.Enums;

namespace Luxora.Domain.Entities.EFTrip;

public class Trip
{
    #region Properties
    
    [Key]
    [Column(Order = 1)]
    [Required]
    public long Id { get; set; }
    
    public required string Name { get; set; }
    
    public required string Description { get; set; }
    
    public required DateTime StartDate { get; set; }
    
    public required DateTime EndDate { get; set; }
    
    public required TripStatus Status { get; set; }
    
    #endregion
}