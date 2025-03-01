using Luxora.Domain.Entities.EFTrip;
using Luxora.Shared.Dto.Trips;

namespace Luxora.Infrastructure.Repositories.Trips.Interfaces;

public interface ITripRepository
{
    Task<List<Trip>> GetAllTrips();
    
    Task<List<Trip>> GetAllTripsByUserId(Guid userId);
    
    Task<Trip> GetTripById(long tripId);

    Task CreateTrip(TripRequestDto trip);
    
    Task UpdateTrip(long tripId, Trip trip);
    
    Task DeleteTrip(long tripId);
}