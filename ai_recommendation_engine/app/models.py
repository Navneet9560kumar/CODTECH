import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class RecommendationModel:
    def __init__(self, data_path):
        self.data = pd.read_csv(data_path)
        self.vectorizer = TfidfVectorizer()
        self.similarity_matrix = None
        self._fit()

    def _fit(self):
        tfidf_matrix = self.vectorizer.fit_transform(self.data['title'])
        self.similarity_matrix = cosine_similarity(tfidf_matrix)

    def recommend(self, item_title):
        if item_title not in self.data['title'].values:
            return []

        idx = self.data[self.data['title'] == item_title].index[0]
        similarity_scores = list(enumerate(self.similarity_matrix[idx]))
        similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)[1:6]

        recommended_indices = [i[0] for i in similarity_scores]
        return self.data['title'].iloc[recommended_indices].tolist()
