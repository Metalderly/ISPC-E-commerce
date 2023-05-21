import datetime

from django.db import models
from django.utils import timezone

class Usuario (models.Model):
    dni = models.IntegerField ()
    nombre = models.CharField (max_length=30)
    apellido = models.CharField (max_length=30)
    Email = models.EmailField (max_length=50)
    pais = models.CharField (max_length=30, default="UTC", null=False)
    provincia = models.CharField (max_length=30)
    ciudad = models.CharField (max_length=30)
    genero = models.CharField (max_length=20)

    def __str__(self):
        return "{} {}".format(self.apellido, self.nombre)    
                            
class Mitienda (models.Model):
    web = models.URLField (default="https://match-music.netlify.app/")
    pais = models.CharField (max_length=30, default="UTC", null=False)
    provincia = models.CharField (max_length=50)
    ciudad = models.CharField (max_length=50)
    cp = models.IntegerField()
    nroCelular = models.IntegerField()
    email = models.EmailField(max_length=50)
    propietario = models.CharField(max_length=50)
    horaios = models.CharField(max_length=50)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.propietario)
    


class Producto (models.Model):
    producto = models.CharField(max_length=100)
    tipo = models.CharField(max_length=100)
    caracteristicas = models.CharField(max_length=100)
    codigo = models.IntegerField()
    precioXu = models.FloatField(max_length=10)
    precioXm = models.FloatField(max_length=10)

    def __str__(self):
        return "{}".format(self.producto)

class TdaPto (models.Model):
    id_t1 = models.ManyToManyField(Mitienda)
    id_p1 = models.ManyToManyField(Producto)

class Pedido (models.Model):
    fecha = models.DateField(default=datetime.date)
    aNombrede = models.CharField(max_length=50)
    nroPedido = models.IntegerField()
    tipoDeEnvio = models.CharField(max_length=50)
    producto = models.CharField(max_length=100)
    id_t2 = models.ForeignKey(Mitienda, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format (self.nroPedido)

class Venta (models.Model):
    fecha = models.DateField(default=datetime.datetime)
    cantidadDeVentas = models.IntegerField(default=0)
    vendedor = models.CharField(max_length=50)
    

    def __str__(self):
        return "{}".format (self.cantidadDeVentas)
    
class Factura (models.Model):
    fecha = models.DateField(default=datetime.timedelta)
    cuit = models.IntegerField()
    producto = models.CharField(max_length=100)
    cantidad = models.CharField(max_length=100)
    preciosXu = models.FloatField(max_length=10)
    preciosXm = models.FloatField(max_length=10)
    valorTotal =models.FloatField(max_length=12)
    id_v2 = models.ForeignKey(Venta, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format (self.valorTotal)
    

class Envio (models.Model):
    fecha = models.DateField(default=datetime.time) 
    pais = models.CharField (max_length=30, default="UTC", null=False)
    provincia = models.CharField (max_length=30)
    ciudad = models.CharField (max_length=30)
    cp = models.IntegerField()
    empresa = models.CharField(max_length=50)
    id_f2 = models.ForeignKey(Factura, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format (self.empresa)

class FacEnv (models.Model):
    id_f1 = models.ForeignKey(Factura, on_delete=models.CASCADE)
    id_e1 = models.ForeignKey(Envio, on_delete=models.CASCADE)