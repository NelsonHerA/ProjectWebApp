from django.template.response import TemplateResponse

def index(request):
    if request.method == "GET":
        response = TemplateResponse(request, 'phase/index.html', {})
        return response