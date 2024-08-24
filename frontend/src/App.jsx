import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Matches from './components/Matches'
import Summaries from './components/Summary'
import Home from './components/Home'
import PaymentForm from './components/AddPayment';
import SponsorMatchCount from './components/SponsorMatchCount';

const App = () => {
  return (
      <Router>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/payment-summary" element={<Summaries />} />
                <Route path="/add-payment" element={<PaymentForm />} />
                <Route path="/sponsor-match-count" element={<SponsorMatchCount />} />
            </Routes>
        </div>
      </Router>
  );
};

export default App;







