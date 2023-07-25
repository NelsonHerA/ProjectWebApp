from django.template.response import TemplateResponse
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth.decorators import login_required

from employee.models import Employee

@login_required
@staff_member_required
def index(request):
    if request.method == "GET":
        employees = Employee.objects.all()
        response = TemplateResponse(request, 'customer/index.html', {"employees": employees})
        return response