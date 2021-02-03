from django.db import transaction

from rest_framework.serializers import ModelSerializer, Serializer, SlugField
from chats.models import Chats, Messages, Participants


class ChatSerializer(ModelSerializer):
    class Meta:
        model = Chats
        fields = '__all__'
        read_only_fields = (
            'created_by',
        )

    @transaction.atomic()
    def create(self, validated_data):
        user = self.context['request'].user
        chat = Chats.create_chat(**validated_data)
        Participants.add_participant_to_chat(
            chat=chat,
            user=user,
            created_by=user
        )
        return chat


class MessageSerializer(ModelSerializer):
    class Meta:
        model = Messages
        fields = '__all__'
        read_only_fields = (
            'created_by',
        )


class ParticipantSerializer(ModelSerializer):
    class Meta:
        model = Participants
        fields = '__all__'
        read_only_fields = (
            'created_by',
        )
        # extra_kwargs = {
        #     'created_by': {'read_only': True}
        # }