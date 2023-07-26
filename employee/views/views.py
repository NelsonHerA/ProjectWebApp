from django.template.response import TemplateResponse
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth.decorators import login_required

from ..models import Employee

@login_required
@staff_member_required
def index(request, pk):
    if request.method == "GET":
        employees = Employee.objects.all()
        current_employee = employees.get(pk=pk)
        response = TemplateResponse(request, 'employee/index.html', {"employees": employees, "current_employee": current_employee, "pk": pk})
        return response