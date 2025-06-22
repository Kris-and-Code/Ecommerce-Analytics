import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SalesTrends from './pages/SalesTrends';
import Reviews from './pages/Reviews';
import Insights from './pages/Insights';
import './App.css';

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '1rem', background: '#222' }}>
        <Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/">Dashboard</Link>
        <Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/sales-trends">Sales Trends</Link>
        <Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/reviews">Reviews</Link>
        <Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/insights">Insights</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sales-trends" element={<SalesTrends />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </Router>
  );
}

export default App;
