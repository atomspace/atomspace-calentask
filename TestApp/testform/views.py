from django.shortcuts import render, HttpResponseRedirect
from django.core.mail import send_mail
from django.conf import settings

from .models import Mentor, Resident
from .forms import MentorForm, ResidentForm


def index(request):
	mentor_list = Mentor.objects.all()
	resident_list = Resident.objects.all()
	return render(request, 'testform/index.html', {'mentor_form': MentorForm(), 'mentor_list': mentor_list, 'resident_form': ResidentForm(), 'resident_list': resident_list})

def mentor_form(request):
    if request.method == 'POST':
        form = MentorForm(request.POST)
        if form.is_valid():
            post = Mentor()
            post.name = request.POST['name']
            post.number = request.POST['number']
            post.email = request.POST['email']
            post.information = request.POST['information']
            post.save()
            subject = 'Request to mentor'
            from_email = settings.EMAIL_HOST_USER
            to_email = [from_email]
            contact_message = 'Name: {}\nPhone number: {}\nE-mail: {}\nInfo: {}\n'.format(post.name, post.number, post.email, post.information)
            send_mail(subject, contact_message, from_email, to_email, fail_silently=False)
            return HttpResponseRedirect('/')

def resident_form(request):
	if request.method == 'POST':
		form = ResidentForm(request.POST)
		if form.is_valid():
			post = Resident()
			post.name = request.POST['name']
			post.email = request.POST['email']
			post.number = request.POST['number']
			birth = '{}/{}/{}'.format(request.POST['date_day'], request.POST['date_month'], request.POST['date_year'])
			post.date = birth
			post.save()
			subject = 'Request to resident'
			from_email = settings.EMAIL_HOST_USER
			to_email = [from_email]
			contact_message = 'Name: {}\nE-mail: {}\nPhone number: {}\nBirth date: {}\n'.format(post.name, post.email, post.number, post.date)
			send_mail(subject, contact_message, from_email, to_email, fail_silently=False)
			return HttpResponseRedirect('/')