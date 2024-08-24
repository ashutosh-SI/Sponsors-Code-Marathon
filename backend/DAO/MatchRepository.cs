using SponsorsAPI.DAO;
using SponsorsAPI.Models;
using Npgsql;
namespace SponsorsAPI.DAO
{
    public class MatchRepository : IMatchRepository
    {
        private readonly string _connectionString;

        public MatchRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("PostgresDB");
        }

       


        public async Task<IEnumerable<Match>> GetMatchesWithTotalPaymentsAsync()
        {
            var matches = new List<Match>();

            using (var connection = new NpgsqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                var query = @"SELECT M.MatchID, M.MatchName, M.MatchDate, M.Location, COALESCE(SUM(P.AmountPaid), 0) AS TotalAmountPaid
                          FROM sponsorship.Matches M
                          LEFT JOIN sponsorship.Contracts C ON M.MatchID = C.MatchID
                          LEFT JOIN sponsorship.Payments P ON C.ContractID = P.ContractID
                          GROUP BY M.MatchID, M.MatchName, M.MatchDate, M.Location";

                using (var command = new NpgsqlCommand(query, connection))
                {
                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            matches.Add(new Match
                            {
                                MatchID = reader.GetInt32(0),
                                MatchName = reader.GetString(1),
                                MatchDate = reader.GetDateTime(2),
                                Location = reader.GetString(3),
                                TotalAmountPaid = reader.GetDecimal(4)
                            });
                        }
                    }
                }
            }

            return matches;
        }
    }

}
