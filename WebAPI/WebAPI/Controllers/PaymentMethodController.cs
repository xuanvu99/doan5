using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Helpers;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentMethodController: ControllerBase
    {
        private readonly doan5Context _context;

        public PaymentMethodController(doan5Context context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PaymentMethods>>> Get()
        {
            return await _context.PaymentMethods.ToListAsync();
        }

        [HttpGet("get-page/{first}/{rows}")]
        public ActionResult<IEnumerable<PaymentMethods>> GetPage(int first, int rows)
        {
            var res = _context.PaymentMethods.Skip(first).Take(rows).ToList();
            return Ok(new { list = res, total = _context.PaymentMethods.Count() });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PaymentMethods>> get(int id)
        {
            var payment_method = await _context.PaymentMethods.FindAsync(id);
            if (payment_method == null)
            {
                return NotFound();
            }
            return payment_method;
        }


        [HttpPost]
        public async Task<ActionResult<PaymentMethods>> create(PaymentMethods payment_method)
        {
            PaymentMethods pm = new PaymentMethods();
            pm.Name = payment_method.Name;
            pm.Description = payment_method.Description;
            pm.Image = payment_method.Image;
            _context.Add(pm);
            await _context.SaveChangesAsync();
            return Ok(payment_method);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> update(int id, [FromBody] PaymentMethods payment_method)
        {
            if (id != payment_method.Id)
            {
                return BadRequest();
            }
            _context.Entry(payment_method).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Exists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(payment_method);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<PaymentMethods>> delete(int id)
        {
            var payment_method = await _context.PaymentMethods.FindAsync(id);
            if (payment_method == null)
            {
                return NotFound();
            }
            _context.PaymentMethods.Remove(payment_method);
            await _context.SaveChangesAsync();
            return Ok(payment_method);
        }

        public bool Exists(int id)
        {
            return _context.PaymentMethods.Any(c => c.Id == id);
        }
    }
}
