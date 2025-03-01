using Luxora.Domain.Entities.EFUser;
using Microsoft.AspNetCore.Identity;

namespace Luxora.Infrastructure.Repositories.Users.Interfaces;

public interface IUserRepository
{
    Task<string> VerifyUserAndReturnAccessToken(string email, string password);
    
    Task<User?> GetUserByEmail(string email, string password);
}