//CREACIÓN DE PRODUCTOS (OBJETO) E INCLUSIÓN DENTRO DEL ARRAY DE PRODUCTOS

//CHECK ÁRBOL DOM EJECUTADO
$(document).ready(()=>{
//Creación de form

let objetoUsuarioLogueado = JSON.parse(localStorage.getItem(claveUsuarioNuevo))
let usuarioLogueado = objetoUsuarioLogueado.usuario
console.log(typeof usuarioLogueado)
console.log(usuarioLogueado)

let mostrar = "si"
$("#newProductBtn").click(()=>{
    if (mostrar == "si"){
        $("#espacioProductsForm").append(`  
        <article class="row">
            
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
        <div class="col-sm-12  col-md-4 offset-md-2 col-lg-5 offset-lg-1 paddingTitles">    
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP"  id=headlineQuantity>Product name</div>
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
            <input id="inputName" type="text" placeholder="Your product" value="">
            </div>
        </div>
        </article>   
        
        `)
        mostrar = "no"
        document.getElementById("submitBtn").style.display = "block"
        
    }
    
    else {
        $("#espacioProductsForm").empty().append("")
        mostrar = "si"
}
    })

//CREACIÓN DE PRODUCTOS (OBJETO) E INCLUSIÓN DENTRO DEL ARRAY DE PRODUCTOS
//Creación de variable para detectar al btn submit
let btnNewProduct = document.getElementById("submitBtn");

//Detección de click, envío de información, generación de objeto y agregado en array de productos
btnNewProduct.addEventListener("click",cargaProducto);




function cargaProducto(){
    console.log("entro")
    //Levantamiento de los inputs y check de los formatos
    // let idProductoIngresado = parseInt(document.getElementById("inputId").value);  
        
        let idProductoIngresado = Math.floor(Math.random()*10000)
        // let itemRandomId = localStorage.getItem(claveListaProductId)
        // if (itemRandomId){
        //     let arrayNroRandom = []
        //     arrayNroRandom = JSON.parse(localStorage.getItem(claveListaProductos));
        //     let idRandom = Math.floor(Math.random()*10)
        //     console.log(idRandom)
    
        //     for (i=0;arrayNroRandom.length;i++)
        //         if(idRandom == arrayNroRandom[0]){
        //         alert("Please retry")
        //         return
        //         }
            
        //     arrayNroRandom.push(idRandom)
        //     console.log(arrayNroRandom)
    
        //     let arrayNroRandomString = JSON.stringify(arrayNroRandom)
        //     localStorage.setItem(claveListaProductId, arrayNroRandomString)
        //     console.log(idRandom)

        //     idProductoIngresado = idRandom
            
            
    
        // }
        // else {
        //     let arrayNroRandom = []
        //     console.log(arrayNroRandom)
    
        //     let idRandom = Math.floor(Math.random()*100000)
        //     console.log(idRandom)
    
        //     arrayNroRandom.push(idRandom)
        //     console.log(arrayNroRandom)
    
    
        //     let arrayNroRandomString = JSON.stringify(arrayNroRandom)
        //     localStorage.setItem(claveListaProductId, arrayNroRandomString)
        //     console.log(idRandom)
        //     idProductoIngresado = idRandom
    
            
            
        // }
    
    
    let precio = parseInt(document.getElementById("inputPrice").value); 
    let proveedor = document.getElementById("inputSupplier").value;
    let stock = parseInt(document.getElementById("inputStock").value);
    let nombre = document.getElementById("inputName").value;
    let usuarioProducto = usuarioLogueado
    console.log(typeof usuarioProducto)
    
    console.log(usuarioProducto)
    //Seteo la variable formOk en true
    let formOk = true
            if (!idProductoIngresado || !precio || !proveedor || !stock || !nombre || stock <= 0 || precio <= 0){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'There is missing information. Price & Stock cannot be lower o equal to zero',

                })
                return formOk = false
            }
            else {
                let itemProducto = localStorage.getItem(claveListaProductos);
                if (itemProducto){
                    arrayProductos = JSON.parse(localStorage.getItem(claveListaProductos));
                    console.log(arrayProductos)
                    for (i=0;i<arrayProductos.length;i++){
                        if (idProductoIngresado === arrayProductos[i].idProducto) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'ID product already uploaded',
                            })
                            return formOk = false
                        }}
            
                    if (formOk == true){
                        let producto = new Producto (idProductoIngresado,precio,proveedor,stock,nombre, usuarioProducto);
                        console.log(producto)
                        guardarProductos(producto)
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your product has been uploaded to our data base. Please introduce as many products as you need ',
                            showConfirmButton: false,
                            timer: 2500
                        })
                    }
                }
                else {
                    let producto = new Producto (idProductoIngresado,precio,proveedor,stock,nombre, usuarioProducto);
                        guardarProductos(producto)
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your product has been uploaded to our data base. Please introduce as many products as you need ',
                            showConfirmButton: false,
                            timer: 2500
                        })
                }
            arrayProductos = JSON.parse(localStorage.getItem(claveListaProductos))
            console.log(arrayProductos)   
    }


    //Detección de click y reseteo del form
    // btnNewProduct.addEventListener("click",cleanInput);
    // function cleanInput(){
    //     document.getElementById("inputId").value = ""
    //     document.getElementById("inputPrice").value = ""
    //     document.getElementById("inputSupplier").value = ""
    //     document.getElementById("inputStock").value = ""
    //     document.getElementById("inputName").value = ""
    // }
}
console.log(arrayProductos)
//Creación de productos finales
let mostrarFormVentas = true
$("#newSaleBtn").click(()=>{
let hayProductos = localStorage.getItem(claveListaProductos)
if (hayProductos){
    if(mostrarFormVentas == true){   
            let arrayProductos = JSON.parse(localStorage.getItem(claveListaProductos))
            console.log(arrayProductos)

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
            console.log(arrayProductos)

            for (i=0;i<arrayProductos.length;i++) {


                let objetoProducto = arrayProductos[i];
                    if (usuarioLogueado == objetoProducto.usuarioRegistrado){
                        $("#espacioProductosFinales").append(` <h2 class="fontFamily fontColorRed fontBold fontSizeP paddingTitles animate__animated animate__bounce">
                        Product ID # : ${objetoProducto.idProducto} 
                        <br> Name # : ${objetoProducto.nombre} 
                        <br> Price # : ${objetoProducto.precio} $
                        <br> Stock available # : ${objetoProducto.stock} units
                        <br> User asigned # : ${objetoProducto.usuarioRegistrado} 
                            </h2>`)
                    }
            }

            $("#espacioSaleForm").append(`
            <h2 class="fontFamily fontColorBlue fontBold fontSizeP paddingTitles animate__animated animate__bounce"> 
                    If your product is not on the list, you can add more on the following link   </h2> 
                    
            <button id="btnNewProduct" class="btn colorTextButton textDecorationButton borderButtonColor botonesBgColor fontSizeP fontFamily fontBold"><a href="#newProductBtn"> Add more products</a> </button>`);

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
            </article>
            `);
            document.getElementById("uploadSale").style.display = "block"

            }

            else {Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'First add products to data base',

            })}
            mostrarFormVentas = false
} else {
    mostrarFormVentas = true
    $("#espacioSaleForm").empty().append("")
}

}
else {Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'First add products to data base',

})}


});


















// Carga de venta
console.log(arrayProductos)

$("#uploadSale").click( function cargaDeVenta() {  
    debugger

    //Levantamiento de los inputs y check de los formatos
    let idProductoVenta = parseInt(document.getElementById("inputIdProductoVenta").value);
    let quantity = parseInt(document.getElementById("InputQuantity").value);
    let clientName = document.getElementById("InputClientName").value;
    let saleUser = usuarioLogueado;
    let productoElegido = "";
    let precioProductoElegido = 0;
    let stockProductoElegido = 0;
    let userProductoElegido = "";

    let arrayProductos = JSON.parse(localStorage.getItem(claveListaProductos))
    console.log(arrayProductos.length)
    for (j=0;j<arrayProductos.length;j++){
        if(arrayProductos[j].idProducto == idProductoVenta) {
            // precioProductoElegido = arrayProductos[j].precio; 
            // console.log(precioProductoElegido)
            ProveedorProductoElegido = arrayProductos[j].proveedor; 
            stockProductoElegido = arrayProductos[j].stock;
            productoElegido = arrayProductos[j].nombre;
            userProductoElegido = arrayProductos[j].usuarioRegistrado;

            break
        }            
    }

    //Seteo la variable formOk en true
    let formOk = true
    //Recorro el array de productos pre cargados en el json buscando a ver si coincide algún ID con el ID del producto cargado por el cliente
    if (quantity <= 0 || !idProductoVenta || !quantity || !clientName || stockProductoElegido<quantity ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...Please check the following issues',
                text: 'ID product not found // Missing fields // stock is lower than quantity',

              })
            
            return formOk = false
        }

    //Si lo del ID está Ok, o sea formOk=true, entonces que instancie el objeto y lo pushee al array
    if (formOk = true){


    if(usuarioLogueado == userProductoElegido)
        {
        for (j=0;j<arrayProductos.length;j++){
                      if(arrayProductos[j].idProducto == idProductoVenta) {   
                          arrayProductos[j].stock = arrayProductos[j].stock - quantity;
                          precioProductoElegido = arrayProductos[j].precio
                          console.log(arrayProductos)
                          let arrayProductosString = JSON.stringify(arrayProductos)
                          localStorage.setItem(claveListaProductos,arrayProductosString)
                          break
                      }            
                  }
        let facturacion = quantity*precioProductoElegido
        let cliente = new Cliente (clientName);
        arrayClientes.push(cliente);        
        console.log(precioProductoElegido)
        let venta = new Venta (cliente,productoElegido, precioProductoElegido, quantity, facturacion, saleUser)
       
        let arrayVentas = JSON.parse(localStorage.getItem(claveListaVentas))
        if (arrayVentas){
            
            arrayVentas.push(venta)
            arrayVentasString = JSON.stringify(arrayVentas)
            localStorage.setItem(claveListaVentas,arrayVentasString)
        }
        else{
            let arrayVentas = [];
            arrayVentas.push(venta)
            arrayVentasString = JSON.stringify(arrayVentas)
            localStorage.setItem(claveListaVentas,arrayVentasString)
        }
        console.log(arrayVentas)
        console.log(arrayClientes)
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sale has been saved. Please introduce as many sales as you need ',
            showConfirmButton: false,
            timer: 2500
          })

        // document.getElementById("inputIdProductoVenta").value = ""
        // document.getElementById("InputQuantity").value = ""
        // document.getElementById("InputClientName").value = ""
    }

        else{

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'ID product not found or there´s missing information',

              })
            // document.getElementById("inputIdProductoVenta").value = ""
            // document.getElementById("InputQuantity").value = ""
            // document.getElementById("InputClientName").value = ""
        }  
    }
    else {
        alert("Inicie de nuevo la carga")
    }   
    
})

// CREACIÓN DE REPORTE : SE DESPLIEGA AL CLIQUEAR EN REPORT:

// let btnReport = document.getElementById("ReportBtn");
let mostrarReporte = true
let hayVentasUser = true
$("#ReportBtn").click(()=>{
arrayVentas = JSON.parse(localStorage.getItem(claveListaVentas));
if (arrayVentas){
        if (mostrarReporte == true){
                    for (i=0;i<arrayVentas.length;i++) {
                        let objetoVenta = arrayVentas[i];
                            if (arrayVentas[i].usuarioRegistrado == usuarioLogueado){

                            $("#results").append(`<h2 class="fontFamily fontColorRed fontBold fontSizeP paddingTitles animate__animated animate__bounce"> 
                            <br> Client name # : ${objetoVenta.cliente.nombre} 
                            <br> Product name # : ${objetoVenta.producto}
                            <br> Price # : ${objetoVenta.precio}
                            <br> Quantity # : ${objetoVenta.cantidad}
                            <br> Revenue # : ${objetoVenta.facturacion}
                            <br> User # : ${objetoVenta.usuarioRegistrado}        
                            </h2>`);
                            hayVentasUser = true
                        }
                    }
                    if(hayVentasUser == true){}
                    else{Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'No sales were uploaded for this user ',
                        showConfirmButton: false,
                        timer: 2500
                      })}
                        mostrarReporte = false
        }    
        else {
            $("#results").empty().append("")
            mostrarReporte = true
        } 

}  
else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'ID product not found or there is missing information',
      })
}
})
})
