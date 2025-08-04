from fastapi import FastAPI, Query, HTTPException
from app.recommend import get_recommendations
import pandas as pd

app = FastAPI(
    title="AI Recommendation Engine",
    description="Fetch personalized recommendations using ML",
    version="1.0.0"
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Recommendation Engine!"}

@app.get("/recommend")
def recommend(item: str = Query(..., description="Title to recommend similar items for")):
    recommendations = get_recommendations(item)
    if not recommendations:
        raise HTTPException(status_code=404, detail="Item not found in database")
    return {
        "input": item,
        "recommendations": recommendations
    }

@app.get("/all-items")
def all_items():
    """Get all available titles from dataset."""
    df = pd.read_csv("data/sample_data.csv")
    return {"items": df['title'].tolist()}

@app.get("/health")
def health_check():
    """Health check endpoint."""
    return {"status": "API is up and running"}
