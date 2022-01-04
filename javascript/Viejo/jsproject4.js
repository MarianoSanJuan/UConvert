//CLASES-OBJETOS
//Producto
class Producto {
    constructor (idProducto, precio, proveedor, stock,nombre){
        this.idProducto = idProducto;
        this.precio = precio;
        this.proveedor = proveedor;
        this.stock = stock;
        this.nombre = nombre;
    }

    mostrarHTML(){
        return `<h1> ${this.nombre}</h1>
                <p>ID: ${this.idProducto} \n precio:${this.precio} \n Proveedor:${this.proveedor}, \n Stock:${this.stock}`;
    }
}

//Cliente
class Cliente {
    constructor (id, nombre){
        this.id = id;
        this.nombre = nombre;
    }
}

//Venta
class Venta {
    constructor (id, cliente, producto,precio){
        this.id= id;
        this.cliente = cliente;
        this.producto = producto;
        this.precio = precio;
    }
    calcularPrecioConImpuestos () {
        return this.precio * 1.21;
    }

    mostrarHTML(){
            return `<h1>${this.id}</h1><p>Se facturó a ${this.cliente.nombre} la venta de : ${this.producto.nombre} por ${this.producto.precio}</p>`;
        }
}

//ARRAYS

let arrayProductos = [];
let arrayClientes = [];
let arrayVentas = [];

//CREACIÓN DE PRODUCTOS (OBJETO) E INCLUSIÓN DENTRO DEL ARRAY DE PRODUCTOS
let btnNewProduct = document.getElementById("submitBtn");
btnNewProduct.addEventListener("click",cargaProducto);
function cargaProducto(){

    let idProducto = document.getElementById("inputId").value;
    let precio = document.getElementById("inputPrice").value; 
    let proveedor = document.getElementById("inputSupplier").value;
    let stock = document.getElementById("inputStock").value;
    let nombre = document.getElementById("inputName").value;
    // alert(idProducto);
    // alert(precio);
    // alert(proveedor);
    // alert(stock);
    // alert(nombre);
    let producto = new Producto (idProducto,precio,proveedor,stock,nombre);
    arrayProductos.push(producto);
    console.log(arrayProductos);
}





// let producto1 = new Producto    (1,10,"Proveedor A",50,"Producto A");
// let producto2 = new Producto    (2,20,"Proveedor B",10, "Producto B");
// let producto3 = new Producto    (3,30,"Proveedor C",150, "Producto C");
// arrayProductos.push(producto1);
// arrayProductos.push(producto2);
// arrayProductos.push(producto3);

//CREACIÓN DE CLIENTE (OBJETO) E INCLUSIÓN DENTRO DEL ARRAY DE CLIENTES

let contadorCliente = 1;
let contadorVenta = 1;
let continuarCliente = true;
let continuarVenta = true;

//EJECUCIONES


// Creación de variable para luego detectar los clicks en ella
let btnNewSale = document.getElementById("newSaleBtn");

btnNewSale.addEventListener("click",iniciarProceso);

function iniciarProceso(){

do {
    let nombreCliente = prompt("Ingrese el nombre del cliente al que desear facturar");
    let cliente = new Cliente(contadorCliente,nombreCliente);
    // BORRAR Transformación del objeto en JSON y luego almacenamiento en sessionStorage
    const clienteJSON = JSON.stringify(cliente);
    sessionStorage.setItem("Cliente:"+contadorCliente,clienteJSON);
    let clienteStorage = sessionStorage.getItem("Cliente"+contadorCliente)
    console.log(clienteStorage);
    // BORRAR
    arrayClientes.push(cliente);
    contadorCliente = contadorCliente + 1;
    console.log(arrayClientes)

    let mensajeProductos = "";
    arrayProductos.map( producto => mensajeProductos += `ID: ${producto.idProducto}. Nombre: ${producto.nombre}.Precio $: ${producto.precio}.Proveedor: ${producto.proveedor}.Stock: ${producto.stock} \n`);

    do {
        let nroProductoElegido = parseInt(prompt(`Qué producto desear facturar?\n Ingresar ID. Estos son los creados previamente\n ${mensajeProductos}`));
        let productoElegido = arrayProductos.find ( producto => producto.idProducto === nroProductoElegido);
        console.log(productoElegido)

        let venta = new Venta (contadorVenta,cliente,productoElegido, precioElegido)
        // Transformación del objeto en JSON y luego almacenamiento en sessionStorage
        const ventaJSON = JSON.stringify(venta);
        sessionStorage.setItem("Venta:"+contadorVenta,ventaJSON);


        console.log(venta.calcularPrecioConImpuestos())
        alert("El precio de la venta con impuestos es:" + venta.calcularPrecioConImpuestos());
        arrayVentas.push(venta);
        contadorVenta++;
        continuarVenta = confirm("El cliente desea cargar otra venta?");
    
    } while (continuarVenta)
    
    continuarCliente = confirm("Desea ingresar otro cliente?");
    
} while( continuarCliente )
}



// Creación de variable para luego detectar los clicks en ella
let btnReport = document.getElementById("ReportBtn");
btnReport.addEventListener("click",mostrarVentas);
function mostrarVentas(){
    arrayVentas.map( venta => document.getElementById("results").innerHTML += venta.mostrarHTML())
}
  
// Creación de variable para luego detectar los clicks en ella
let btnReset = document.getElementById("resetBtn");
btnReset.addEventListener("click",eliminarVentas);
function eliminarVentas(){
    let objetoEliminar = document.getElementById("results");
    objetoEliminar.remove();
}




























