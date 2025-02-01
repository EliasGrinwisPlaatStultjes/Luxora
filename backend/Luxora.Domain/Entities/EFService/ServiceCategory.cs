using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Luxora.Domain.Entities.EFService;

public class ServiceCategory
{
    #region Properties
    
    [Key]
    [Column(Order = 1)]
    [Required]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public long Id { get; set; }
    
    public required string Title { get; set; }
    
    #endregion
}