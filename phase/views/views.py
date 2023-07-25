from django.template.response import TemplateResponse
from employee.models import Employee


def index(request):
    if request.method == "GET":
        employees = Employee.objects.all()
        response = TemplateResponse(request, 'phase/index.html', {"employees":  employees})
        return response