namespace SponsorsAPI.Models
{
    public class Match
    {
        public int MatchID { get; set; }
        public string MatchName { get; set; }
        public DateTime MatchDate { get; set; }
        public string Location { get; set; }
        public decimal TotalAmountPaid { get; set; }  
    }

}
