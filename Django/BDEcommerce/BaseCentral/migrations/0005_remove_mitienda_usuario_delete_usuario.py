# Generated by Django 4.2.1 on 2023-06-10 13:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BaseCentral', '0004_alter_producto_vendedor'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mitienda',
            name='usuario',
        ),
        migrations.DeleteModel(
            name='Usuario',
        ),
    ]
