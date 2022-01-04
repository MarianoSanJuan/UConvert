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
    let producto = new Producto (parseInt(idProducto),precio,proveedor,stock,nombre);
    arrayProductos.push(producto);
    console.log(arrayProductos);
}


//EJECUCIONES- ¿MAIN?

// Creación de variable para luego detectar los clicks en ella
let btnNewSale = document.getElementById("newSaleBtn");

btnNewSale.addEventListener("click",iniciarProceso);


function iniciarProceso(){

    let contadorCliente = 1;
    let contadorVenta = 1;
    let continuarCliente = true;
    let continuarVenta = true;

//Creación de cliente (objeto) e inclusión dentro del array de clientes
do {
    let nombreCliente = prompt("Ingrese el nombre del cliente al que desear facturar");
    let cliente = new Cliente(contadorCliente,nombreCliente);
    // INICIO STORAGE Transformación del objeto en JSON y luego almacenamiento en sessionStorage
    const clienteJSON = JSON.stringify(cliente);
    sessionStorage.setItem("Cliente:"+contadorCliente,clienteJSON);
    let clienteStorage = sessionStorage.getItem("Cliente"+contadorCliente)
    console.log(clienteStorage);
    // FIN STORAGE
    arrayClientes.push(cliente);
    contadorCliente = contadorCliente + 1;
    console.log(arrayClientes)

//Consulta de producto a cargar. El usuario debe ingrear el ID del producto

    let mensajeProductos = "";
    arrayProductos.map( producto => mensajeProductos += `ID: ${producto.idProducto}. Nombre: ${producto.nombre}.Precio $: ${producto.precio}.Proveedor: ${producto.proveedor}.Stock: ${producto.stock} \n`);

    do {
        let nroProductoElegido = parseInt(prompt(`Qué producto desear facturar?\n Ingresar ID. Estos son los creados previamente\n ${mensajeProductos}`));
        //HASTA ACÁ PARECE OK. La pregunta funciona.

        //IMPORTANTE: ACÁ LO QUE SE BUSCA ES, EN FUNCIÓN DE QUÉ ID ELIGIÓ, DETERMINAR EL NOMBRE DEL PRODUCTO ELEGIDO para luego cargarlo en el objeto VENTA
        let productoElegido = arrayProductos.find(productoElegido => productoElegido.idProducto == nroProductoElegido);
        console.log(productoElegido);
        // VERSIÓN NUEVA: 
        //         let productoElegido = arrayProductos.find(function (idProducto) {
        //         return idProducto===nroProductoElegido;
        //         });
        // alert(productoElegido);

        
        //Creación del objeto venta con los 3 parámetros. El que falla es el último.
        let venta = new Venta (contadorVenta,cliente,productoElegido)
        // INICIO STORAGE:Transformación del objeto en JSON y luego almacenamiento en sessionStorage
        const ventaJSON = JSON.stringify(venta);
        sessionStorage.setItem("Venta:"+contadorVenta,ventaJSON);
        let ventaStorage = sessionStorage.getItem("Venta:"+contadorVenta)
        console.log(ventaStorage);
        // FIN STORAGE:


        //ACÁ NO SÉ COMO APLICAR EL MÉTODO PRECIOIVA() SOBRE EL PRECIO DEL PRODUCTO SELECCIONADO CON EL ID.
        alert("El precio de la venta con impuestos es:" + producto.precioIva());
        //Creación del arrayVentas
        arrayVentas.push(venta);
        contadorVenta++;
        continuarVenta = confirm("El cliente desea cargar otra venta?");
    
    } while (continuarVenta)
    
    continuarCliente = confirm("Desea ingresar otro cliente?");
    
} while( continuarCliente )
}



// CREACIÓN DE REPORTE : SE DESPLIEGA AL CLIQUEAR EN REPORT: "NO SÉ SI FUNCIONA"
let btnReport = document.getElementById("ReportBtn");
btnReport.addEventListener("click",mostrarVentas);
function mostrarVentas(){

    for (i = 0; i < arrayVentas.length; i++)

    // let locationInHTML = document.getElementById("results")
    // let listItem = document.createElement("p")
    // listItem.innerHTML = arrayVentas[i];
    // locationInHTML.appendChild(listItem)
    document.getElementById("results").innerHTML += (i+1) + ": " + arrayVentas[i];  
}
  

// CREACIÓN DE RESET : FUNCIONA
let btnReset = document.getElementById("resetBtn");
btnReset.addEventListener("click",eliminarVentas);
function eliminarVentas(){
    let objetoEliminar = document.getElementById("results");
    objetoEliminar.remove();
}




























