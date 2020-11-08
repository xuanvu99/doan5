using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using WebAPI.Models;
using BC = BCrypt.Net.BCrypt;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly doan5Context _context;

        public HomeController(doan5Context context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Home()
        {
            var category = _context.Categories.Select(c => new {
                c.Name,
                c.Slug,
                c.Status
            }).Where(c => c.Status == true).ToList();
            return Ok(category);
        }

        [HttpGet, Route("list-product/{id}")]
        public IActionResult ListProduct(string id)
        {
            var cate = _context.Categories.Select(c => new {
                c.Id,
                c.Slug
            }).FirstOrDefault(l => l.Slug == id);
            if (cate == null)
            {
                return NotFound();
            }
            var list = _context.Products
                .Select(p => new
                {
                    p.Id,
                    p.Name,
                    p.Price,
                    p.Sale,
                    p.Description,
                    p.CategoryId,
                    Images = _context.Images.Where(i => i.ProductId == p.Id).ToList()
                })
                .Where(l => l.CategoryId == cate.Id);
            return Ok(list);
        }

    }
}
