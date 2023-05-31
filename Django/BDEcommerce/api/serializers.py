from rest_framework import serializers
from BaseCentral.models import Usuario, Producto

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ["dni", "nombre", "apellido", "Email"]


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ["producto", "image", "tipo", "caracteristicas", "codigo", "precioXu", "precioXm", "vendedor"]