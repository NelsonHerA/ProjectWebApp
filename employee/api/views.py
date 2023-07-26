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
from django.contrib.auth.models import User

from ..models import Employee
from customer.models import Customer
from .serializers import EmployeeSerializer

class EmployeeList(APIView):
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]
    renderer_classes = [JSONRenderer]
        
    def post(self, request, format=None):
        try:
            serializer = EmployeeSerializer(data=request.data)
            if serializer.is_valid():
                username = request.data.get("username")
                password = request.data.get("password")
                email = request.data.get("email")
                user = User.objects.create_user(username=username, email=email, password=password)
                serializer.save(user=user)
                return JsonResponse(serializer.data, status=HTTPStatus.CREATED)
            return HttpResponseBadRequest(json.dumps(serializer.errors))
        except Exception as err:
            return HttpResponseServerError(f"Error: {str(err)}")
 
class EmployeeDetail(APIView):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [JSONRenderer]

    def put(self, request, pk, format=None):
        try:
            employee = Employee.objects.get(pk=pk)
            serializer = EmployeeSerializer(employee, data=request.data)
            if serializer.is_valid():
                serializer.save()
                username = request.data.get("username")
                email = request.data.get("email")
                user = employee.user
                user.username = username
                user.email = email
                user.save()
                return JsonResponse(serializer.data)
            return HttpResponseBadRequest(json.dumps(serializer.errors))
        except Employee.DoesNotExist as err:
            return HttpResponseNotFound()
        except Exception as err:
            return HttpResponseServerError(f"Error: {str(err)}")
