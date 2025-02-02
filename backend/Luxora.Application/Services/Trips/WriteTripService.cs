using Luxora.Application.Services.Trips.Interfaces;
using Luxora.Domain.Entities.EFTrip;
using Luxora.Infrastructure.Repositories.Trips.Interfaces;
using Luxora.Shared.Dto.Trips;

namespace Luxora.Application.Services.Trips;

public class WriteTripService : IWriteTripService
{
    private readonly ITripRepository _tripRepository;

    public WriteTripService(ITripRepository tripRepository)
    {
        _tripRepository = tripRepository;
    }
    
    public async Task CreateTrip(TripRequestDto tripRequest)
    {
        await _tripRepository.CreateTrip(tripRequest);
    }

    public async Task UpdateTrip(long tripId, Trip trip)
    {
        await _tripRepository.UpdateTrip(tripId, trip);
    }
    
    public async Task DeleteTrip(long tripId)
    {
        await _tripRepository.DeleteTrip(tripId);
    }
}