using Luxora.Domain.Models;
using Luxora.Infrastructure.Context;
using Luxora.Infrastructure.Repositories.Products.Interfaces;
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
        return await _context.Products.ToListAsync();
    }

    public async Task<Product> GetProductById(long productId)
    {
        var product = await _context.Products.FindAsync(productId);

        if (product is null)
        {
            throw new KeyNotFoundException($"Product with ID {productId} not found");
        }
        
        return product;
    }

    public async Task CreateProduct(Product product)
    {
        _context.Products.Add(product);
        await _context.SaveChangesAsync();
    }
    
    public async Task UpdateProduct(long productId, Product product)
    {
        var existingProduct = await _context.Products.FindAsync(productId);

        if (existingProduct is null)
        {
            throw new KeyNotFoundException($"Product with ID {productId} not found");
        }

        existingProduct.Name = product.Name;
        existingProduct.Price = product.Price;

        await _context.SaveChangesAsync();
    }

    public async Task DeleteProduct(long productId)
    {
        var product = await _context.Products.FindAsync(productId);
        
        if (product is null)
        {
            throw new KeyNotFoundException($"Product with ID {productId} not found");
        }

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();
    }
}