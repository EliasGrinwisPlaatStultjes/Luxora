namespace Luxora.Domain.Models;

public class Product
{
    public long Id { get; set; }
    
    public required string Name { get; set; }
    
    public long Price { get; set; }
}