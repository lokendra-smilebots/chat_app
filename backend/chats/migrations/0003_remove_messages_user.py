# Generated by Django 2.2 on 2021-02-03 16:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0002_auto_20210116_1319'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='messages',
            name='user',
        ),
    ]
