from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict, Any
from textblob import TextBlob
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock sales data
data_sales = [
    {"date": "2024-06-01", "sales": 1200},
    {"date": "2024-06-02", "sales": 1500},
    {"date": "2024-06-03", "sales": 900},
    {"date": "2024-06-04", "sales": 1700},
]

# Mock reviews data
reviews = [
    {"product_id": 1, "review": "Great product, really loved it!", "customer": "Alice"},
    {"product_id": 2, "review": "Not what I expected. Quality could be better.", "customer": "Bob"},
    {"product_id": 1, "review": "Decent for the price.", "customer": "Charlie"},
    {"product_id": 3, "review": "Terrible experience, will not buy again.", "customer": "Dana"},
]

# Mock insights
data_insights = [
    {"insight": "Product 1 is the best seller this week."},
    {"insight": "Product 3 has the lowest average review rating."},
]

class SalesTrend(BaseModel):
    date: str
    sales: int

class Review(BaseModel):
    product_id: int
    review: str
    customer: str
    sentiment: str = None

class Insight(BaseModel):
    insight: str

@app.get("/api/sales-trends", response_model=List[SalesTrend])
def get_sales_trends():
    return data_sales

@app.get("/api/reviews", response_model=List[Review])
def get_reviews():
    reviews_with_sentiment = []
    for r in reviews:
        sentiment = TextBlob(r["review"]).sentiment.polarity
        if sentiment > 0.1:
            sent = "positive"
        elif sentiment < -0.1:
            sent = "negative"
        else:
            sent = "neutral"
        reviews_with_sentiment.append({**r, "sentiment": sent})
    return reviews_with_sentiment

@app.get("/api/insights", response_model=List[Insight])
def get_insights():
    return data_insights 