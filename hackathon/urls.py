from django.urls import path, include
from . import views
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter

app_name = 'hackathon'
router = DefaultRouter()
# router.register('hello-viewset',views.helloviewset,base_name='hello-viewset')
# router.register('profile',views.userprofileviewset)
# router.register('login',views.loginviewset,base_name='login')
# router.register('feed',views.userprofilefeedviewset)
# router.register('album',views.albumview)
router.register('users', views.UserViewSet)

urlpatterns = [

    path('', views.indexpage, name='indexpage'),
    path('welcome', views.welcome.as_view(), name='welcome'),
    path('activation', TemplateView.as_view(template_name='hackathon/activation.html'), name='activation'),
    path('activate/<code>', views.activate_user_view, name='activate'),
    path('home-feed', views.homeview.as_view(), name='homefeed'),
    path('api/', include(router.urls)),

]