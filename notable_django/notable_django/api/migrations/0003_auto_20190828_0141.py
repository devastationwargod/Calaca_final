# Generated by Django 2.2 on 2019-08-28 01:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20190824_1928'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='curso',
            field=models.CharField(default='Esto es curso', max_length=200),
        ),
        migrations.AddField(
            model_name='note',
            name='responsible',
            field=models.CharField(default='Esto es Responsible', max_length=60),
        ),
        migrations.AlterField(
            model_name='note',
            name='instructor',
            field=models.CharField(default='Esto es un Instructor', max_length=60),
        ),
        migrations.AlterField(
            model_name='note',
            name='title',
            field=models.CharField(default='Esto es un Titulo', max_length=200),
        ),
    ]
