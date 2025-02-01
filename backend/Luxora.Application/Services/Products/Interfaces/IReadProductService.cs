using Luxora.Domain.Models;

namespace Luxora.Application.Services.Products.Interfaces;

public interface IReadProductService
{
    Task<List<Product>> GetAllProducts();
    
    Task<Product> GetProductById(long productId);
}