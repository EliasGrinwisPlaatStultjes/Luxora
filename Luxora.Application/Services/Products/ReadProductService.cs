using Luxora.Application.Services.Products.Interfaces;
using Luxora.Domain.Models;
using Luxora.Infrastructure.Repositories.Products.Interfaces;

namespace Luxora.Application.Services.Products;

public class ReadProductService : IReadProductService
{
    private readonly IProductRepository _productRepository;
    
    public ReadProductService(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }
    
    public Task<List<Product>> GetAllProducts()
    {
        var products = _productRepository.GetAllProducts();
        return products;
    }

    public Task<Product> GetProductById(long productId)
    {
        var product = _productRepository.GetProductById(productId);
        return product;
    }
}