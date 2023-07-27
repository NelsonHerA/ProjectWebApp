from django.template.response import TemplateResponse

from customer.models import Customer
from phase.models import Phase
from employee.models import Employee
from ..models import Work

def index(request):
    if request.method == "GET":
        customer_id = request.GET.get("customer", None)
        phases = Phase.objects.filter(status=True)
        employees = Employee.objects.all()
        if customer_id:
            customer = Customer.objects.get(pk=customer_id)
            return TemplateResponse(request, 'work/index.html', {"customer": customer, "phases": phases, "employees": employees})
        return TemplateResponse(request, 'work/index.html', {"customer": None, "phases": phases, "employees": employees})


def proforma(request, pk):
    if request.method == "GET":
        work = Work.objects.get(pk=pk)
        resta = work.price - work.payment
        return TemplateResponse(request, 'work/report.html', {"work": work,"pk": pk, "resta": resta})