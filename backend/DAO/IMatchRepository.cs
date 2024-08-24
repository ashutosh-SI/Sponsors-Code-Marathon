using SponsorsAPI.Models;

namespace SponsorsAPI.DAO
{
    public interface IMatchRepository
    {
        Task<IEnumerable<Match>> GetMatchesWithTotalPaymentsAsync();
    }
}
