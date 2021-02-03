from django.urls import path, re_path
from .views import ChatsApiView, MessagesApiView, ParticipantsApiView

urlpatterns = [
    re_path(r'^api/chat/$', ChatsApiView.as_view()),
    re_path(r'^api/message/$', MessagesApiView.as_view()),
    re_path(r'^api/participants/$', ParticipantsApiView.as_view()),
]
