from django import forms

class MentorForm(forms.Form):
    name = forms.CharField(label='Your name', max_length=30)
    number = forms.IntegerField(label='Your number')
    email = forms.EmailField(label='Your Email', max_length=30)
    information = forms.CharField(label='Your information', max_length=100)