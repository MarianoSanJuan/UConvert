



$(document).ready(()=>{

    // Guardo en una constante la URL del json de productos
    const jsonProductsUrl = "../json/products.json"


    // Selecciono el btn de show products y escucho los clicks
    $("#showProductsBtn").click(() => {

        if (existenciaDeProductos === false){
            Swal.fire({
                icon: 'error',
                title: 'Ooops...',
                text: 'You have just registered. No products on data base',
                })
        }
        else {
        $.getJSON(jsonProductsUrl, function (respuesta, estado) {

            if(estado === "success"){
                // alert("estado OK, entra al if");
                // Creo una variable con la respuesta del JSON
                let productosPreCargados = respuesta;
   
                // Recorro esa variable, que es una array de objetos del json, para mostrar en el html ante el click
                for (const productoPreCargado of productosPreCargados){
                    $("#espacioProductsCargados").append(`
                                        <div class="col-sm-12  col-md-12 col-lg-6  paddingTitles">
                                            <h3 class="fontFamily fontColorBlue fontBold fontSizeH3 paddingTitles animate__animated animate__bounce">${productoPreCargado.nombre}</h3>
                                            <p class="fontFamily fontColorRed fontBold fontSizeP paddingTitles animate__animated animate__bounce"> Price : ${productoPreCargado.precio} USD  Supplier : ${productoPreCargado.proveedor} Stock : ${productoPreCargado.stock} units</p>
                                        </div>
                                        `);
                }

            //IDEALMENTE HABRÍA QUE TRANSFORMA EL ARRAY DE OBJETOS BAJADOS DEL JSON EN UN ARRAY NORMAL
            arrayProductos = productosPreCargados.map ( item => new Producto (item.idProducto ,item.precio, item.proveedor, item.stock, item.nombre));
            
          //Guardado del usuario en el local storage
          //Primero chequeo que haya algo en el localStorage
        //   let item = localStorage.getItem(claveListaUsuarios);
        //   if (item){
        //       let usuariosLocalStorage = JSON.parse(localStorage.getItem(claveListaUsuarios))
        //       usuariosLocalStorage.push(usuarioNuevo)

        //       let usuariosLocalStorageString = JSON.stringify(usuariosLocalStorage)
        //       localStorage.setItem(claveListaUsuarios,usuariosLocalStorageString);
        //   }    
        //   else{
        //       arrayUsuario.push(usuarioNuevo)
        //       let usuariosLocalStorageString =JSON.stringify(arrayUsuario)
        //       localStorage.setItem(claveListaUsuarios,usuariosLocalStorageString);
        //   }






            console.log(arrayProductos)
            }
            
            else {alert("estado = error")};
        })}
//Cierre del click
    })
//Cierre del dom ready
})
        

