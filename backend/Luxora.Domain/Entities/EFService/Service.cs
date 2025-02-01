using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Luxora.Domain.Entities.EFService;

public class Service
{
    #region Properties
    
    [Key]
    [Column(Order = 1)]
    [Required]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public long Id { get; set; }
    
    public required string Title { get; set; }
    
    public required string Description { get; set; }
    
    public double Price { get; set; }
    
    public int DurationInMinutes { get; set; }
    
    public required long ServiceCategoryId { get; set; }
    
    #endregion
    
    #region Navigation Propertie
    
    public virtual required ServiceCategory ServiceCategory { get; set; }
    
    #endregion
}