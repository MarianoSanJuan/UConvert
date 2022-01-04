$(document).ready(()=>{
    //Obtención del usuario registrado
    let objetoUsuarioForm = JSON.parse(localStorage.getItem(claveUserForm))
    let usuarioLogueado = objetoUsuarioForm

    //Check si hay productos almacenados
    let mostrarProductosAnteriores = true
    $("#showProductsBtn").click( function showProductosBbDd() {
    

    let UserTieneProductos = false
    let itemProducto = localStorage.getItem(claveListaProductos);
                // If para determinar si hay algo en el localstorage (de cualquier user)
            if (mostrarProductosAnteriores == true){
                if (itemProducto){
                    
                            arrayProductos = JSON.parse(localStorage.getItem(claveListaProductos));
                            //If para determinar si hay algo de ESE USER (el que está logueado)
                            for (i=0;i<arrayProductos.length;i++){
                                let objetoProducto = arrayProductos[i];
                                if(usuarioLogueado == objetoProducto.usuarioRegistrado){
                                    $("#espacioProductsCargados").append(`<h2 class="fontFamily fontColorRed fontBold fontSizeP paddingTitles animate__animated animate__bounce">
                                    <br> Producto # : ${objetoProducto.nombre}
                                    <br> ID Producto # : ${objetoProducto.idProducto}
                                    <br> Usuario # : ${objetoProducto.usuarioRegistrado}
                                    <br> Stock # : ${objetoProducto.stock} unidades
                                    <br> Precio # : ${objetoProducto.precio} ARS
                                    </h2>`)

                                    UserTieneProductos = true
                                }
                            } 

                            if (UserTieneProductos == false){
                                appendDataBaseError()
                            }
                            mostrarProductosAnteriores = false
                } 
                else {
                    appendDataBaseError()
                    mostrarProductosAnteriores = false
                }       
            }       
            else {
                mostrarProductosAnteriores = true
                $("#espacioProductsCargados").empty().append("")
            }    

    })            













})