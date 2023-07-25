from django.db import models
from .phase import Phase
from work.models import Work
from employee.models import Employee

class WorkPhase(models.Model):
    phase = models.ForeignKey(Phase, on_delete=models.DO_NOTHING)
    work = models.ForeignKey(Work, related_name="phases", on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True)
    
    STATUS_CHOICES = [
        (0,'INACTIVO'),
        (1, 'PENDIENTE'),
        (2, 'INICIADO'),
        (3, 'TERMINADO'),
    ]
    status = models.IntegerField(choices=STATUS_CHOICES, default=1)
    creation_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f'{self.sequence} - {self.name}'