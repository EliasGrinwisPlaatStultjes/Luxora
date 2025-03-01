using Luxora.Domain.Entities.EFUser;
using Luxora.Infrastructure.Configuration;
using Luxora.Infrastructure.Context;
using Luxora.Infrastructure.Repositories.Users.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Luxora.Infrastructure.Repositories.Users;

public class UserRepository : IUserRepository
{
    private readonly LuxoraDbContext _context;
    private readonly TokenProvider _tokenProvider;
    private readonly UserManager<User> _userManager;

    public UserRepository(LuxoraDbContext context, TokenProvider tokenProvider, UserManager<User> userManager)
    {
        _context = context;
        _tokenProvider = tokenProvider;
        _userManager = userManager;
    }
    
    public async Task<string> VerifyUserAndReturnAccessToken(string email, string password)
    {
        User? user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        
        if (user is null || user.EmailConfirmed)
        {
            throw new Exception("The User was not found");
        }
        
        var verified = await _userManager.CheckPasswordAsync(user, password);
        
        if (!verified)
        {
            throw new Exception("The password is incorrect");
        }
        
        var token= _tokenProvider.Create(user);
        
        return token;
    }

    public async Task<User?> GetUserByEmail(string email, string password)
    {
        User? user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);

        if (user is null || user.EmailConfirmed)
        {
            return null;
        }
        
        var verified = await _userManager.CheckPasswordAsync(user, password);
        
        if (!verified)
        {
            return null;
        }
        
        return user;
    }
}