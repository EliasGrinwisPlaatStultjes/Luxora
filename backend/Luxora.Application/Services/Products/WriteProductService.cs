using Luxora.Application.Services.Products.Interfaces;
using Luxora.Domain.Entities.EFProduct;
using Luxora.Infrastructure.Repositories.Products.Interfaces;
using Luxora.Shared.Dto.Products;

namespace Luxora.Application.Services.Products;

public class WriteProductService : IWriteProductService
{
    private readonly IProductRepository _productRepository;
    
    public WriteProductService(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }
    
    public async Task<Product> CreateProduct(CreateProductRequestDto createProductRequestDto)
    {
        return await _productRepository.CreateProduct(createProductRequestDto);
    }
}