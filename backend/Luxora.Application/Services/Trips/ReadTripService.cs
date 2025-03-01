using Luxora.Application.Services.Trips.Interfaces;
using Luxora.Domain.Entities.EFTrip;
using Luxora.Infrastructure.Repositories.Trips.Interfaces;

namespace Luxora.Application.Services.Trips;

public class ReadTripService : IReadTripService
{
    private readonly ITripRepository _tripRepository;
    
    public ReadTripService(ITripRepository tripRepository)
    {
        _tripRepository = tripRepository;
    }
    
    public Task<List<Trip>> GetAllTrips()
    {
        var trips = _tripRepository.GetAllTrips();
        return trips;
    }

    public Task<List<Trip>> GetAllTripsByUserId(Guid userId)
    {
        var trips = _tripRepository.GetAllTripsByUserId(userId);
        return trips;
    }

    public Task<Trip> GetTripById(long tripId)
    {
        var trip = _tripRepository.GetTripById(tripId);
        return trip;
    }
}