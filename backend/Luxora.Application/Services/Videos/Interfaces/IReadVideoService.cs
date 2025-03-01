using Luxora.Domain.Entities.EFVideo;

namespace Luxora.Application.Services.Videos.Interfaces;

public interface IReadVideoService
{
    Task<List<Video>> GetAllVideos();
}