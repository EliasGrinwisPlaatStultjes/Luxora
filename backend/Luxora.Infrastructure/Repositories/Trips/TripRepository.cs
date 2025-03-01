using Luxora.Domain.Entities.EFTrip;
using Luxora.Infrastructure.Context;
using Luxora.Infrastructure.Repositories.Trips.Interfaces;
using Luxora.Shared.Dto.Trips;
using Microsoft.EntityFrameworkCore;

namespace Luxora.Infrastructure.Repositories.Trips;

public class TripRepository : ITripRepository
{
    private readonly LuxoraDbContext _context;
    
    public TripRepository(LuxoraDbContext context)
    {
        _context = context;
    }

    public async Task<List<Trip>> GetAllTrips()
    {
        return await _context.Trips.ToListAsync();
    }

    public async Task<List<Trip>> GetAllTripsByUserId(Guid userId)
    {
        var trips = await _context.Trips.Where(trip => trip.UserId == userId).ToListAsync();
        return trips;
    }

    public async Task<Trip> GetTripById(long tripId)
    {
        var trip = await _context.Trips.FindAsync(tripId);

        if (trip is null)
        {
            throw new ArgumentNullException($"Trip with ID {tripId} not found");
        }
        
        return trip;
    }

    public async Task CreateTrip(TripRequestDto tripRequest)
    {
        var trip = new Trip
        {
            Name = tripRequest.Name,
            Description = tripRequest.Description,
            StartDate = tripRequest.StartDate,
            EndDate = tripRequest.EndDate,
            Status = tripRequest.Status,
            UserId = tripRequest.UserId
        };
        
        _context.Trips.Add(trip);
        await _context.SaveChangesAsync();
    }
    
    public async Task UpdateTrip(long tripId, Trip trip)
    {
        var existingTrip = await _context.Trips.FindAsync(tripId);

        if (existingTrip is null)
        {
            throw new ArgumentNullException($"Trip with ID {tripId} not found");
        }

        existingTrip.Name = trip.Name;
        existingTrip.Description = trip.Description;
        existingTrip.StartDate = trip.StartDate;
        existingTrip.EndDate = trip.EndDate;
        existingTrip.Status = trip.Status;
        
        await _context.SaveChangesAsync();
    }

    public async Task DeleteTrip(long tripId)
    {
        var trip = await _context.Trips.FindAsync(tripId);
        
        if (trip is null)
        {
            throw new ArgumentNullException($"Trip with ID {tripId} not found");
        }

        _context.Trips.Remove(trip);
        await _context.SaveChangesAsync();
    }
}