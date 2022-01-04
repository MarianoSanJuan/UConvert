//CREACIÓN DE CLASES-OBJETOS

//Producto
class Producto {
    constructor (idProducto, precio,proveedor,stock,nombre, usuarioRegistrado){
        this.idProducto = idProducto;
        this.precio = precio;
        this.proveedor = proveedor;
        this.stock = stock;
        this.nombre = nombre;
        this.usuarioRegistrado = usuarioRegistrado;
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
    constructor (cliente, producto, precio, cantidad, facturacion, usuarioRegistrado){
        this.cliente = cliente;
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.facturacion = facturacion;
        this.usuarioRegistrado = usuarioRegistrado;
    }

}

//Usuario

class Usuario {
    constructor (usuario){
        this.usuario = usuario;
    } 
    obtenerUserFullName(){
        return this.usuario + " " +this.fullName ;
    }
}
//KEYS PARA LOCAL STORAGE
const claveListaUsuarios = "listaUsuarios";
const claveListaProductos = "listaProductos";
const claveUsuarioNuevo = "usuarioNuevo";
const claveUserForm = "userLogIn";
// const claveListaProductId = "productIdRandom"
const claveListaVentas = "listaVentas";



//CREACIÓN DE ARRAYS

let arrayProductos = [];
let arrayClientes = [];
let arrayVentas = [];
let arrayUsuario = [];