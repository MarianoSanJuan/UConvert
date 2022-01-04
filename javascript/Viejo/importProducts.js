



$(document).ready(()=>{
    // console.log("dom listo 2")
    // Guardo en una constante la URL del json de productos
    const jsonProductsUrl = "../json/products.json"
    // console.log(jsonProductsUrl);

    // Selecciono el btn de show products y escucho los clicks
    $("#showProductsBtn").click(() => {
        $.getJSON(jsonProductsUrl, function (respuesta, estado) {
            // console.log(estado);
            if(estado === "success"){
                // alert("estado OK, entra al if");
                // Creo una variable con la respuesta del JSON
                let productosPreCargados = respuesta;
                // console.log(productosPreCargados);    
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


            // Creación de los productos (que son objetos) pre cargados y los meto en el arrayProductos que es un class definida en el otro js
            const producto1 = new Producto (1,10,"Proveedor de Productos A",100,"Zapatillas")
            const producto2 = new Producto (2,20,"Proveedor de Productos B",200,"Ropa")
            const producto3 = new Producto (3,30,"Proveedor de Productos C",300,"Vajilla")
            console.log(typeof producto1.idProducto);
            console.log(typeof producto1.precio);
            console.log(typeof producto1.proveedor);    
            console.log(typeof producto1.stock);
            console.log(typeof producto1.nombre);
            arrayProductos.push(producto1);
            arrayProductos.push(producto2);
            arrayProductos.push(producto3);
            console.log(arrayProductos);

            //IDEALMENTE HABRÍA QUE TRANSFORMA EL ARRAY DE OBJETOS BAJADOS DEL JSON EN UN ARRAY NORMAL
            // let arrayProductosJson = productosPreCargados.map ( function(x) {
            //     return new Producto (precio,proveedor,stock,nombre);
            // });
            // console.log(arrayProductosJson);

            }
            
            else {alert("estado = error")};
        })})})
        

