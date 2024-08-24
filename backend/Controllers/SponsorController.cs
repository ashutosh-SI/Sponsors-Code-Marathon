using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SponsorsAPI.DAO;

namespace SponsorsAPI.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class SponsorsController : ControllerBase
    {
        private readonly ISponsorRepository _sponsorRepository;

        public SponsorsController(ISponsorRepository sponsorRepository)
        {
            _sponsorRepository = sponsorRepository;
        }

        [HttpGet("payment-summary")]
        public async Task<IActionResult> GetSponsorPaymentSummaries()
        {
            var summaries = await _sponsorRepository.GetSponsorPaymentSummariesAsync();
            return Ok(summaries);
        }
    }

}
