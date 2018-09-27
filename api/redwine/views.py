import json

from rest_framework.decorators import api_view
from rest_framework.response import Response
from sklearn.externals import joblib

forest_reg = joblib.load('final_model.pkl')


@api_view(['POST'])
def estimate_red_wine_quality(request):
    features = json.loads(request.body).get('features')
    predictions = forest_reg.predict(features)
    return Response({'predictions': predictions})
