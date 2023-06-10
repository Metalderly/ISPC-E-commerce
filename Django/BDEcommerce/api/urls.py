from django.urls import path
from api.views import UserView, ProductView, UserByUsernameView, ProductByUsernameView, ProductByIdView

urlpatterns = [
    path('v1/users', UserView.as_view()),
    path('v1/users/<str:username>/<str:password>', UserByUsernameView.as_view()),
    path('v1/products', ProductView.as_view()),
    path('v1/products/<str:username>', ProductByUsernameView.as_view()),
    path('v1/product/<int:id>', ProductByIdView.as_view())
]
