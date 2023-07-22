from django.template.response import TemplateResponse

def index(request):
    if request.method == "GET":
        response = TemplateResponse(request, 'customer/index.html', {})
        return response