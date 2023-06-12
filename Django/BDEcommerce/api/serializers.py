from rest_framework import serializers
from BaseCentral.models import Users, Producto, Category


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ["id", "username", "password", "email", "first_name", "last_name", "pais", "provincia", "ciudad", "genero"]

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ["id", "producto", "image", "tipo", "caracteristicas", "precio", "vendedor"]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
