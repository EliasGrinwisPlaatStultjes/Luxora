using Luxora.Domain.Entities.EFVideo;

namespace Luxora.Infrastructure.Repositories.Videos.Interfaces;

public interface IVideoRepository
{
    Task<List<Video>> GetAllVideos();
}