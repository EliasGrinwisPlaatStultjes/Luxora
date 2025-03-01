namespace Luxora.Shared.Dto.Products;

public class CreateProductRequestDto
{
    #region Properties
    
    public required string Name { get; set; }
    
    public string? Description { get; set; }
    
    public required decimal Price { get; set; }
    
    public required string ImageUrl { get; set; }
    
    #endregion
}