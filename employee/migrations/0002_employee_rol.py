# Generated by Django 4.2.1 on 2023-07-26 06:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='rol',
            field=models.CharField(default='Diseñador', max_length=255),
        ),
    ]
