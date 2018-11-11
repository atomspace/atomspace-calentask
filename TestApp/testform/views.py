from django.shortcuts import render, HttpResponseRedirect
from django.core.mail import send_mail
from django.conf import settings

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
            subject = 'Site conact form'
            from_email = settings.EMAIL_HOST_USER
            to_email = [from_email]
            contact_message = (post.name, post.number, post.email, post.information)       
            send_mail(subject, contact_message, from_email, to_email, fail_silently=False)
            return HttpResponseRedirect('')
    else:
        mentor_list = Mentor.objects.all()   
        return render(request, 'testform/index.html', {'form': MentorForm(), 'list': mentor_list})