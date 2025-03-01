using Luxora.Application.Services.Users.Interfaces;
using Luxora.Domain.Entities.EFUser;
using Luxora.Infrastructure.Repositories.Users.Interfaces;

namespace Luxora.Application.Services.Users;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    
    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    
    public Task<string> VerifyUserAndReturnAccessToken(string email, string password)
    {
        return _userRepository.VerifyUserAndReturnAccessToken(email, password);
    }

    public Task<User?> GetUserByEmail(string email, string password)
    {
        return _userRepository.GetUserByEmail(email, password);
    }
}