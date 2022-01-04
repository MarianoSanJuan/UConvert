//CREACIÓN DE PRODUCTOS (OBJETO) E INCLUSIÓN DENTRO DEL ARRAY DE PRODUCTOS

//CHECK ÁRBOL DOM EJECUTADO
$(document).ready(()=>{
// console.log ("Dom listo")

//Creación de form

$("#newProductBtn").click(()=>{
    $("#espacioProductsForm").append(`  
    
    <article class="row">
    
        <div class="col-sm-12  col-md-4 offset-md-2 col-lg-5 offset-lg-1 paddingTitles">    
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP"  id=headlineClient>Product ID</div>
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
                <input id="inputId" type="number" placeholder="Only numbers" value="">
            </div>
        </div>
        
        <div class="col-sm-12  col-md-4  col-lg-5  paddingTitles">    
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP" id=headlinePrice>Price</div>
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
            <input id="inputPrice" type="number" placeholder="Only numbers" value="">
            </div>
         </div>

    </article>    
    
    <article class="row">  

        <div class="col-sm-12  col-md-4 offset-md-2 col-lg-5 offset-lg-1 paddingTitles">    
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP" id=headlineSupplier>Supplier</div>
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
            <input id="inputSupplier" type="text" placeholder="Company name" value="">
            </div>
        </div>
        
        <div class="col-sm-12  col-md-4 col-lg-5  paddingTitles">    
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP"  id=headlineStock>Stock</div>
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
            <input id="inputStock" type="number" placeholder="Only numbers" value="">
            </div>
        </div>
    
    </article>    

    <article class="row">  
    
      <div class="col-sm-12  col-md-4 offset-md-4 col-lg-8 offset-lg-2  paddingTitles">    
        <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP"  id=headlineQuantity>Product name</div>
        <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
          <input id="inputName" type="text" placeholder="Your product" value="">
        </div>
      </div>

    </article>   
       
    `)
})


//CREACIÓN DE PRODUCTOS (OBJETO) E INCLUSIÓN DENTRO DEL ARRAY DE PRODUCTOS
//Creación de variable para detectar al btn submit
let btnNewProduct = document.getElementById("submitBtn");
//Detección de click, envío de información, generación de objeto y agregado en array de productos
btnNewProduct.addEventListener("click",cargaProducto);

function cargaProducto(){
    
    //Levantamiento de los inputs y check de los formatos
    let idProductoIngresado = parseInt(document.getElementById("inputId").value);
    console.log(typeof idProductoIngresado);
    let precio = parseInt(document.getElementById("inputPrice").value); 
    console.log(typeof precio);
    let proveedor = document.getElementById("inputSupplier").value;
    console.log(typeof proveedor);
    let stock = parseInt(document.getElementById("inputStock").value);
    console.log(typeof stock);
    let nombre = document.getElementById("inputName").value;
    console.log(typeof nombre);

    //Seteo la variable formOk en true
    let formOk = true
    //Recorro el array de productos pre cargados en el json buscando a ver si coincide algún ID con el ID del producto cargado por el cliente
    for (i=0;i<arrayProductosPreCargados.length;i++)
        //Si el ID elegido ya existe, no aprobar el submit, no generar objeto de producto y no pushearlo al arraydeProductos
        if (idProductoIngresado === arrayProductosPreCargados[i].idProducto || !idProductoIngresado || !precio || !proveedor || !stock || !nombre) {
            alert("Datos incompletos o ID ya asignado");
            return formOk = false
        }

    //Si lo del ID está Ok, o sea formOk=true, entonces que instancie el objeto y lo pushee al array
    if (formOk = true){
    let producto = new Producto (idProductoIngresado,precio,proveedor,stock,nombre);
    arrayProductos.push(producto);
    console.log(arrayProductos);
    const arrayProductosTotales = [arrayProductos, arrayProductosPreCargados]
    // let arrayProductosTotales = [].concat(arrayProductosPreCargados,arrayProductos);
    console.log(arrayProductosTotales)
    console.log(typeof arrayProductosTotales)
    //Mensaje post carga correcta
    $("#mensajeSubmit").append(`<h3>New product uploaded! You can add another product or click on new sale buttom to finish uploading your!</h3>`) 

    let delayInMilliseconds = 4000; //1 second
    setTimeout(function() {
        $("#mensajeSubmit").empty();
        }, delayInMilliseconds);
    }
    else {
        alert("Inicie de nuevo la carga")
    }   
}


//Detección de click y reseteo del form
btnNewProduct.addEventListener("click",cleanInput);
function cleanInput(){
    document.getElementById("inputId").value = ""
    document.getElementById("inputPrice").value = ""
    document.getElementById("inputSupplier").value = ""
    document.getElementById("inputStock").value = ""
    document.getElementById("inputName").value = ""
}

let btnNewSale = document.getElementById("newSaleBtn");
debugger;
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
    console.log(typeof(arrayProductosTotales))
    console.log(typeof(arrayProductosPreCargados))
    console.log(typeof(arrayProductos))
    arrayProductosTotales.map( producto => mensajeProductos += `ID: ${producto.idProducto}. Nombre: ${producto.nombre}.Precio $: ${producto.precio}.Proveedor: ${producto.proveedor}.Stock: ${producto.stock} \n`);

    do {
        let nroProductoElegido = parseInt(prompt(`Qué producto desear facturar?\n Ingresar ID. Estos son los creados previamente\n ${mensajeProductos}`));

        let productoElegido = "";
        let precioProductoElegido = 0;
        
        for (j=0;j<arrayProductosTotales.length;j++){
            
            if(arrayProductosTotales[j].idProducto == nroProductoElegido) {
                productoElegido = arrayProductosTotales[j].nombre;
                precioProductoElegido = arrayProductosTotales[j].precio;   
                break
            }
            
        }

        if(!productoElegido){
            alert("ID de producto no registrado. Inicie nuevamente la carga")
            break
        }
        
        j=0
        alert("Usted eligió el producto: " + productoElegido);
        alert("El precio de la venta sin impuestos es: $" + precioProductoElegido);
        let venta = new Venta (contadorVenta,cliente,productoElegido)
        // INICIO STORAGE:Transformación del objeto en JSON y luego almacenamiento en sessionStorage
        const ventaJSON = JSON.stringify(venta);
        sessionStorage.setItem("Venta:"+contadorVenta,ventaJSON);
        let ventaStorage = sessionStorage.getItem("Venta:"+contadorVenta)
        console.log(ventaStorage);
        // FIN STORAGE:
        
        alert("El precio de la venta con impuestos es:" + precioProductoElegido*1.21);
        //Creación del arrayVentas
        arrayVentas.push(venta);
        contadorVenta++;
        continuarVenta = confirm("El cliente desea cargar otra venta?");
    
    } while (continuarVenta)
    
    continuarCliente = confirm("Desea ingresar otro cliente?");
    
} while( continuarCliente )
}

})


// CREACIÓN DE REPORTE : SE DESPLIEGA AL CLIQUEAR EN REPORT:
let btnReport = document.getElementById("ReportBtn");
btnReport.addEventListener("click",mostrarVentas);

function mostrarVentas(){

    for (i=0;i<arrayVentas.length;i++) {

        let objetoVenta = arrayVentas[i];

            $("#results").append(`<h2 class="fontFamily fontColorRed fontBold fontSizeP paddingTitles animate__animated animate__bounce"> 
            Sale number # : ${objetoVenta.idVenta} 
            <br> Client name # : ${objetoVenta.cliente.nombre} 
            <br> Product name # : ${objetoVenta.producto}             
            </h2>`);
            console.log(objetoVenta);

        }
}


// CREACIÓN DE RESET : FUNCION

$(document).ready(() => {
    $("#resetBtn").on("click", ()=> {
        $("#results").delay(1000);
        $("#results").css("color","red");
        $("#results").delay(1000);
        $("#results").fadeOut(2000);
    })
})

