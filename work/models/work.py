from django.db import models


class Work(models.Model):
    customer = models.ForeignKey("customer.Customer", on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    deadline = models.DateTimeField()
    delivery_date = models.DateTimeField(null=True)
    current_phase = models.IntegerField(default=1)
    total_phase = models.IntegerField(default=0)
    price = models.FloatField(default=0)
    payment = models.FloatField(default=0)
    STATUS_CHOICES = [
        (1, 'activo'),
        (0,'inactivo'),
    ]
    status = models.IntegerField(choices=STATUS_CHOICES, default=1)
    creation_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f'{self.customer.name} - {self.name}'