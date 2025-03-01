using Luxora.Domain.Entities.EFProduct;

namespace Luxora.Application.Services.Products.Interfaces;

public interface IReadProductService
{
    Task<List<Product>> GetAllProducts();
    
    Task<Product?> GetProductById(long productId);
}