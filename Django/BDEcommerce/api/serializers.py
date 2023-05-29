from rest_framework import serializers
from BaseCentral.models import Usuario

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ["dni", "nombre", "apellido", "Email"]