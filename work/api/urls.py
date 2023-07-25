from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.WorkList.as_view(), name='api_works'),
    re_path(r'^(?P<pk>\d+)/$', views.WorkDetail.as_view()),
]