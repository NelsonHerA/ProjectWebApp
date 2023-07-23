from django.db import models

class Phase(models.Model):
    name = models.CharField(max_length=255)
    sequence = models.IntegerField(default=0)
    STATUS_CHOICES = [
        (1, 'activo'),
        (0,'inactivo'),
    ]
    status = models.IntegerField(choices=STATUS_CHOICES, default=1)
    creation_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f'{self.sequence} - {self.name}'