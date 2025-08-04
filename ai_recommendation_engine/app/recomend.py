from app.models import RecommendationModel

model = RecommendationModel("data/sample_data.csv")

def get_recommendations(item: str):
    return model.recommend(item)
