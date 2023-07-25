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

from ..models import Phase
from .serializers import PhaseSerializer

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