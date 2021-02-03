from django.db import models
from django.contrib.auth.models import User


class Chats(models.Model):
    class Meta:
        verbose_name = 'Chat'
        verbose_name_plural = 'Chats'

    chat_type = (
        ('PRIVATE', 'Private'),
        ('GROUP', 'Group')
    )
    chat_type = models.CharField(choices=chat_type, max_length=7)
    chat_name = models.CharField(max_length=50)
    created_by = models.ForeignKey(
        User, on_delete=models.PROTECT, related_name='+')
    objects = models.Manager()

    def __str__(self):
        return f'{self.chat_name} - {self.chat_type}'

    @classmethod
    def create_chat(self, chat_name, chat_type='PRIVATE', created_by=None):
        chat = self(chat_type=chat_type, chat_name=chat_name,
                    created_by=created_by)
        chat.save()
        return chat


class Participants(models.Model):
    class Meta:
        verbose_name = 'Participant'
        verbose_name_plural = 'Participants'

    chat = models.ForeignKey(Chats, on_delete=models.PROTECT, related_name='+')
    user = models.ForeignKey(User, on_delete=models.PROTECT, related_name='+')
    created_by = models.ForeignKey(
        User, on_delete=models.PROTECT, related_name='+')
    objects = models.Manager()

    def __str__(self):
        return f'{self.user} - {self.chat}'

    @classmethod
    def add_participants_to_chat(self, chat, users, created_by=None):
        """This method used to create multiple participants for a chat"""
        if not type(users) == list:
            raise Exception('users must be list')
        for user in users:
            try:
                participant = Participants.objects.get(chat=chat, user=user)
            except:
                participant = self(chat=chat, user=user, created_by=created_by)
                participant.save()
        return participant

    @classmethod
    def add_participant_to_chat(self, chat, user, created_by=None):
        """This method used to create a participants for a chat"""
        try:
            participant = Participants.objects.get(chat=chat, user=user)
        except:
            participant = self(chat=chat, user=user, created_by=created_by)
            participant.save()
        return participant


class Messages(models.Model):
    class Meta:
        verbose_name = 'Message'
        verbose_name_plural = 'Messages'

    chat = models.ForeignKey(Chats, on_delete=models.PROTECT, related_name='+')
    # user = models.ForeignKey(User, on_delete=models.PROTECT, related_name='+')
    message = models.TextField()
    created_by = models.ForeignKey(
        User, on_delete=models.PROTECT, related_name='+')
    objects = models.Manager()

    def __str__(self):
        return f'{self.created_by} - {self.chat} - {self.message}'

    @classmethod
    def create_message(self, chat, user, message, created_by):
        message = self(chat=chat, user=user, message=message,
                       created_by=created_by)
        message.save()
        return message
