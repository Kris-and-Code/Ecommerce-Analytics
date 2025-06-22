# Ecommerce Analytics Backend

## Setup

1. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   python -m textblob.download_corpora
   ```

3. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

## API Endpoints
- `/api/sales-trends`: Get sales trends data
- `/api/reviews`: Get product reviews with sentiment analysis
- `/api/insights`: Get actionable insights
 