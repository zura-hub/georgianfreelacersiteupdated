# Generated by Django 4.2.3 on 2023-07-28 20:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('templates', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='temp',
            name='price',
            field=models.CharField(blank=True, max_length=50, verbose_name='price'),
        ),
    ]
