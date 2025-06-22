import { useEffect, useState } from 'react';
import { fetchInsights } from '../api';

const Insights = () => {
  const [insights, setInsights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchInsights()
      .then(setInsights)
      .catch((err) => setError(err.message || 'Error loading insights'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{color: 'red'}}>Error: {error}</div>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Actionable Insights</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
        {insights.map((ins, i) => (
          <div key={i} style={{ background: '#222', color: 'white', padding: '1rem 2rem', borderRadius: '1rem', minWidth: 300 }}>
            {ins.insight}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
