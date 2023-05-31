from django.urls import path
from api.views import UserView, ProductView

urlpatterns = [
    path('v1/users', UserView.as_view()),
    path('v1/products', ProductView.as_view())
]