from rest_framework import serializers
from BaseCentral.models import Users, Producto, Category


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
<<<<<<< HEAD
        fields = ["id", "username", "password", "email", "first_name", "last_name", "pais", "provincia", "ciudad", "genero"]
=======
        fields = ["username", "password", "email", "first_name",
                  "last_name", "pais", "provincia", "ciudad", "genero"]
>>>>>>> 3cc0f322ce50a32a4accbdd277efcd538b051933


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
<<<<<<< HEAD
        fields = ["id", "producto", "image", "tipo", "caracteristicas", "precio", "vendedor"]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
=======
        fields = ["id", "producto", "image", "tipo",
                  "caracteristicas", "precio", "vendedor"]
>>>>>>> 3cc0f322ce50a32a4accbdd277efcd538b051933
