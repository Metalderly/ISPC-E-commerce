from rest_framework import serializer
from .models import Users


class UsersSerialzer(serializer.modelSerialzer):
    class usuario:
        model = Users
        campos = '__all__'
