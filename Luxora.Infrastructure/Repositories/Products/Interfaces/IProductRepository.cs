using Luxora.Domain.Models;

namespace Luxora.Infrastructure.Repositories.Products.Interfaces;

public interface IProductRepository
{
    Task<List<Product>> GetAllProducts();
    
    Task<Product> GetProductById(long productId);

    Task CreateProduct(Product product);
    
    Task UpdateProduct(long productId, Product product);
}