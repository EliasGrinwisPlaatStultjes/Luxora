using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Luxora.Domain.Entities.EFProduct;

public class Product
{
    #region Properties
    
    [Key]
    [Column(Order = 1)]
    [Required]
    public long Id { get; set; }
    
    public required string Name { get; set; }
    
    public string? Description { get; set; }
    
    public required decimal Price { get; set; }
    
    public required string ImageUrl { get; set; }
    
    public DateTime CreatedAt { get; set; }
    
    public DateTime UpdatedAt { get; set; }
    
    #endregion
}