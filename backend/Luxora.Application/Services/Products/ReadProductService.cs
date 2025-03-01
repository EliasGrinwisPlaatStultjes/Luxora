using Luxora.Application.Services.Products.Interfaces;
using Luxora.Domain.Entities.EFProduct;
using Luxora.Infrastructure.Repositories.Products.Interfaces;

namespace Luxora.Application.Services.Products;

public class ReadProductService : IReadProductService
{
    private readonly IProductRepository _productRepository;

    public ReadProductService(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<List<Product>> GetAllProducts()
    {
        return await _productRepository.GetAllProducts();
    }

    public async Task<Product?> GetProductById(long productId)
    {
        return await _productRepository.GetProductById(productId);
    }
}