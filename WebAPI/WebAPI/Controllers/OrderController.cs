using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly doan5Context _context;

        public OrderController(doan5Context context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Orders>>> Get()
        {
            return await _context.Orders.ToListAsync();
        }

        [HttpGet("get-page/{first}/{rows}")]
        public ActionResult<IEnumerable<Orders>> GetPage(int first, int rows)
        {
            var res = _context.Orders.Skip(first).Take(rows).ToList();
            return Ok(new { list = res, total = _context.Orders.Count() });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Orders>> get(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }
            return order;
        }


        //[HttpPost]
        //public ActionResult<Orders> create([FromBody] OrdersClone data)
        //{
        //    var order = new Orders();
        //    order.Name = data.Name;
        //    order.Slug = data.Slug;
        //    order.Price = data.Price;
        //    order.Sale = data.Sale;
        //    order.Description = data.Description;
        //    order.Content = data.Content;
        //    order.Status = data.Status;
        //    order.CategoryId = 1;
        //    _context.Orders.Add(order);
        //    _context.SaveChanges();

        //    foreach (var item in data.Option)
        //    {
        //        var option = new Options();
        //        option.orderId = order.Id;
        //        option.Name = item.color;
        //        option.Quantity = item.quantityOption;
        //        option.Price = item.priceOption;
        //        _context.Options.Add(option);
        //        _context.SaveChanges();
        //    }
        //    return Ok(data);
        //}

        //[HttpPut("{id}")]
        //public ActionResult update(int id, [FromBody] OrdersClone data)
        //{

        //    if (id != data.Id)
        //    {
        //        return BadRequest();
        //    }
        //    try
        //    {
        //        var order = _context.Orders.Find(id);
        //        order.Name = data.Name;
        //        order.Slug = data.Slug;
        //        order.Price = data.Price;
        //        order.Sale = data.Sale;
        //        order.Description = data.Description;
        //        order.Content = data.Content;
        //        order.Status = data.Status;
        //        order.CategoryId = 1;
        //        _context.SaveChanges();
        //        //foreach (var item in data.Option)
        //        //{
        //        //    var option = new Options();
        //        //    option.orderId = order.Id;
        //        //    option.Name = item.color;
        //        //    option.Quantity = item.quantityOption;
        //        //    option.Price = item.priceOption;
        //        //    _context.SaveChanges();
        //        //}
        //        return Ok(data);
        //    }
        //    catch (Exception)
        //    {

        //    }
        //    return BadRequest();
        //}

        [HttpDelete("{id}")]
        public async Task<ActionResult<Orders>> delete(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }
            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();
            return Ok(order);
        }

        public bool Exists(int id)
        {
            return _context.Orders.Any(c => c.Id == id);
        }
    }
}
