﻿using Luxora.Domain.Entities.EFTrip;

namespace Luxora.Application.Services.Trips.Interfaces;

public interface IReadTripService
{
    Task<List<Trip>> GetAllTrips();
    
    Task<Trip> GetTripById(long tripId);
}