import { useEffect, useState } from 'react';
import { fetchSalesTrends, fetchReviews, fetchInsights } from '../api';

const Dashboard = () => {
  const [sales, setSales] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [insights, setInsights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [salesData, reviewsData, insightsData] = await Promise.all([
          fetchSalesTrends(),
          fetchReviews(),
          fetchInsights(),
        ]);
        setSales(salesData);
        setReviews(reviewsData);
        setInsights(insightsData);
      } catch (err: any) {
        setError(err.message || 'Error loading data');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{color: 'red'}}>Error: {error}</div>;

  const totalSales = sales.reduce((sum, s) => sum + (s.sales || 0), 0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dashboard Overview</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
        <div>
          <h2>Total Sales</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{totalSales}</p>
        </div>
        <div>
          <h2>Reviews</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{reviews.length}</p>
        </div>
        <div>
          <h2>Insights</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{insights.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
