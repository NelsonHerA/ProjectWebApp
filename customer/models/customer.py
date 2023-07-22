from django.db import models


class Customer(models.Model):
    name = models.CharField(max_length=255)
    dni = models.CharField(max_length=10)
    ruc = models.CharField(max_length=11)
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