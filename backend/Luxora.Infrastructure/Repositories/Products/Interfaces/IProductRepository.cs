using Luxora.Domain.Entities.EFProduct;
using Luxora.Shared.Dto.Products;

namespace Luxora.Infrastructure.Repositories.Products.Interfaces;

public interface IProductRepository
{
    Task<List<Product>> GetAllProducts();
    
    Task<Product?> GetProductById(long productId);
    
    Task<Product> CreateProduct(CreateProductRequestDto createProductRequestDto);
}