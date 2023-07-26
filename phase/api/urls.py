from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.PhaseList.as_view(), name='api_phase'),
    re_path(r'^(?P<pk>\d+)/$', views.PhaseDetail.as_view()),
    path('task/', views.WorkPhaseList.as_view(), name='api_work_phase'),
    re_path(r'^task/(?P<pk>\d+)/$', views.WorkPhaseDetail.as_view()),
    re_path(r'^task/employee/(?P<pk>\d+)/$', views.WorkPhaseEmployeeList.as_view()),
]