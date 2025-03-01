using Luxora.Application.Services.Users.Interfaces;
using Luxora.Domain.Entities.EFUser;
using Luxora.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Luxora.ApiService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IUserService _userService;

    public AuthController(IUserService userService)
    {
        _userService = userService;
    }
    
    [HttpPost("login")]
    public async Task<string> Login([FromBody] LuxoraLoginRequest request)
    {
        var token = await _userService.VerifyUserAndReturnAccessToken(request.Email, request.Password);
        return token;
    }
    
    [HttpPost("user")]
    public async Task<User?> GetUserByEmail([FromBody] LuxoraLoginRequest request)
    {
        var user = await _userService.GetUserByEmail(request.Email, request.Password);
        return user;
    }
}