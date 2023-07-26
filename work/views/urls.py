from django.urls import path, re_path
from . import views

urlpatterns = [
   path('', views.index),
   re_path(r'^proforma/(?P<pk>\d+)/$', views.proforma),
]