from django.conf.urls import url
from . import views

urlpatterns = [
    url('^$', views.get_activities, name='get_activites'),
    url('^create$', views.create_new_activity, name='create_activites'),
]
