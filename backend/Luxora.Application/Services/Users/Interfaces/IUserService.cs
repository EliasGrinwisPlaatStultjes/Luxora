using Luxora.Domain.Entities.EFUser;

namespace Luxora.Application.Services.Users.Interfaces;

public interface IUserService
{
    public Task<string> VerifyUserAndReturnAccessToken(string email, string password);
    
    public Task<User?> GetUserByEmail(string email, string password);
}