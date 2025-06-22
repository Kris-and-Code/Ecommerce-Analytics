import { useEffect, useState } from 'react';
import { fetchReviews } from '../api';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const sentimentColor = (sentiment: string) => {
  if (sentiment === 'positive') return 'green';
  if (sentiment === 'negative') return 'red';
  return 'gray';
};

const sentimentColors: Record<string, string> = {
  positive: 'green',
  negative: 'red',
  neutral: 'gray',
};

const Reviews = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReviews()
      .then(setReviews)
      .catch((err) => setError(err.message || 'Error loading reviews'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{color: 'red'}}>Error: {error}</div>;

  // Calculate sentiment distribution
  const sentimentCounts = reviews.reduce(
    (acc, r) => {
      acc[r.sentiment] = (acc[r.sentiment] || 0) + 1;
      return acc;
    },
    { positive: 0, negative: 0, neutral: 0 } as Record<string, number>
  );
  const pieData = Object.entries(sentimentCounts).map(([sentiment, value]) => ({ name: sentiment, value }));

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Product Reviews</h1>
      <div style={{ width: '100%', maxWidth: 400, margin: '0 auto' }}>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {pieData.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={sentimentColors[entry.name] || 'gray'} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <table style={{ margin: '2rem auto 0 auto', borderCollapse: 'collapse', minWidth: 400 }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Customer</th>
            <th>Review</th>
            <th>Sentiment</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((r, i) => (
            <tr key={i}>
              <td>{r.product_id}</td>
              <td>{r.customer}</td>
              <td>{r.review}</td>
              <td>
                <span style={{
                  color: 'white',
                  background: sentimentColor(r.sentiment),
                  padding: '0.2em 0.7em',
                  borderRadius: '1em',
                  fontWeight: 'bold',
                }}>{r.sentiment}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
