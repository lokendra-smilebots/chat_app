from django.contrib import admin

from django.contrib.auth.models import Permission
from django.contrib.sessions.models import Session

from chats.models import Chats, Participants, Messages


admin.site.register(Chats)
admin.site.register(Participants)
admin.site.register(Messages)

admin.site.register(Permission)
admin.site.register(Session)
