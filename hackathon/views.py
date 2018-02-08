from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import generic
from django.http import Http404
from django.views.generic.edit import CreateView,UpdateView,DeleteView,FormView
from django.urls import reverse_lazy
from django.shortcuts import render,redirect,get_object_or_404,_get_queryset,HttpResponse
from django.contrib.auth import authenticate,login
from django.views.generic import View,CreateView,ListView,DetailView
from django.views import View
from django.contrib.auth import get_user_model
from django.core.paginator import Paginator,EmptyPage,PageNotAnInteger
User=get_user_model()
from .form import UserRegisterForm
from .models import UserProfile
from rest_framework.response import Response
from . import serializers
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from rest_framework import filters
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticatedOrReadOnly,IsAuthenticated
# Create your views here.

@login_required
def indexpage(request):
    qs=UserProfile.objects.get(user=request.user)
    if qs.first:
        print(request.user)
        print(request.user.id)
        print(qs.id)
        path=reverse_lazy('hackathon:homefeed')
        print(path)
        return redirect(path)
    else:
        return redirect('hackathon:homefeed')

class welcome(LoginRequiredMixin,ListView):
    model = UserProfile
    template_name = 'hackathon/welcome.html'
    def get_context_data(self,*args,**kwargs):
        context=super(welcome,self).get_context_data(*args,**kwargs)
        user=self.request.user
        qs=UserProfile.objects.filter(prefferedgenre=user.userprofile.prefferedgenre)
        context['person']=qs
        print(qs)
        return context

def activate_user_view(request, code=None, *args, **kwargs):
    if code:
        qs = UserProfile.objects.filter(activation_key=code)
        if qs.exists() and qs.count() == 1:
            profile = qs.first()
            if not profile.activated:
                user_=profile.user
                user_.is_active=True
                user_.save()
                profile.activated=True
                profile.activation_key=None
                profile.save()
                path = reverse_lazy('login')
                return redirect(path)
    # invalid code
    return redirect('/login')


class registerview(CreateView):
    form_class = UserRegisterForm
    template_name = 'registration/register.html'
    success_url = reverse_lazy('hackathon:activation')
    def dispatch(self,*args, **kwargs):
        if self.request.user.is_authenticated:
            return redirect('/login')
        return super(registerview,self).dispatch(*args,**kwargs)


class homeview(LoginRequiredMixin,View):

    def get(self,request,*args,**kwargs):
        if not request.user.is_authenticated:
            return render(request, 'registration/login.html', {})
        return render(request,'hackathon/homefeed.html',{})


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserProfileSerialize

    print(queryset)
