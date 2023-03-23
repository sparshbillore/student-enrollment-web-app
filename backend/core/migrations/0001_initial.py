# Generated by Django 4.1.7 on 2023-03-22 01:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('enrollment_id', models.CharField(db_index=True, max_length=12, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('gender', models.CharField(max_length=10)),
                ('adhar_card_number', models.CharField(max_length=20)),
                ('dob', models.DateField()),
                ('identification_marks', models.CharField(max_length=255)),
                ('category', models.CharField(max_length=50)),
                ('height', models.CharField(max_length=10)),
                ('weight', models.CharField(max_length=10)),
                ('mail_id', models.EmailField(max_length=254)),
                ('contact_detail', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=255)),
                ('father_name', models.CharField(max_length=100)),
                ('father_qualification', models.CharField(max_length=100)),
                ('father_profession', models.CharField(max_length=100)),
                ('father_designation', models.CharField(max_length=100)),
                ('father_aadhar_card', models.CharField(max_length=20)),
                ('father_mobile_number', models.CharField(max_length=15)),
                ('father_mail_id', models.EmailField(max_length=254)),
                ('mother_name', models.CharField(max_length=100)),
                ('mother_qualification', models.CharField(max_length=100)),
                ('mother_profession', models.CharField(max_length=100)),
                ('mother_designation', models.CharField(max_length=100)),
                ('mother_aadhar_card', models.CharField(max_length=20)),
                ('mother_mobile_number', models.CharField(max_length=15)),
                ('mother_mail_id', models.EmailField(max_length=254)),
                ('class_name', models.CharField(max_length=10)),
                ('section', models.CharField(max_length=10)),
                ('doj', models.DateField()),
                ('docs', models.FileField(blank=True, upload_to='docs/')),
            ],
        ),
    ]
