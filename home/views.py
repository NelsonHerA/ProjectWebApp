from django.shortcuts import render
from django.template.response import TemplateResponse
from django.contrib.auth.decorators import login_required
# Create your views here.
@login_required
def index (request):
    return TemplateResponse(request, 'home/index.html')