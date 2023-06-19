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

from ..models import Customer
from .serializers import CustomerSerializer

class CustomerList(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    def get(self, request, format=None):
        try:
            customers = Customer.objects.all()
            serialized = CustomerSerializer(customers, many=True)
            return JsonResponse(serialized.data, safe=False)
        except Exception as err:
            print(err)
            return HttpResponseServerError(f'Error: {str(err)}')
 