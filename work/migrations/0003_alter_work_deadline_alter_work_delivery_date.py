# Generated by Django 4.2.1 on 2023-07-25 05:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('work', '0002_work_current_phase_work_total_phase'),
    ]

    operations = [
        migrations.AlterField(
            model_name='work',
            name='deadline',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='work',
            name='delivery_date',
            field=models.DateTimeField(null=True),
        ),
    ]
