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
    constructor (cliente, producto, precio, cantidad, facturacion){
        this.cliente = cliente;
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.facturacion = facturacion;
    }
}

//Usuario

class Usuario {
    constructor (usuario, fullName){
        this.usuario = usuario;
        this.fullName = fullName;
    } 
    obtenerUserFullName(){
        return this.usuario + " " +this.fullName ;
    }
}
//KEYS PARA LOCAL STORAGE
const claveListaUsuarios = "listaUsuarios";
const claveListaProductos = "listaProductos";



//CREACIÓN DE ARRAYS

let arrayProductos = [];
let arrayClientes = [];
let arrayVentas = [];
let arrayUsuario = [];