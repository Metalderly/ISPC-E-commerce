from django.urls import path
from api.views import UserView, UserByIdView, UserByUsernameView, ProductView, UserByUsernameAndPasswordView, ProductByUsernameView, ProductByIdView, CategoryView

urlpatterns = [
    path('v1/users', UserView.as_view()),
<<<<<<< HEAD
    path('v1/user/<str:username>', UserByUsernameView.as_view()),
    path('v1/user/<str:username>/<str:password>', UserByUsernameAndPasswordView.as_view()),
    path('v1/user/<int:id>', UserByIdView.as_view()),
    path('v1/products', ProductView.as_view()),
    path('v1/products/<str:username>', ProductByUsernameView.as_view()),
    path('v1/product/<int:id>', ProductByIdView.as_view()),
    path('v1/categories', CategoryView.as_view())
]
=======
    path('v1/users/<str:username>/<str:password>', UserByUsernameView.as_view()),
    path('v1/products', ProductView.as_view()),
    path('v1/products/<str:username>', ProductByUsernameView.as_view()),
    path('v1/product/<int:id>', ProductByIdView.as_view())
]
>>>>>>> 3cc0f322ce50a32a4accbdd277efcd538b051933
