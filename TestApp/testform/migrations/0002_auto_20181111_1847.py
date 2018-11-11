# Generated by Django 2.1.3 on 2018-11-11 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testform', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Resident',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=50)),
                ('number', models.IntegerField()),
                ('date', models.CharField(max_length=20)),
            ],
        ),
        migrations.AlterField(
            model_name='mentor',
            name='email',
            field=models.EmailField(max_length=30),
        ),
    ]
