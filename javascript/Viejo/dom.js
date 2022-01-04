
// CRM & AD NETWORK SELECTION--PRÁCTICA OBJETOS - CLASE 5 - OBJETOS

//  Definición de variables

 let crm = 0;
 let downloadFrequency = 0;
 let price = 0;

// Creación/Definición de función constructora (CLASE) con ECMA6 

 class Cart {
     constructor(crm, downloadFrequency, price){
         this.crm = crm,
         this.downloadFrequency = downloadFrequency,
         this.price = price,
         this.subTotal = 0,
         this.total = 0
     }
     calcularSubTotal() {this.subTotal=this.price*this.downloadFrequency;}
     calcularIva() {
         return this.subTotal*0.21;
     }
     calcularTotal(){
         this.total = this.subTotal + this.calcularIva();
     }
 }

// Creación de Función GLOBAL para solicitud de información
 function pedidoProducto() {
     while (!crm || crm==0 || crm>3)
         {crm=parseInt(prompt("Which CRM would you like to use? \n 1:Close.io (50USD/MONTH) \n 2:HubSpot (80USD/MONTH) \n 3:Pipedrive (100USD/MONTH)"));
     }
        
     switch (crm){
                     case 1:
                         price = 50;
                         break;
                     case 2:
                         price = 80;
                         break;
                    case 3:
                         price =100;
                         break;
                 }
     while (!downloadFrequency || downloadFrequency==0 || downloadFrequency>3)
         {downloadFrequency=parseInt(prompt("How many downloads per month? Insert option number\n 1:One \n 2:Two per month \n 3:Unlimited"));
     }    
     switch (downloadFrequency){
         case 1:
             downloadFrequency = 1;
             break;
         case 2:
             downloadFrequency = 2;
             break;
         case 3:
             downloadFrequency =3;
             break;
         }

    // Carga de la función constructora con los datos obtenidos. ESTÁ DENTRO DE LA FUNCIÓN GLOBAL
 return new Cart (crm, downloadFrequency, price)
}


alert("Welcome to our online store")

// Creación del objeto a partir de la función GLOBAL pedidoProducto que TIENE ADENTRO LA CONSTRUCTORA para cargar al objeto
 const carrito = pedidoProducto()

//  Aplicación de los métodos sobre el objeto CARRITO
 carrito.calcularSubTotal();
 carrito.calcularIva();
 carrito.calcularTotal();

// Presentación de resultados
alert("Your purchase:\n"+ carrito.crm + "Downloads per month " + carrito.downloadFrequency +":$ "+ carrito.subTotal+"\n"+
"VAT 21% $" + carrito.calcularIva()+"\n"+"\n"+"Total:" + carrito.total);

let padre = document.getElementById("thanksmessage");
let outputs = [carrito.crm, carrito.downloadFrequency, carrito.subTotal, carrito.total];
for (const output of outputs) {
    let li=document.createElement("li");
    li.innerHTML = output
    padre.appendChild(li)
}
// let parrafo = document.createElement("p");
// parrafo.innerHTML = "<h3>Your purchase + carrito.crm</h3>";
// document.body.appendChild(parrafo)








