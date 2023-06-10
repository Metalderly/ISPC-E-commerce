import datetime

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

OPCIONES_GENERO = (
    ('M', 'MASCULINO'),
    ('F', 'FEMENINO'),
    ('O', 'OTRO')
)


class Users(AbstractUser):
    pais = models.CharField(max_length=30, blank=True)
    provincia = models.CharField(max_length=30, blank=True)
    ciudad = models.CharField(max_length=30, blank=True)
    genero = models.CharField(
        max_length=20, blank=True, choices=OPCIONES_GENERO)

    def __str__(self):
        return self.username

# class Usuario (models.Model):
#    dni = models.IntegerField (blank=False)
#    nombre = models.CharField (max_length=30, blank=False)
#    apellido = models.CharField (max_length=30, blank=False)
#    Email = models.EmailField (max_length=50, blank=False)
#    contraseña = models.CharField(max_length=50, blank=False)
#    pais = models.CharField (max_length=30, blank=True)
#    provincia = models.CharField (max_length=30, blank=True)
#    ciudad = models.CharField (max_length=30, blank=True)
#    genero = models.CharField (max_length=20, blank=True)


class Mitienda (models.Model):
    web = models.URLField(default="https://match-music.netlify.app/")
    pais = models.CharField(max_length=30, default="UTC", null=False)
    provincia = models.CharField(max_length=50)
    ciudad = models.CharField(max_length=50)
    cp = models.IntegerField()
    nroCelular = models.IntegerField()
    email = models.EmailField(max_length=50)
    propietario = models.CharField(max_length=50)
    horaios = models.CharField(max_length=50)
    # usuario = models.ForeignKey(Users, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.propietario)


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Producto (models.Model):
    producto = models.CharField(max_length=100)
    image = models.TextField(max_length=250, default="")
    tipo = models.ForeignKey(Category, on_delete=models.CASCADE)
    caracteristicas = models.TextField(max_length=1000)
    precio = models.FloatField(max_length=10)
    vendedor = models.ForeignKey(Users, on_delete=models.CASCADE)
    # tiendaDe = models.ForeignKey(Mitienda, on_delete=models.CASCADE)

    def __unicode__(self):
        return self.producto

    def __str__(self):
        return self.producto


class TdaPto (models.Model):
    # id_t1 = models.ManyToManyField(Mitienda)
    id_p1 = models.ManyToManyField(Producto)


class Pedido (models.Model):
    fecha = models.DateField(default=datetime.datetime.now)
    aNombrede = models.CharField(max_length=50)
    nroPedido = models.IntegerField()
    tipoDeEnvio = models.CharField(max_length=50)
    producto = models.CharField(max_length=100)
    # mitienda = models.ForeignKey(Mitienda, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.nroPedido)


class Venta (models.Model):
    fecha = models.DateField(default=datetime.datetime.now)
    cantidadDeVentas = models.IntegerField(default=0)
    vendedor = models.CharField(max_length=50)

    def __str__(self):
        return "{}".format(self.cantidadDeVentas)


class Factura (models.Model):
    fecha = models.DateField(default=datetime.datetime.now)
    cuit = models.IntegerField()
    producto = models.CharField(max_length=100)
    cantidad = models.IntegerField(default=0)
    preciosXu = models.FloatField(max_length=10)
    preciosXm = models.FloatField(max_length=10)
    valorTotal = models.FloatField(max_length=12)
    id_v2 = models.ForeignKey(Venta, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.valorTotal)


class Envio (models.Model):
    fecha = models.DateField(default=datetime.datetime.now)
    pais = models.CharField(max_length=30, default="UTC", null=False)
    provincia = models.CharField(max_length=30)
    ciudad = models.CharField(max_length=30)
    cp = models.IntegerField()
    empresa = models.CharField(max_length=50)
    id_f2 = models.ForeignKey(Factura, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.empresa)


class FacEnv (models.Model):
    id_f1 = models.ForeignKey(Factura, on_delete=models.CASCADE)
    id_e1 = models.ForeignKey(Envio, on_delete=models.CASCADE)
