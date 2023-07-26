import json
from http import HTTPStatus

from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponseBadRequest
from django.http import HttpResponseServerError
from django.http import HttpResponseNotFound
from django.http import JsonResponse
from django.db.models import Q

from ..models import Work
from .serializers import WorkSerializer
from phase.models import WorkPhase

class WorkList(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    def get(self, request, format=None):
        try:
            search = request.GET.get("search", None) 
            order = request.GET.get("order", "asc")
            offset = int(request.GET.get("offset", 0))
            limit = int(request.GET.get("limit", 10))

            works = Work.objects.all()
            if search:
                print(search)
                q1 = Q(id__icontains=search)
                q2 = Q(name__icontains=search)
                q3 = Q(description__icontains=search)
                q4 = Q(deadline__icontains=search)
                q5 = Q(customer__name__icontains=search)
                query = q1 | q2 | q3 | q4 | q5 
                search_works = works.filter(query)
            else:
                search_works = works
            limited_works = search_works[offset: offset+limit]
            serialized = WorkSerializer(limited_works, many=True)
            return JsonResponse(serialized.data, safe=False)
        except Exception as err:
            print(err)
            return HttpResponseServerError(f'Error: {str(err)}')
        
    def post(self, request, format=None):
        try:
            data = request.data
            customer_id = data.get("customerId")
            name = data.get("name")
            description = data.get("description")
            date = data.get("date")
            total_phase = data.get("phase_amount")
            price = data.get("price")
            payment = data.get("payment")

            work = Work()
            work.customer_id = customer_id
            work.name = name
            work.description = description
            work.deadline = date
            work.price = price
            work.payment = payment
            work.total_phase = total_phase
            work.save()
            
            i = 1
            while True:
                employee_id = data.get(f"phase{i}")
                phase_id = data.get(f"phase{i}_id")
                if employee_id is None:
                    break
                work_phase = WorkPhase()
                work_phase.phase_id = phase_id
                work_phase.work = work
                work_phase.employee_id = employee_id
                if i>1: 
                    work_phase.status = 0
                work_phase.save()
                i+=1

            work = Work.objects.get(pk=1)
            serializer = WorkSerializer(work)
            return JsonResponse(serializer.data, status=HTTPStatus.CREATED)
        except Exception as err:
            return HttpResponseServerError(f"Error: {str(err)}")
 
class WorkDetail(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    def get(self, request, pk, format=None):
        try:
            work = Work.objects.get(pk=pk)
            serializer = WorkSerializer(work)
            return JsonResponse(serializer.data)
        except Work.DoesNotExist as err:
            return HttpResponseNotFound()
        except Exception as err:
            return HttpResponseServerError(f"Error: {str(err)}")

    def put(self, request, pk, format=None):
        try:
            workPhases = request.data.get("workPhases", [])
            customer = Work.objects.get(pk=pk)
            serializer = WorkSerializer(customer, data=request.data)
            if serializer.is_valid():
                serializer.save()
                for wPhase in workPhases:
                    phase = WorkPhase.objects.get(pk=wPhase["id"])
                    phase.employee_id = wPhase["employee"]
                    phase.save()
                return JsonResponse(serializer.data)
            return HttpResponseBadRequest(json.dumps(serializer.errors))
        except Work.DoesNotExist as err:
            return HttpResponseNotFound()
        except Exception as err:
            return HttpResponseServerError(f"Error: {str(err)}")
