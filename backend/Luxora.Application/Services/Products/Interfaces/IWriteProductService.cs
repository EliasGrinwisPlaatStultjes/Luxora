using Luxora.Domain.Entities.EFProduct;
using Luxora.Shared.Dto.Products;

namespace Luxora.Application.Services.Products.Interfaces;

public interface IWriteProductService
{
    Task<Product> CreateProduct(CreateProductRequestDto createProductRequestDto);
}