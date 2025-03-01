
using Luxora.Domain.Entities.EFTrip.Enums;

namespace Luxora.Shared.Dto.Trips;

public class TripRequestDto
{
    public required string Name { get; set; }
    
    public required string Description { get; set; }
    
    public required DateTime StartDate { get; set; }
    
    public required DateTime EndDate { get; set; }
    
    public required TripStatus Status { get; set; }
    
    public required Guid UserId { get; set; }
}