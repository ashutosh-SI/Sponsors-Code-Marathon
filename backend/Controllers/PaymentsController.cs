using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SponsorsAPI.DAO;
using SponsorsAPI.Models;

namespace SponsorsAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly IPaymentRepository _paymentRepository;

        public PaymentsController(IPaymentRepository paymentRepository)
        {
            _paymentRepository = paymentRepository;
        }

        [HttpPost]
        public async Task<IActionResult> AddPayment([FromBody] Payment payment)
        {
            if (payment == null || payment.PaymentDate == default || payment.AmountPaid <= 0)
            {
                return BadRequest("Invalid payment data.");
            }

            var paymentExists = await _paymentRepository.PaymentExistsAsync(payment.ContractID, payment.PaymentDate, payment.AmountPaid);

            if (paymentExists)
            {
                return BadRequest("A payment with the same date and amount already exists for this contract.");
            }

            var paymentId = await _paymentRepository.AddPaymentAsync(payment);
            return Ok();
        }
    }
}


