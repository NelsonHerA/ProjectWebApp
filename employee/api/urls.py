from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.EmployeeList.as_view(), name='api_employee'),
    re_path(r'^(?P<pk>\d+)/$', views.EmployeeDetail.as_view()),
]