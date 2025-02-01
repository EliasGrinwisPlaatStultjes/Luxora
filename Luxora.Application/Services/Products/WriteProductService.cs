using Luxora.Application.Services.Products.Interfaces;
using Luxora.Domain.Models;
using Luxora.Infrastructure.Repositories.Products.Interfaces;

namespace Luxora.Application.Services.Products;

public class WriteProductService : IWriteProductService
{
    private readonly IProductRepository _productRepository;

    public WriteProductService(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }
    
    public async Task CreateProduct(Product product)
    {
        await _productRepository.CreateProduct(product);
    }

    public async Task UpdateProduct(long productId, Product product)
    {
        await _productRepository.UpdateProduct(productId, product);
    }
}