using Luxora.Application.Services.Videos.Interfaces;
using Luxora.Domain.Entities.EFVideo;
using Luxora.Infrastructure.Repositories.Videos.Interfaces;

namespace Luxora.Application.Services.Videos;

public class ReadVideoService : IReadVideoService
{
    private readonly IVideoRepository _videoRepository;
    
    public ReadVideoService(IVideoRepository videoRepository)
    {
        _videoRepository = videoRepository;
    }
    
    public async Task<List<Video>> GetAllVideos()
    {
        return await _videoRepository.GetAllVideos();
    }
}