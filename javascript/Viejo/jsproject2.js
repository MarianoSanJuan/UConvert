//CLASES

//FUNCIONES

//EJECUCIONES


// Creación de variable para luego detectar los clicks en ella
let btn = document.getElementById("submitBtn");

// Creación de variable precio y definición de precio según producto elegido
let precio = 0
function definicionPrecio (producto) {
    while (producto==1 || producto==2)
    switch (precio) {
                    case 1:
                        precio = 10;
                        break;
                    case 2:
                        precio = 20;
                        break;
                }
}

// Creación de función constructora - class - para los objetos VENTA
class Venta {
    constructor (cliente, producto, cantidad, precio){
        this.id = id;
        this.cliente = cliente;
        this.precio = precio;
        this.producto = producto;
        this.cantidad = cantidad;
        this.subTotal = 0;
        this.iva = 0;
        this.total = 0;
    }
    calcularSubTotal() {this.subTotal = this.precio * this.cantidad;}
    calcularIva(){this.iva = this.subTotal*0,21;}
    calculcarTotal(){this.total= this.subTotal+this.iva}

}

// Definición de función crear objeto                
function createObjeto(cliente, producto, cantidad, precio) {
    Venta.cliente = cliente,
    Venta.producto = producto,
    Venta.cantidad = cantidad,
    Venta.precio = precio
}

// Recepción de datos en inputs
let cliente = document.getElementById("inputClient").value;
let producto = document.getElementById("inputProduct").value;
let cantidad = document.getElementById("inputQuantity").value;

// Disparador ante click en btn+creación del objeto
btn.addEventListener("click",function(){
    createObjeto(cliente, producto, cantidad, precio)
});



console.log(cliente)
console.log(producto)
console.log(cantidad)


// Comunicación via alert
alert(Venta.cliente&"+"&Venta.producto&"+"&Venta.cantidad&"+"&Venta.precio);










