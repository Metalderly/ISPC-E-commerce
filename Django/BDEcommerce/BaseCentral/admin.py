from django.contrib import admin
from BaseCentral.models import Users, Producto, Mitienda, Pedido, Venta, Factura, Envio, Category

admin.site.register(Users)
admin.site.register(Mitienda)
# admin.site.register(TdaPto)


class ProductoAdmin(admin.ModelAdmin):
    list_display = ('producto', 'tipo', 'caracteristicas',
                    'precio', 'vendedor')


admin.site.register(Producto, ProductoAdmin)
admin.site.register(Pedido)
admin.site.register(Venta)
admin.site.register(Factura)
admin.site.register(Envio)
admin.site.register(Category)
# admin.site.register(FacEnv)
