using Luxora.Domain.Entities.EFVideo;
using Luxora.Infrastructure.Context;
using Luxora.Infrastructure.Repositories.Videos.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Luxora.Infrastructure.Repositories.Videos;

public class VideoRepository : IVideoRepository
{
    private readonly LuxoraDbContext _context;
    
    public VideoRepository(LuxoraDbContext context)
    {
        _context = context;
    }
    
    public async Task<List<Video>> GetAllVideos()
    {
        var videos = await _context.Videos.ToListAsync();
        return videos;
    }
}