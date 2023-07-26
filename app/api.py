from django.urls import path, include

from customer.api import urls as urls_customer
from phase.api import urls as urls_phase
from work.api import urls as urls_work
from employee.api import urls as urls_employe

urlpatterns = [
    path('customer/', include(urls_customer)),
    path('phase/', include(urls_phase)),
    path('work/', include(urls_work)),
    path('employee/', include(urls_employe)),
]