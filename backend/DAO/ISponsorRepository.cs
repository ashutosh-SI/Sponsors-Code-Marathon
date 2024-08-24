using SponsorsAPI.Models;

namespace SponsorsAPI.DAO
{
    public interface ISponsorRepository
    {
        Task<IEnumerable<SponsorPaymentSummary>> GetSponsorPaymentSummariesAsync();
    }
}
