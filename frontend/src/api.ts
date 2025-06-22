const API_BASE = 'http://localhost:8000/api';

export async function fetchSalesTrends() {
  const res = await fetch(`${API_BASE}/sales-trends`);
  if (!res.ok) throw new Error('Failed to fetch sales trends');
  return res.json();
}

export async function fetchReviews() {
  const res = await fetch(`${API_BASE}/reviews`);
  if (!res.ok) throw new Error('Failed to fetch reviews');
  return res.json();
}

export async function fetchInsights() {
  const res = await fetch(`${API_BASE}/insights`);
  if (!res.ok) throw new Error('Failed to fetch insights');
  return res.json();
} 