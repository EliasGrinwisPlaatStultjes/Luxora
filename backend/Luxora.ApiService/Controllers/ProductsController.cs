using Luxora.Application.Services.Products.Interfaces;
using Luxora.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Luxora.ApiService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IReadProductService _readProductService;
    private readonly IWriteProductService _writeProductService;

    public ProductsController(IReadProductService readProductService, IWriteProductService writeProductService)
    {
        _readProductService = readProductService;
        _writeProductService = writeProductService;
    }

    [HttpGet]
    public async Task<List<Product>> GetAllProducts()
    {
        var products = await _readProductService.GetAllProducts();
        return products;
    }

    [HttpGet("{productId:long}")]
    public async Task<Product> GetProductById(long productId)
    {
        var product = await _readProductService.GetProductById(productId);
        return product;
    }

    [HttpPost]
    public async Task CreateProduct(Product product)
    {
        await _writeProductService.CreateProduct(product);
    }
    
    [HttpPut("{productId:long}")]
    public async Task UpdateProduct([FromRoute] long productId, [FromBody] Product product)
    {
        await _writeProductService.UpdateProduct(productId, product);
    }
    
    [HttpDelete("{productId:long}")]
    public async Task DeleteProduct(long productId)
    {
        await _writeProductService.DeleteProduct(productId);
    }
}