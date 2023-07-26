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

from ..models import Phase, WorkPhase
from .serializers import PhaseSerializer, WorkPhaseSerializer
from employee.models import Employee

class PhaseList(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    def get(self, request, format=None):
        try:
            search = request.GET.get("search", None) 
            order = request.GET.get("order", "asc")
            offset = int(request.GET.get("offset", 0))
            limit = int(request.GET.get("limit", 10))

            phases = Phase.objects.all()
            if search:
                print(search)
                q1 = Q(id__icontains=search)
                q2 = Q(name__icontains=search)
                q3 = Q(status__icontains=search)
                query = q1 | q2 | q3
                search_phase = phases.filter(query)
            else:
                search_phase = phases
            limited_phase = search_phase[offset: offset+limit]
            serialized = PhaseSerializer(limited_phase, many=True)
            return JsonResponse(serialized.data, safe=False)
        except Exception as err:
            print(err)
            return HttpResponseServerError(f'Error: {str(err)}')
        
    # def post(self, request, format=None):
    #     try:
    #         serializer = PhaseSerializer(data=request.data)
    #         if serializer.is_valid():
    #             serializer.save()
    #             return JsonResponse(serializer.data, status=HTTPStatus.CREATED)
    #         return HttpResponseBadRequest(json.dumps(serializer.errors))
    #     except Exception as err:
    #         return HttpResponseServerError(f"Error: {str(err)}")
 
class PhaseDetail(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    def get(self, request, pk, format=None):
        try:
            phase = Phase.objects.get(pk=pk)
            serializer = PhaseSerializer(phase)
            return JsonResponse(serializer.data)
        except Phase.DoesNotExist as err:
            return HttpResponseNotFound()
        except Exception as err:
            return HttpResponseServerError(f"Error: {str(err)}")

    def put(self, request, pk, format=None):
        try:
            phase = Phase.objects.get(pk=pk)
            serializer = PhaseSerializer(phase, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return HttpResponseBadRequest(json.dumps(serializer.errors))
        except Phase.DoesNotExist as err:
            return HttpResponseNotFound()
        except Exception as err:
            return HttpResponseServerError(f"Error: {str(err)}")

class WorkPhaseList(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    def get(self, request, format=None):
        try:
            search = request.GET.get("search", None) 
            order = request.GET.get("order", "asc")
            offset = int(request.GET.get("offset", 0))
            limit = int(request.GET.get("limit", 10))

            employee = request.user.employee
            work_phases = WorkPhase.objects.filter(employee=employee).order_by('-status')
            if search:
                print(search)
                q1 = Q(id__icontains=search)
                q2 = Q(work__name__icontains=search)
                q3 = Q(work__customer__name__icontains=search)
                q4 = Q(phase__name__icontains=search)
                q5 = Q(work__description__icontains=search)
                query = q1 | q2 | q3 | q4 | q5
                search_work_phase = work_phases.filter(query)
            else:
                search_work_phase = work_phases
            limited_work_phase = search_work_phase[offset: offset+limit]
            serialized = WorkPhaseSerializer(limited_work_phase, many=True)
            return JsonResponse(serialized.data, safe=False)
        except Exception as err:
            print(err)
            return HttpResponseServerError(f'Error: {str(err)}')

class WorkPhaseDetail(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    def put(self, request, pk, format=None):
        try:
            work_phase = WorkPhase.objects.get(pk=pk)
            serializer = WorkPhaseSerializer(work_phase, data=request.data)
            if serializer.is_valid():
                serializer.save()

                work_phase = WorkPhase.objects.get(pk=pk)
                prev_is_end = False
                if work_phase.status == 3:
                    for task in work_phase.work.phases.all():
                        if prev_is_end:
                            task.work.current_phase = task.work.current_phase + 1
                            task.work.save()
                            task.status = 1
                            task.save()
                            prev_is_end = False
                        if task.id == int(pk):
                            prev_is_end = True
                return JsonResponse(serializer.data)
            return HttpResponseBadRequest(json.dumps(serializer.errors))
        except Phase.DoesNotExist as err:
            return HttpResponseNotFound()
        except Exception as err:
            return HttpResponseServerError(f"Error: {str(err)}")
        
class WorkPhaseEmployeeList(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    def get(self, request, pk, format=None):
        try:
            search = request.GET.get("search", None) 
            order = request.GET.get("order", "asc")
            offset = int(request.GET.get("offset", 0))
            limit = int(request.GET.get("limit", 10))

            employee = Employee.objects.get(pk=pk)
            work_phases = WorkPhase.objects.filter(employee=employee).order_by('-status')
            if search:
                print(search)
                q1 = Q(id__icontains=search)
                q2 = Q(work__name__icontains=search)
                q3 = Q(work__customer__name__icontains=search)
                q4 = Q(phase__name__icontains=search)
                q5 = Q(work__description__icontains=search)
                query = q1 | q2 | q3 | q4 | q5
                search_work_phase = work_phases.filter(query)
            else:
                search_work_phase = work_phases
            limited_work_phase = search_work_phase[offset: offset+limit]
            serialized = WorkPhaseSerializer(limited_work_phase, many=True)
            return JsonResponse(serialized.data, safe=False)
        except Exception as err:
            print(err)
            return HttpResponseServerError(f'Error: {str(err)}')
