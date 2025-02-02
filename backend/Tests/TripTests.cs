using Luxora.Application.Services.Trips.Interfaces;
using Luxora.Domain.Entities.EFTrip;
using Luxora.Domain.Entities.EFTrip.Enums;
using Luxora.Shared.Dto.Trips;
using Moq;

namespace Tests;

public class TripTests
{
    private readonly Mock<IWriteTripService> _writeTripServiceMock;
    
    public TripTests()
    {
        _writeTripServiceMock = new Mock<IWriteTripService>();
    }
    
    [Fact]
    public async Task CreateValidTrip_ShouldReturnValidResponse()
    {
        // Arrange
        var trip = new TripRequestDto
        {
            Name = "Test Trip",
            Description = "Some description",
            StartDate = DateTime.Today,
            EndDate = DateTime.Today.AddDays(2),
            Status = TripStatus.Planned
        };
        
        _writeTripServiceMock
            .Setup(service => service.CreateTrip(It.IsAny<TripRequestDto>()))
            .Returns(Task.CompletedTask);

        var service = _writeTripServiceMock.Object;

        // Act
        var task = service.CreateTrip(trip);
        
        // Assert
        await task;
        Assert.True(task.IsCompletedSuccessfully);  
    }
}