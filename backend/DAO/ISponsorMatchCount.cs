using SponsorsAPI.Models;

namespace SponsorsAPI.DAO
{
    public interface ISponsorMatchCount
    {
        Task<IEnumerable<SponsorMatchCount>> GetSponsorMatchCountByYearAsync(int year);
    }
}
