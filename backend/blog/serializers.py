from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Blog

# Serializers define the API representation.

class BlogSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(slug_field="username", read_only=True)
    class Meta:
        model = Blog
        fields = '__all__'
        lookup_field = 'slug'
        

# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ['url', 'username', 'email', 'is_staff']
