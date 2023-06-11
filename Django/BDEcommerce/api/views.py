from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
<<<<<<< HEAD
from BaseCentral.models import Users , Producto, Category
from .serializers import UserSerializer, ProductSerializer, CategorySerializer
=======
from BaseCentral.models import Users, Producto
from .serializers import UserSerializer, ProductSerializer

>>>>>>> 3cc0f322ce50a32a4accbdd277efcd538b051933

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

<<<<<<< HEAD
class UserByUsernameAndPasswordView(APIView):
    def get(self, request, username, password):
      try:
        model = Users.objects.get(username=username, password=password)
        serializer = UserSerializer(model)
        if(Users.objects.filter(username=username, password=password).exists()):
          return Response(serializer.data)
      except:
          return Response("Datos incorrectos")
class UserByUsernameView(APIView):
    def get(self, request, username):
        try:
            model = Users.objects.get(username=username)
            serializer = UserSerializer(model)
            if(Users.objects.filter(username=username).exists()):
                return Response(serializer.data)
        except:
            return Response("Datos incorrectos")
class UserByIdView(APIView):
    def get(self, request, id):
      try:
        model = Users.objects.get(id=id)
        serializer = UserSerializer(model)
        if(Users.objects.filter(id=id).exists()):
          return Response(serializer.data)
      except:
          return Response("Datos incorrectos")
=======

class UserByUsernameView(APIView):
    def get(self, request, username, password):
        try:
            model = Users.objects.get(username=username, password=password)
            serializer = UserSerializer(model)
            if (Users.objects.filter(username=username, password=password).exists()):
                return Response(serializer.data)
        except:
            return Response("Datos incorrectos")

>>>>>>> 3cc0f322ce50a32a4accbdd277efcd538b051933

class ProductView(APIView):
    def get(self, request):
        products = Producto.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


class ProductByUsernameView(APIView):
    def get(self, request, username):
        products = Producto.objects.filter(
            vendedor=Users.objects.get(username=username).id)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ProductByIdView(APIView):
    def get(self, request, id):
        try:
            product = Producto.objects.get(id=id)
            serializer = ProductSerializer(product)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Producto.DoesNotExist:
            return Response("No se ha encontrado ningún producto")
    def put(self, request, id):
        product = Producto.objects.get(id=id)
<<<<<<< HEAD
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Producto actualizado", status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
    def delete(self, request, id):
        product = Producto.objects.get(id=id)
        product.delete()
        return Response("Producto eliminado correctamente")
class CategoryView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
=======
        serializer = ProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)
>>>>>>> 3cc0f322ce50a32a4accbdd277efcd538b051933
