namespace Luxora.Application.Dto.Services;

public class RequestServiceDto
{
    public required string Title { get; set; }
    
    public required string Description { get; set; }
    
    public double Price { get; set; }
    
    public int DurationInMinutes { get; set; }
    
    public required long ServiceCategoryId { get; set; }
}