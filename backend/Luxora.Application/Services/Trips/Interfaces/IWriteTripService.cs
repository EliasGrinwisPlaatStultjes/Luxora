using Luxora.Domain.Entities.EFTrip;
using Luxora.Shared.Dto.Trips;

namespace Luxora.Application.Services.Trips.Interfaces;

public interface IWriteTripService
{
    Task CreateTrip(TripRequestDto tripRequest);
    
    Task UpdateTrip(long tripId, Trip trip);
    
    Task DeleteTrip(long tripId);
}