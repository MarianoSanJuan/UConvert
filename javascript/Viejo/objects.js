//CREACIÓN DE CLASES-OBJETOS
//Productos pre cargados
class ProductosPreCargados {
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
    constructor (idCliente, nombre){
        this.idCliente = idCliente;
        this.nombre = nombre;
    }
}

//Venta
class Venta {
    constructor (idVenta, cliente, producto){
        this.idVenta= idVenta;
        this.cliente = cliente;
        this.producto = producto;
    }
}






//CREACIÓN DE ARRAYS

let arrayProductos = [];
let arrayProductosPreCargados = [];
let arrayClientes = [];
let arrayVentas = [];