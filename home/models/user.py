from django.db import models


class User(models.Model):
    name = models.CharField(max_length=255)
    user_name = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    email = models.CharField(max_length=255, blank=True)
    STATUS_CHOICES = [
        (1, 'activo'),
        (0,'inactivo'),
    ]
    status = models.IntegerField(choices=STATUS_CHOICES, default=1)
    creation_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)