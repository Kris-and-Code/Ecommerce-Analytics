# E-commerce Analytics Dashboard

A full-stack web application that analyzes e-commerce data (e.g., product reviews, sales trends) and provides actionable insights through interactive visualizations.


## Features

- **Interactive Dashboard**: Get a high-level overview of key metrics like total sales, review counts, and generated insights.
- **Sales Trend Analysis**: Visualize sales data over time with an interactive line chart.
- **Review Sentiment Analysis**: Automatically analyzes customer review sentiment (Positive, Negative, Neutral) using NLP.
- **Data Visualization**: Features a sentiment distribution pie chart and a detailed review table with sentiment badges.
- **Actionable Insights**: Displays generated insights to help guide business decisions.

## Tech Stack

| Category      | Technology                                         |
|---------------|----------------------------------------------------|
| **Frontend**  | React, TypeScript, Vite, Recharts, React Router    |
| **Backend**   | FastAPI, Python, TextBlob (for NLP)                |
| **Package Mgmt**| npm, pip & venv                                    |

## Project Structure

```
Ecommerce-Analytics/
│
├── backend/        # FastAPI application
│   ├── main.py
│   └── requirements.txt
│
└── frontend/       # React + TypeScript application
    ├── src/
    │   ├── pages/  # Contains different pages/routes
    │   ├── api.ts  # Handles API calls to the backend
    │   └── App.tsx # Main app component with routing
    └── package.json
```

## Setup and Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Python](https://www.python.org/) (v3.8 or higher)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone github.com/Kris-and-Code/Ecommerce-Analytics
   cd Ecommerce-Analytics
   ```

2. **Set up the Backend:**
   ```bash
   # Navigate to the backend directory
   cd backend

   # Create and activate a virtual environment
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate

   # Install dependencies
   pip install -r requirements.txt

   # Download NLP corpora for TextBlob
   python -m textblob.download_corpora
   ```

3. **Set up the Frontend:**
   ```bash
   # Navigate to the frontend directory from the root
   cd frontend

   # Install dependencies
   npm install
   ```

## Running the Application

You need to run both the backend and frontend servers in separate terminals.

1. **Start the Backend Server:**
   - Make sure you are in the `backend` directory with your virtual environment activated.
   - Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```
   The backend will be running at `http://localhost:8000`.

2. **Start the Frontend Server:**
   - Make sure you are in the `frontend` directory.
   - Run the React development server:
   ```bash
   npm run dev
   ```
   The frontend will be running at `http://localhost:5173` (or another port if 5173 is busy).

3. **Access the Application:**
   Open your browser and navigate to the frontend URL (e.g., `http://localhost:5173`).

## API Endpoints

The backend exposes the following REST API endpoints:

- `GET /api/sales-trends`: Returns sales data over time.
- `GET /api/reviews`: Returns product reviews with sentiment analysis.
- `GET /api/insights`: Returns a list of actionable insights.
