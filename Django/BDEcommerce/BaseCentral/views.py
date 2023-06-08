from django.shortcuts import render

from rest_framework import viewsets
from .serializer import UsersSerialzer
from .models import Users


class UsuarioViewSet (viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerialzer
