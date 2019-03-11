from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework import generics
# Create your views here.


class UserDataAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
