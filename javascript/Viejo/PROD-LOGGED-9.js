$(document).ready(()=>{
    //Obtención del usuario registrado
    let objetoUsuarioForm = JSON.parse(localStorage.getItem(claveUserForm))

    let usuarioLogueado = objetoUsuarioForm
    console.log(typeof usuarioLogueado)
    console.log(usuarioLogueado)
    
    
    
    //Check si hay productos almacenados
    let mostrarProductosAnteriores = true
    $("#showProductsBtn").click( function showProductosBbDd() {
    

    let tieneProductos = false
    let itemProducto = localStorage.getItem(claveListaProductos);
                console.log(itemProducto)
                // If para determinar si hay algo en el localstorage (de cualquier user)
                if (itemProducto){
                    if(mostrarProductosAnteriores == true){
                            arrayProductos = JSON.parse(localStorage.getItem(claveListaProductos));
                            console.log(arrayProductos)
                            //If para determinar si hay algo de ESE USER (el que está logueado)
                            for (i=0;i<arrayProductos.length;i++){
                                let objetoProducto = arrayProductos[i];
                                if(usuarioLogueado == objetoProducto.usuarioRegistrado){
                                    $("#espacioProductsCargados").append(`<h2 class="fontFamily fontColorRed fontBold fontSizeP paddingTitles animate__animated animate__bounce">
                                    <br> Name # : ${objetoProducto.nombre}
                                    <br> Product ID # : ${objetoProducto.idProducto}
                                    <br> User # : ${objetoProducto.usuarioRegistrado}
                                    <br> Stock # : ${objetoProducto.stock} units
                                    <br> Price # : ${objetoProducto.precio} USD
                                    </h2>`)

                                    tieneProductos = true
                                }
                            } 

                            if (tieneProductos = false){
                                $("#espacioProductsCargados").append(`
                                    <br> No products in Database for this user
                                    `)
                            }
                        mostrarProductosAnteriores = false
                    } 
                    else {
                        mostrarProductosAnteriores = true
                        $("#espacioProductsCargados").empty().append("")
                    }       
                }       
                else {
                    $("#espacioProductsCargados").append(`
                            <br> No products in Database
                            `)
                }    

    })            













})