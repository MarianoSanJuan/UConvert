//APPENDS
// Append Form Products
function appendFormProducts() {
$("#espacioProductsForm").append(`  
        <article class="row">
            
            <div class="col-sm-12  col-md-4  offset-md-2 col-lg-5  paddingTitles">    
                <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP" id=headlinePrice>Precio</div>
                <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
                <input id="inputPrice" type="number" placeholder="Solo números" value="">
                </div>
            </div>
            <div class="col-sm-12  col-md-4  col-lg-5  paddingTitles">    
                <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP"  id=headlineQuantity>Nombre</div>
                <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
                <input id="inputName" type="text" placeholder="Tu producto" value="">
            </div>
        </div>
        </article>    
        <article class="row">  
            <div class="col-sm-12  col-md-4 offset-md-2 col-lg-5  paddingTitles">    
                <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP" id=headlineSupplier>Proveedor</div>
                <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
                <input id="inputSupplier" type="text" placeholder="Persona jurídica" value="">
                </div>
            </div>
            <div class="col-sm-12  col-md-4 col-lg-5   paddingTitles">    
                <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP"  id=headlineStock>Stock</div>
                <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
                <input id="inputStock" type="number" placeholder="Unidades" value="">
                </div>
            </div>
        </article>    
        <article class="row">  
        
        </article>   
        
        `)
    }

// Append Form Products
function appendDataBaseError(){
    $("#espacioProductsCargados").append(`<p class="fontFamily fontColorRed fontSizeP  paddingTitles">
    No hay productos creados para este usuario</p>
    `)
}

// Append Sales form phrase
function appendSalePhrase(){
    $("#espacioSaleForm").prepend(`   
    <h3 class="fontFamily fontColorBlue fontSizeP  fontBold paddingTitles">Productos almacenados en la base de datos</h3>
    <p class="fontFamily fontColorRed fontSizeP  paddingTitles">Puedes agregar tantos como gustes en "Nuevo producto"</p>
    <article class="row">
        <div class="col-sm-12  col-md-12 col-lg-12  paddingTitles">    
            <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter" id="espacioProductosFinales">
            </div>
        </div>
    </article>`)
}

//// Append Sales form phrase # 2
function appendSalePhrase2(){
    $("#espacioSaleForm").append(`
    <h2 class="fontFamily fontColorBlue fontBold fontSizeP paddingTitles animate__animated animate__bounce"> 
            If your product is not on the list, you can add more on the following link   </h2> 
            
    <button id="btnNewProduct" class="btn colorTextButton textDecorationButton borderButtonColor botonesBgColor fontSizeP fontFamily fontBold"><a href="#newProductBtn"> Agregar más productos</a> </button>`);
}




function appendSaleForm(){
$("#espacioSaleForm").append(`
            
            <article class="row">
            <h2 class="fontFamily fontColorBlue fontBold fontSizeP paddingTitles animate__animated animate__bounce"> 
            Complete the following form to register your sale</h2> 
                <div class="col-sm-12  col-md-4   col-lg-3 offset-lg-1 paddingTitles">    
                    <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP"  id=headlineformProductId>¿Producto a vender? Poner ID</div>
                    <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
                        <input id="inputIdProductoVenta" type="number" placeholder="Solo números" value="">
                    </div>
                </div>
                <div class="col-sm-12  col-md-4  col-lg-3 offset-lg-1 paddingTitles">    
                    <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP" id=headlineformQuantity>¿Cantidad vendida?</div>
                    <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
                    <input id="InputQuantity" type="number" placeholder="Solo números" value="">
                    </div>
                </div>
                <div class="col-sm-12  col-md-4  col-lg-3 offset-lg-1 paddingTitles">    
                    <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter fontFamily fontColorRed fontBold fontSizeP" id=headlineformClient>¿Nombre cliente?</div>
                    <div class="d-flex flex-column align-items-center justify-content-evenly textAlignCenter">
                    <input id="InputClientName" type="text" placeholder="Persona física/Jurídica" value="">
                </div>
            </div>
            </article>    

            `);}

function appendEmptySaleForm(){
    $("#espacioSaleForm").empty().append("")
}