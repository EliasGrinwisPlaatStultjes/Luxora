using Luxora.Domain.Models;

namespace Luxora.Application.Services.Products.Interfaces;

public interface IWriteProductService
{
    Task CreateProduct(Product product);
    
    Task UpdateProduct(long productId, Product product);
}