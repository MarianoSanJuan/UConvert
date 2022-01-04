//CREACIÓN DE PRODUCTOS (OBJETO) E INCLUSIÓN DENTRO DEL ARRAY DE PRODUCTOS

//CHECK ÁRBOL DOM EJECUTADO
$(document).ready(()=>{
//Creación de form
let mostrar = 1
$("#newProductBtn").click(()=>{
    console.log(mostrar)
    if (mostrar = 1){
        console.log("entro al if")

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
        mostrar = 0
        console.log(mostrar)
    }
    
    else {
        console.log("entro al else")
        $("#espacioProductsForm").remove()
        mostrar = 1
}
    })

//CREACIÓN DE PRODUCTOS (OBJETO) E INCLUSIÓN DENTRO DEL ARRAY DE PRODUCTOS
//Creación de variable para detectar al btn submit
let btnNewProduct = document.getElementById("submitBtn");
//Detección de click, envío de información, generación de objeto y agregado en array de productos
btnNewProduct.addEventListener("click",cargaProducto);
function cargaProducto(){
    //Levantamiento de los inputs y check de los formatos
    let idProductoIngresado = parseInt(document.getElementById("inputId").value);
    let precio = parseInt(document.getElementById("inputPrice").value); 
    let proveedor = document.getElementById("inputSupplier").value;
    let stock = parseInt(document.getElementById("inputStock").value);
    let nombre = document.getElementById("inputName").value;

    //Seteo la variable formOk en true
    let formOk = true
    //Recorro el array de productos pre cargados en el json buscando a ver si coincide algún ID con el ID del producto cargado por el cliente
    for (i=0;i<arrayProductos.length;i++)
        //Si el ID elegido ya existe, no aprobar el submit, no generar objeto de producto y no pushearlo al arraydeProductos
        if (idProductoIngresado === arrayProductos[i].idProducto || !idProductoIngresado || !precio || !proveedor || !stock || !nombre) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'ID product introduced belongs to another product or there´s missing information',

              })
            return formOk = false
        }

    //Si lo del ID está Ok, o sea formOk=true, entonces que instancie el objeto y lo pushee al array
    if (formOk = true){
    let producto = new Producto (idProductoIngresado,precio,proveedor,stock,nombre);
    arrayProductos.push(producto);
    //Mensaje post carga correcta
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your product has been uploaded to our data base. Please introduce as many products as you need ',
        showConfirmButton: false,
        timer: 2500
      })

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

//Creación de productos finales
$("#newSaleBtn").click(()=>{
    console.log(arrayProductos.length)
    if (arrayProductos.length != 0) { 

    $("#espacioSaleForm").prepend(`  
        
    <h3 class="fontFamily fontColorBlue fontSizeP  fontBold paddingTitles">Products on your data base</h3>
    <p class="fontFamily fontColorRed fontSizeP  paddingTitles">You can add as many as you like clicking on "New products"</p>
    <article class="row">
        <div class="col-sm-12  col-md-12 col-lg-12  paddingTitles">    
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter" id="espacioProductosFinales">
            </div>
         </div>
    </article>`)
    
    for (i=0;i<arrayProductos.length;i++) {

        let objetoProducto = arrayProductos[i];

            $("#espacioProductosFinales").append(`<h2 class="fontFamily fontColorRed fontBold fontSizeP paddingTitles animate__animated animate__bounce"> 
            Product ID # : ${objetoProducto.idProducto} 
            <br> Name # : ${objetoProducto.nombre} 
            <br> Price # : ${objetoProducto.precio} $
            <br> Stock available # : ${objetoProducto.stock} units       
            </h2>`);
    }

    $("#espacioSaleForm").append(`
    <h2 class="fontFamily fontColorBlue fontBold fontSizeP paddingTitles animate__animated animate__bounce"> 
            If your product is not on the list, you can add more on the following link   </h2> 
            
    <button id="btnNewProduct"><a href="#newProductBtn"> Add more products</a> </button>`);

    $("#espacioSaleForm").append(`
    
    <article class="row">
    <h2 class="fontFamily fontColorBlue fontBold fontSizeP paddingTitles animate__animated animate__bounce"> 
    Complete the following form to register your sale</h2> 
        <div class="col-sm-12  col-md-4 offset-md-2 col-lg-5 offset-lg-1 paddingTitles">    
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP"  id=headlineformProductId>Which product was sold? Introduct product ID</div>
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
                <input id="inputIdProductoVenta" type="number" placeholder="Only numbers" value="">
            </div>
        </div>
        <div class="col-sm-12  col-md-4  col-lg-5  paddingTitles">    
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP" id=headlineformQuantity>Quantity sold?</div>
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
            <input id="InputQuantity" type="number" placeholder="Only numbers" value="">
            </div>
         </div>
    </article>    
    <article class="row">  
        <div class="col-sm-12  col-md-4 offset-md-2 col-lg-5 offset-lg-1 paddingTitles">    
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP" id=headlineformClient>To whom?</div>
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
            <input id="InputClientName" type="text" placeholder="Company name" value="">
            </div>
        </div>
        <div class="col-sm-12  col-md-4 col-lg-5  paddingTitles">    
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP"  id=headlineformDiscount>Discount?</div>
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
            <input id="InputDiscount" type="number" placeholder="Only numbers" value="">
            </div>
        </div>
    </article>
    `);
    }
    else {Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'First add products to data base',

      })}
});

// Carga de venta
$("#uploadSale").click( function cargaDeVenta() {

    //Levantamiento de los inputs y check de los formatos
    let idProductoVenta = parseInt(document.getElementById("inputIdProductoVenta").value);
    let quantity = parseInt(document.getElementById("InputQuantity").value);
    let clientName = document.getElementById("InputClientName").value;
    let discount = parseInt(document.getElementById("InputDiscount").value);

    let productoElegido = "";
    let precioProductoElegido = 0;
    let stockProductoElegido = 0;

    for (j=0;j<arrayProductos.length;j++){
        if(arrayProductos[j].idProducto == idProductoVenta) {
            // precioProductoElegido = arrayProductos[j].precio; 
            // console.log(precioProductoElegido)
            ProveedorProductoElegido = arrayProductos[j].proveedor; 
            stockProductoElegido = arrayProductos[j].stock;
            productoElegido = arrayProductos[j].nombre;
            break
        }            
    }

    //Seteo la variable formOk en true
    let formOk = true
    //Recorro el array de productos pre cargados en el json buscando a ver si coincide algún ID con el ID del producto cargado por el cliente
    if (quantity <= 0 || discount <= 0 || !idProductoVenta || !quantity || !clientName || !discount || stockProductoElegido<quantity ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...Please check the following issues',
                text: 'ID product not found // Missing fields // stock is lower than quantity',

              })
            
            return formOk = false
        }

    //Si lo del ID está Ok, o sea formOk=true, entonces que instancie el objeto y lo pushee al array
    if (formOk = true){


    if(productoElegido)
        {
        
        for (j=0;j<arrayProductos.length;j++){
                      if(arrayProductos[j].idProducto == idProductoVenta) {   
                          arrayProductos[j].stock = arrayProductos[j].stock - quantity;
                          precioProductoElegido = arrayProductos[j].precio
                          console.log(arrayProductos)
                          break
                      }            
                  }
        let facturacion = quantity*precioProductoElegido
        let cliente = new Cliente (clientName);
        arrayClientes.push(cliente);        
        console.log(precioProductoElegido)
        let venta = new Venta (cliente,productoElegido, precioProductoElegido, quantity, facturacion)
        arrayVentas.push(venta);
        console.log(arrayVentas)
        console.log(arrayClientes)
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sale has been saved. Please introduce as many sales as you need ',
            showConfirmButton: false,
            timer: 2500
          })

        document.getElementById("inputIdProductoVenta").value = ""
        document.getElementById("InputQuantity").value = ""
        document.getElementById("InputClientName").value = ""
        document.getElementById("InputDiscount").value = "" }

        else{

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'ID product not found or there´s missing information',

              })
            document.getElementById("inputIdProductoVenta").value = ""
            document.getElementById("InputQuantity").value = ""
            document.getElementById("InputClientName").value = ""
            document.getElementById("InputDiscount").value = "" 
        }  
    }
    else {
        alert("Inicie de nuevo la carga")
    }   
    
})

// CREACIÓN DE REPORTE : SE DESPLIEGA AL CLIQUEAR EN REPORT:
let btnReport = document.getElementById("ReportBtn");
btnReport.addEventListener("click",mostrarVentas);

function mostrarVentas(){

    for (i=0;i<arrayVentas.length;i++) {

        let objetoVenta = arrayVentas[i];

            $("#results").append(`<h2 class="fontFamily fontColorRed fontBold fontSizeP paddingTitles animate__animated animate__bounce"> 
            <br> Client name # : ${objetoVenta.cliente.nombre} 
            <br> Product name # : ${objetoVenta.producto}
            <br> Price # : ${objetoVenta.precio}
            <br> Quantity # : ${objetoVenta.cantidad}
            <br> Revenue # : ${objetoVenta.facturacion}        

            </h2>`);
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
})
