from django.shortcuts import render
from django.template.response import TemplateResponse
from django.contrib.auth.decorators import login_required

from employee.models import Employee


@login_required
def index (request):
    employees = Employee.objects.all()
    return TemplateResponse(request, 'home/index.html', {"employees": employees})