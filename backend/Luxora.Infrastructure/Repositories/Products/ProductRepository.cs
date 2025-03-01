using Luxora.Domain.Entities.EFProduct;
using Luxora.Infrastructure.Context;
using Luxora.Infrastructure.Repositories.Products.Interfaces;
using Luxora.Shared.Dto.Products;
using Microsoft.EntityFrameworkCore;

namespace Luxora.Infrastructure.Repositories.Products;

public class ProductRepository : IProductRepository
{
    private readonly LuxoraDbContext _context;
    
    public ProductRepository(LuxoraDbContext context)
    {
        _context = context;
    }
    
    public async Task<List<Product>> GetAllProducts()
    {
        var products = await _context.Products.ToListAsync();
        return products;
    }

    public async Task<Product?> GetProductById(long productId)
    {
        return await _context.Products.FindAsync(productId);
    }

    public async Task<Product> CreateProduct(CreateProductRequestDto createProductRequestDto)
    {
        var product = new Product
        {
            Name = createProductRequestDto.Name,
            Description = createProductRequestDto.Description,
            Price = createProductRequestDto.Price,
            ImageUrl = createProductRequestDto.ImageUrl,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow  
        };

        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        return product;
    }
}