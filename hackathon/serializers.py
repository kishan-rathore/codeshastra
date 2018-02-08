from rest_framework import serializers
from . import models
from django.contrib.auth.models import User


class UserSerialize(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserProfileSerialize(serializers.ModelSerializer):
    class Meta:
        model = models.UserProfile
        depth = 1