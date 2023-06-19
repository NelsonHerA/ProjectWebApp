from django.urls import path, include

from home.api import urls

urlpatterns = [
    path('customer/', include(urls))
]