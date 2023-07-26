from django.db import models
from django.contrib.auth.models import User

class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=255)
    rol = models.CharField(max_length=255, default="Diseñador")
    dni = models.CharField(max_length=10)
    address = models.TextField(blank=True)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=255, blank=True)
    STATUS_CHOICES = [
        (1, 'activo'),
        (0,'inactivo'),
    ]
    status = models.IntegerField(choices=STATUS_CHOICES, default=1)
    creation_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f'{self.name}'