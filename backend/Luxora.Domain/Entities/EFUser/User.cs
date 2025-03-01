using Luxora.Domain.Entities.EFTrip;
using Microsoft.AspNetCore.Identity;

namespace Luxora.Domain.Entities.EFUser;

public class User : IdentityUser<Guid>
{
    #region Properties

    public string? FirstName { get; set; }
    
    public string? LastName { get; set; }
    
    #endregion
    
    #region Navigation Properties
    
    public virtual ICollection<Trip> Trips { get; set; }
    
    #endregion
}