



$(document).ready(()=>{

    // Guardo en una constante la URL del json de productos
    const jsonProductsUrl = "../json/products.json"


    // Selecciono el btn de show products y escucho los clicks
    $("#showProductsBtn").click(() => {
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
                
                //Botón para ocultar los productos cargados
                // $("#espacioProductsCargados").append(` <button
                // id="hideBtn">Hide Productos</button>`)
                //     $("#hideBtn").click(() => {
                //     $("#espacioProductsCargados").hide()
                // })

            //IDEALMENTE HABRÍA QUE TRANSFORMA EL ARRAY DE OBJETOS BAJADOS DEL JSON EN UN ARRAY NORMAL
            arrayProductos = productosPreCargados.map ( item => new Producto (item.idProducto ,item.precio, item.proveedor, item.stock, item.nombre));


            }
            
            else {alert("estado = error")};
        })})})
        

