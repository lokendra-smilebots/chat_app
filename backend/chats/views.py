from django.db.models import Q
from rest_framework import generics
from rest_framework.response import Response

from chats.models import Chats, Messages, Participants
from chats.serializers import ChatSerializer, MessageSerializer, ParticipantSerializer


class ChatsApiView(generics.ListCreateAPIView):
    serializer_class = ChatSerializer

    def perform_create(self, serializer):
        return serializer.save(created_by=self.request.user)

    def get_queryset(self):
        chats = Chats.objects.all()
        if self.request.user.is_superuser:
            return chats

        chats = []
        for participant in Participants.objects.filter(user=self.request.user):
            chats.append(participant.chat)
        return chats


class MessagesApiView(generics.ListCreateAPIView):
    serializer_class = MessageSerializer

    def perform_create(self, serializer):
        return serializer.save(created_by=self.request.user)

    def get_queryset(self):
        messages = Messages.objects.all()
        if self.request.user.is_superuser:
            return messages
        messages = []
        for participant in Participants.objects.filter(user=self.request.user):
            messages.append(participant.chat)
        return messages


class ParticipantsApiView(generics.ListCreateAPIView):
    serializer_class = ParticipantSerializer
    queryset = Participants.objects.all()

    def perform_create(self, serializer):
        return serializer.save(created_by=self.request.user)
