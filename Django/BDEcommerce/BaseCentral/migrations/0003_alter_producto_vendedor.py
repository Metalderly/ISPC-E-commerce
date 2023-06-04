# Generated by Django 4.2.1 on 2023-06-04 21:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('BaseCentral', '0002_category_envio_pedido_producto_venta_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='vendedor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, to_field='username'),
        ),
    ]