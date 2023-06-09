# Generated by Django 4.2.1 on 2023-06-10 15:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('BaseCentral', '0008_remove_mitienda_usuarioo'),
    ]

    operations = [
        migrations.AddField(
            model_name='mitienda',
            name='usuario',
            field=models.ForeignKey(
                default=0, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='producto',
            name='tiendaDe',
            field=models.ForeignKey(
                default=0, on_delete=django.db.models.deletion.CASCADE, to='BaseCentral.mitienda'),
            preserve_default=False,
        ),
    ]
