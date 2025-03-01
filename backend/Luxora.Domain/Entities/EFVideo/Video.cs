using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Luxora.Domain.Entities.EFVideo;

public class Video
{
    #region Properties
    
    [Key]
    [Column (Order = 1)]
    [Required]
    public long Id { get; set; }

    public required string Name { get; set; }
    
    public string? Description { get; set; }
    
    public required double Duration { get; set; }
    
    public required string ThumbnailUrl { get; set; }
    
    public required string VideoUrl { get; set; }
    
    public required long Views { get; set; }
    
    public required long Likes { get; set; }
    
    public DateTime CreatedAt { get; set; }
    
    public DateTime UpdatedAt { get; set; }
        
    #endregion
}