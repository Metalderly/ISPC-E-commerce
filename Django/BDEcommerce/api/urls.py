from django.urls import path
from api.views import UserView

urlpatterns = [
    path('v1/users', UserView.as_view()),
]