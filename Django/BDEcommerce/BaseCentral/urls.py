from django.urls import path, include
from rest_framework import routers
from BaseCentral import views

router = routers.DefaultRouter()
router.register(r'usuario', views.UsuarioViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
