from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from BaseCentral.models import Users , Producto
from .serializers import UserSerializer, ProductSerializer 

class UserView(APIView):

    def get(self, request):
        model = Users.objects.all()
        serializer = UserSerializer(model, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_404_NOT_FOUND)

class UserByUsernameView(APIView):
    def get(self, request, username, password):
      try:
        model = Users.objects.get(username=username, password=password)
        serializer = UserSerializer(model)
        if(Users.objects.filter(username=username, password=password).exists()):
          return Response(serializer.data)
      except:
          return Response("Datos incorrectos")

class ProductView(APIView):
    def get(self, request):
        products = Producto.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = ProductSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_404_NOT_FOUND)

class ProductByUsernameView(APIView):
    def get(self, request, username):
        products = Producto.objects.filter(vendedor=Users.objects.get(username=username).id)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
class ProductByIdView(APIView):
    def get(self, request, id):
        product = Producto.objects.get(id=id)
        serializer = ProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)