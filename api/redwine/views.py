import json

from rest_framework.decorators import api_view
from rest_framework.response import Response
from sklearn.externals import joblib


@api_view(['POST'])
def estimate_red_wine_quality(request):
    values = json.loads(request.body).get('values')
    forest_reg = joblib.load('final_model.pkl')
    predictions = forest_reg.predict(values)
    return Response({'predictions': predictions})
