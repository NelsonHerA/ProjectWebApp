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
            search = request.GET.get("search", None) 
            order = request.GET.get("order", "asc")
            offset = int(request.GET.get("offset", 0))
            limit = int(request.GET.get("limit", 10))

            customers = Customer.objects.all()
            if search:
                print(search)
                q1 = Q(id__icontains=search)
                q2 = Q(name__icontains=search)
                q3 = Q(dni__icontains=search)
                q4 = Q(ruc__icontains=search)
                q5 = Q(phone__icontains=search)
                q6 = Q(address__icontains=search)
                q7 = Q(email__icontains=search)
                query = q1 | q2 | q3 | q4 | q5 | q6 | q7
                search_customers = customers.filter(query)
            else:
                search_customers = customers
            limited_customers = search_customers[offset: offset+limit]
            serialized = CustomerSerializer(limited_customers, many=True)
            return JsonResponse(serialized.data, safe=False)
        except Exception as err:
            print(err)
            return HttpResponseServerError(f'Error: {str(err)}')
        
    def post(self, request, format=None):
        try:
            serializer = CustomerSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=HTTPStatus.CREATED)
            return HttpResponseBadRequest(json.dumps(serializer.errors))
        except Exception as err:
            return HttpResponseServerError(f"Error: {str(err)}")
 
class CustomerDetail(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    def get(self, request, pk, format=None):
        try:
            customer = Customer.objects.get(pk=pk)
            serializer = CustomerSerializer(customer)
            return JsonResponse(serializer.data)
        except Customer.DoesNotExist as err:
            return HttpResponseNotFound()
        except Exception as err:
            return HttpResponseServerError(f"Error: {str(err)}")

    def put(self, request, pk, format=None):
        try:
            customer = Customer.objects.get(pk=pk)
            serializer = CustomerSerializer(customer, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return HttpResponseBadRequest(json.dumps(serializer.errors))
        except Customer.DoesNotExist as err:
            return HttpResponseNotFound()
        except Exception as err:
            return HttpResponseServerError(f"Error: {str(err)}")
