//CREACIÓN DE CLASES-OBJETOS

//Producto
class Producto {
    constructor (idProducto, precio,proveedor,stock,nombre){
        this.idProducto = idProducto;
        this.precio = precio;
        this.proveedor = proveedor;
        this.stock = stock;
        this.nombre = nombre;
    }

    precioIva(){
        return this.precio * 1.21;
    }
}

//Cliente
class Cliente {
    constructor (nombre){
        this.nombre = nombre;
    }
}

//Venta
class Venta {
    constructor (cliente, producto){
        this.cliente = cliente;
        this.producto = producto;
    }
}

//CREACIÓN DE ARRAYS

let arrayProductos = [];
let arrayClientes = [];
let arrayVentas = [];