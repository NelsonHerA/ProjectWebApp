from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.CustomerList.as_view(), name='api_customers'),
    re_path(r'^(?P<pk>\d+)/$', views.CustomerDetail.as_view()),
]