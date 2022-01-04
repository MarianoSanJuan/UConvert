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
    let producto = new Producto (idProducto,precio,proveedor,stock,nombre);
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
    let nombreCliente = prompt("Ingrese el nombre del cliente al que le desea facturar");
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

        let productoElegido = "";
        let precioProductoElegido = 0;

        alert("Número producto elegido" + nroProductoElegido);
        alert("Primer idProductos" +arrayProductos[0].idProducto);
        alert("Segundo idProductos" +arrayProductos[1].idProducto);

        alert(typeof nroProductoElegido);
        alert(typeof arrayProductos[1].idProducto);
        alert("largo del array" +arrayProductos.length);
        
        for (j=0;j<arrayProductos.length;j++){
            alert("valor j: "+ j)
            alert("dentro del for el array: "+ arrayProductos[j].idProducto )
            alert("dentro del for el NROproductoElegido: "+ nroProductoElegido )

            
            if(arrayProductos[j].idProducto == nroProductoElegido) {
                alert("entro al if")
                productoElegido = arrayProductos[j].nombre;
                precioProductoElegido = arrayProductos[j].precio;
                
                break
            }
            
        }
        j=0
        alert("El precio de la venta sin impuestos es: $" + precioProductoElegido);
        alert("Usted eligió el producto: " + productoElegido);

        //Creación del objeto venta con los 3 parámetros. El que falla es el último.
        let venta = new Venta (contadorVenta,cliente,productoElegido)
        console.log(arrayVentas)
        // INICIO STORAGE:Transformación del objeto en JSON y luego almacenamiento en sessionStorage
        const ventaJSON = JSON.stringify(venta);
        sessionStorage.setItem("Venta:"+contadorVenta,ventaJSON);
        let ventaStorage = sessionStorage.getItem("Venta:"+contadorVenta)
        console.log(ventaStorage);
        // FIN STORAGE:


        //ACÁ NO SÉ COMO APLICAR EL MÉTODO PRECIOIVA() SOBRE EL PRECIO DEL PRODUCTO SELECCIONADO CON EL ID.
        alert("El precio de la venta con impuestos es:" + precioProductoElegido*1.21);
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

for (k=0;k<arrayVentas.length;k++);
        {
    let locationInHTML = document.getElementById("results")
    let listItem = document.createElement("p")
    listItem.innerHTML = arrayVentas[i];
    locationInHTML.appendChild(listItem)
}

// for (k = 0; k < arrayVentas.length; k++)
// document.getElementById("results").innerHTML += (k+1) + ": " + arrayVentas.cliente[k];  

  

// CREACIÓN DE RESET : FUNCIONA
let btnReset = document.getElementById("resetBtn");
btnReset.addEventListener("click",eliminarVentas);
function eliminarVentas()
{
    let objetoEliminar = document.getElementById("results");
    objetoEliminar.remove();
}