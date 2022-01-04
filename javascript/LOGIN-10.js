//CREACIÓN DE PRODUCTOS (OBJETO) E INCLUSIÓN DENTRO DEL ARRAY DE PRODUCTOS

//CHECK ÁRBOL DOM EJECUTADO
$(document).ready(()=>{
//Creación de form

let objetoUsuarioForm = JSON.parse(localStorage.getItem(claveUserForm))
let usuarioLogueado = objetoUsuarioForm
let mostrar = "si"
$("#newProductBtn").click(()=>{
    if (mostrar == "si"){
        appendFormProducts()
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
    //Levantamiento de los inputs y check de los formatos
    let idProductoIngresado = Math.floor(Math.random()*10000);
    let precio = parseInt(document.getElementById("inputPrice").value); 
    let proveedor = document.getElementById("inputSupplier").value;
    let stock = parseInt(document.getElementById("inputStock").value);
    let nombre = document.getElementById("inputName").value;
    let usuarioProducto = usuarioLogueado
    
    //Seteo la variable formOk en true
    let formOk = true
            if (!idProductoIngresado || !precio || !proveedor || !stock || !nombre || stock <= 0 || precio <= 0){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Campos incompletos.Precio y Stock deben ser mayores que cero',

                })
                return formOk = false
            }
            else {
                let itemProducto = localStorage.getItem(claveListaProductos);
                if (itemProducto){
                    arrayProductos = JSON.parse(localStorage.getItem(claveListaProductos));
                    for (i=0;i<arrayProductos.length;i++){
                        if (idProductoIngresado === arrayProductos[i].idProducto) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'ID Producto ya utilizado',
                            })
                            return formOk = false
                        }}
            
                    if (formOk == true){
                        let producto = new Producto (idProductoIngresado,precio,proveedor,stock,nombre, usuarioProducto);
                        guardarProductos(producto)
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'El producto fue almacenado con éxito. Ingrese tantos productos como necesite',
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
                            title: 'El producto fue almacenado con éxito. Ingrese tantos productos como necesite ',
                            showConfirmButton: false,
                            timer: 2500
                        })
                }
            arrayProductos = JSON.parse(localStorage.getItem(claveListaProductos))
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
}
//Creación de productos finales
let mostrarFormVentas = true
$("#newSaleBtn").click(()=>{
    let hayProductos = localStorage.getItem(claveListaProductos)
    if (hayProductos){  
    if(mostrarFormVentas == true){   
                let arrayProductos = JSON.parse(localStorage.getItem(claveListaProductos))
                if (arrayProductos.length != 0) { 
               appendSalePhrase()
                for (i=0;i<arrayProductos.length;i++) {
                    let objetoProducto = arrayProductos[i];
                        if (usuarioLogueado == objetoProducto.usuarioRegistrado){
                            $("#espacioProductosFinales").append(` <h2 class="fontFamily fontColorRed fontBold fontSizeP paddingTitles animate__animated animate__bounce">
                            ID Producto # : ${objetoProducto.idProducto} 
                            <br> Nombre # : ${objetoProducto.nombre} 
                            <br> Precio # : ${objetoProducto.precio} $
                            <br> Stock disponible # : ${objetoProducto.stock} units
                            <br> Usuario asignado # : ${objetoProducto.usuarioRegistrado} 
                                </h2>`)
                        }
                }
                appendSalePhrase2()
                appendSaleForm()
                document.getElementById("uploadSale").style.display = "block"
                }
                else {Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Primero debe almacenar productos en la base de datos',
                })}
                mostrarFormVentas = false
    }else {
        mostrarFormVentas = true
        appendEmptySaleForm()
    }}
    else {Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Primero debe almacenar productos en la base de datos',
    })
    }
});


// Carga de venta
$("#uploadSale").click( function cargaDeVenta() {
    

    //Levantamiento de los inputs y check de los formatos
    let idProductoVenta = parseInt(document.getElementById("inputIdProductoVenta").value);
    let quantity = parseInt(document.getElementById("InputQuantity").value);
    let clientName = document.getElementById("InputClientName").value;
    let saleUser = usuarioLogueado;
    let productoElegido = "";
    let precioProductoElegido = 0;
    let stockProductoElegido = 0;
    let userProductoElegido = "";

    arrayProductos = JSON.parse(localStorage.getItem(claveListaProductos))
    for (j=0;j<arrayProductos.length;j++){
        if(arrayProductos[j].idProducto == idProductoVenta) {
            // ProveedorProductoElegido = arrayProductos[j].proveedor; 
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
                title: 'Oops...Favor de revisar lo siguiente:',
                text: 'ID Producto no registrado // Campos incompletos // Stock < Cantidad a vender',

              })
            
            return formOk = false
        }

    //Si lo del ID está Ok, o sea formOk=true, entonces que instancie el objeto y lo pushee al array
    if (formOk = true){
        if (usuarioLogueado == userProductoElegido)
        {
        for (j=0;j<arrayProductos.length;j++){
                      if(arrayProductos[j].idProducto == idProductoVenta) {   
                          arrayProductos[j].stock = arrayProductos[j].stock - quantity;
                          precioProductoElegido = arrayProductos[j].precio
                          let arrayProductosString = JSON.stringify(arrayProductos)
                          localStorage.setItem(claveListaProductos,arrayProductosString)
                          break
                      }            
                  }
        let facturacion = quantity*precioProductoElegido
        let cliente = new Cliente (clientName);
        arrayClientes.push(cliente);        
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
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Venta almacenada con éxito. Genere todas las ventas que necesite',
            showConfirmButton: false,
            timer: 2500
          })
        document.getElementById("inputIdProductoVenta").value = "".
        document.getElementById("InputQuantity").value = ""
        document.getElementById("InputClientName").value = ""
    }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Campos incompletos o ID Producto no encontrado',
              })
            document.getElementById("inputIdProductoVenta").value = ""
            document.getElementById("InputQuantity").value = ""
            document.getElementById("InputClientName").value = ""
        }  
    }
    else {
        
    }     
})
// CREACIÓN DE REPORTE : SE DESPLIEGA AL CLIQUEAR EN REPORT:
let mostrarReporte = true
let hayVentasUser = true
$("#ReportBtn").click(()=>{
    arrayVentas = JSON.parse(localStorage.getItem(claveListaVentas));
    if(arrayVentas){
        if (mostrarReporte == true){

                for (i=0;i<arrayVentas.length;i++) {
                    let objetoVenta = arrayVentas[i];
                    if (arrayVentas[i].usuarioRegistrado == usuarioLogueado){
                        $("#results").append(`<h2 class="fontFamily fontColorRed fontBold fontSizeP paddingTitles animate__animated animate__bounce"> 
                        <br> Cliente # : ${objetoVenta.cliente.nombre} 
                        <br> Producto # : ${objetoVenta.producto}
                        <br> Precio # : ${objetoVenta.precio}
                        <br> Cantidad # : ${objetoVenta.cantidad}
                        <br> Facturación # : ${objetoVenta.facturacion}
                        <br> Usuario # : ${objetoVenta.usuarioRegistrado}        
                    </h2>`);
                    hayVentasUser = true
                }
            }
            if(hayVentasUser == true){}
                    else{Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'No hay ventas registradas para este usuario',
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
            text: 'No hay ventas registradas para este usuario',
          })
    }
    })
})
