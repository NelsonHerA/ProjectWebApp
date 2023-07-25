from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.PhaseList.as_view(), name='api_phase'),
    re_path(r'^(?P<pk>\d+)/$', views.PhaseDetail.as_view()),
]