using SponsorsAPI.Models;

namespace SponsorsAPI.DAO
{
        public interface IPaymentRepository
        {
            Task<bool> PaymentExistsAsync(int contractId, DateTime paymentDate, decimal amountPaid);
            Task<int> AddPaymentAsync(Payment payment);
        }

    }

