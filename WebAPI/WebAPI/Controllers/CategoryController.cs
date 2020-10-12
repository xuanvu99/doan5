using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly doan5Context _context;

        public CategoryController(doan5Context context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Categories> Get()
        {
            return _context.Categories.ToList();
        }


        [HttpPost]
        public async Task<ActionResult<Categories>> create(Categories c)
        {
            _context.Categories.Add(c);
            await _context.SaveChangesAsync();
            return Ok(c);
        }
    }
}
