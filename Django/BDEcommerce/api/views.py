from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from BaseCentral.models import Usuario  
from .serializers import UserSerializer         

class UserView(APIView):

    def get(self, request):
        model = Usuario.objects.all()
        serializer = UserSerializer(model, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_404_NOT_FOUND)
