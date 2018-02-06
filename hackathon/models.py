from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save,pre_save,m2m_changed
from django.dispatch import receiver
from django.urls import reverse
# from django.conf import settings
# from .utils import unique_slug_generator
from django.core.mail import send_mail
from .utils import code_generator
from hackathon.utils import unique_slug_generator,code_generator
from django.core.validators import FileExtensionValidator


class UserProfile(models.Model):
    user=models.OneToOneField(User ,on_delete=models.CASCADE)
    activation_key=models.CharField(max_length=250,null=True,blank=True)
    name=models.CharField(max_length=100)
    userphoto=models.ImageField(upload_to='static/hackathon/userimages',validators=[FileExtensionValidator(['jpeg','png','bmp','jpg'],"file exteion not valid")],null=True)
    first=models.BooleanField(default=True)
    activated=models.BooleanField(default=False)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.user.username

    def send_activation_email(self):
        if not self.activated:
            self.activation_key=code_generator()
            self.save()
            path_=reverse('hackathon:activate',kwargs={'code':self.activation_key})
            path_='https://codeshastra-hackathon.herokuapp.com'+path_
            subject = 'Hackathon email activation'
            from_email = settings.DEFAULT_FROM_EMAIL
            message = f'activate your account here: {path_}'
            recipient_list = [self.user.email]
            html_message = f'<p>activate your account here: {path_}</p>'
            sent_mail=send_mail(subject, message, from_email, recipient_list, fail_silently=False, html_message=html_message)
            return sent_mail



def post_save_user_reciever(sender,instance,created,*args,**kwargs):
    if created:
        profile, is_created=UserProfile.objects.get_or_create(user=instance)

post_save.connect(post_save_user_reciever,sender=User)