from django.shortcuts import render, HttpResponseRedirect

from django.http import StreamingHttpResponse
from .models import Mentor
from .forms import MentorForm


def index(request):
    if request.method == 'POST':
        form = MentorForm(request.POST)
        post = Mentor()
        if form.is_valid():
            post = Mentor()
            post.name = request.POST['name']
            post.number = request.POST['number']
            post.email = request.POST['email']
            post.information = request.POST['information']
            post.save()
            return HttpResponseRedirect('')
    else:
        mentor_list = Mentor.objects.all()   
        return render(request, 'testform/index.html', {'form': MentorForm(), 'list': mentor_list})