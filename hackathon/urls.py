from django.urls import path
from . import views
from django.views.generic import TemplateView
app_name = 'hackathon'

urlpatterns = [

    path('', views.indexpage, name='indexpage'),
    path('welcome', views.welcome.as_view(), name='welcome'),
    path('activation', TemplateView.as_view(template_name='hackathon/activation.html'), name='activation'),
    path('activate/<code>', views.activate_user_view, name='activate'),
    path('home-feed', views.homeview.as_view(), name='homefeed'),

]