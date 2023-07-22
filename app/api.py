from django.urls import path, include

from customer.api import urls

urlpatterns = [
    path('customer/', include(urls))
]