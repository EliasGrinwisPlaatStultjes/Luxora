using Luxora.Application.Services.Products.Interfaces;
using Luxora.Domain.Models;
using Moq;

namespace Tests;

public class ServiceTests
{
    private readonly Mock<IWriteProductService> _writeProductServiceMock;
    
    public ServiceTests()
    {
        _writeProductServiceMock = new Mock<IWriteProductService>();
    }
    
    [Fact]
    public async Task CreateValidProduct_ShouldReturnValidResponse()
    {
        // Arrange
        var product = new Product
        {
            Name = "Test Product",
            Price = 100
        };
        
        _writeProductServiceMock
            .Setup(service => service.CreateProduct(It.IsAny<Product>()))
            .Returns(Task.CompletedTask);

        var service = _writeProductServiceMock.Object;

        // Act
        var task = service.CreateProduct(product);
        
        // Assert
        await task;
        Assert.True(task.IsCompletedSuccessfully);  
    }
}