// PaymentForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './paymentform.css';

const PaymentForm = () => {
    const [contractId, setContractId] = useState(''); 
    const [paymentDate, setPaymentDate] = useState('');
    const [amountPaid, setAmountPaid] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Pending'); 
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!contractId || !paymentDate || !amountPaid) {
            setError('All fields are required');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5260/api/Payments', {
                contractID: parseInt(contractId), 
                paymentDate,
                amountPaid: parseFloat(amountPaid),
                paymentStatus
            });

            if (response.status === 200 || response.status === 201) {
                setSuccess('Payment successfully created!');
                setError('');
                setContractId('');
                setPaymentDate('');
                setAmountPaid('');
                setPaymentStatus('Pending');
            }
        } catch (err) {
            console.error('Error creating payment:', err);
            setError('Failed to create payment. Please try again.');
        }
    };

    return (
        <div className="payment-form">
            <h2>Create Payment</h2>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="contractId">Contract ID:</label>
                    <input
                        type="text"
                        id="contractId"
                        value={contractId}
                        onChange={(e) => setContractId(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentDate">Payment Date:</label>
                    <input
                        type="date"
                        id="paymentDate"
                        value={paymentDate}
                        onChange={(e) => setPaymentDate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amountPaid">Amount Paid:</label>
                    <input
                        type="number"
                        id="amountPaid"
                        value={amountPaid}
                        onChange={(e) => setAmountPaid(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentStatus">Payment Status:</label>
                    <select
                        id="paymentStatus"
                        value={paymentStatus}
                        onChange={(e) => setPaymentStatus(e.target.value)}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default PaymentForm;
