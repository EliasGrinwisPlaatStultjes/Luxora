using Luxora.Application.Services.Trips.Interfaces;
using Luxora.Domain.Entities.EFTrip;
using Luxora.Shared.Dto.Trips;
using Microsoft.AspNetCore.Mvc;

namespace Luxora.ApiService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TripsController : ControllerBase
{
    private readonly IReadTripService _readTripService;
    private readonly IWriteTripService _writeTripService;

    public TripsController(IReadTripService readTripService, IWriteTripService writeTripService)
    {
        _readTripService = readTripService;
        _writeTripService = writeTripService;
    }

    [HttpGet]
    public async Task<List<Trip>> GetAllTrips()
    {
        var trips = await _readTripService.GetAllTrips();
        return trips;
    }

    [HttpGet("{tripId:long}")]
    public async Task<Trip> GetTripById(long tripId)
    {
        var trip = await _readTripService.GetTripById(tripId);
        return trip;
    }

    [HttpPost]
    public async Task CreateTrip([FromBody] TripRequestDto tripRequest)
    {
        await _writeTripService.CreateTrip(tripRequest);
    }
    
    [HttpPut("{tripId:long}")]
    public async Task UpdateTrip([FromRoute] long tripId, [FromBody] Trip trip)
    {
        await _writeTripService.UpdateTrip(tripId, trip);
    }
    
    [HttpDelete("{tripId:long}")]
    public async Task DeleteTrip(long tripId)
    {
        await _writeTripService.DeleteTrip(tripId);
    }
}