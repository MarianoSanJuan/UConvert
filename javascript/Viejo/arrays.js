// CRM & AD NETWORK SELECTION--PRÁCTICA IF

// let inputCRM = prompt("Write Down your CRM").toLowerCase();
// let inputAdNetwork = prompt("Which AdNetwork would you like to use?").toLowerCase();

// if ((inputCRM == "salesforce" || inputCRM =="close"|| inputCRM =="hubspot") && (inputAdNetwork == "google" || inputAdNetwork == "facebook")){
//     alert ("Great! We will contact you to connect " +inputCRM + " with " +inputAdNetwork);
//     }else {
//         alert("Sorry! This combination is not available! We are working on it");
//     }


// CRM & AD NETWORK SELECTION--PRÁCTICA SWITCH-FOR-WHILE - CLASE 3 & 4

// let subTotalMensual = 0
// let discountPercentage=0
// let total= 0
// function calculoSubTotal () {
//     do {
//         let crm = prompt("Qué CRM quiere conectar? Salesforce, Zoho o Close?").toLowerCase();
//         let plan = prompt ("Con qué frecuencia quiere descargar la información? Once, BiWeekly, NoLimit?").toLowerCase();

//         switch (crm){
//             case "close":
//                 precio = 50;
//                 break;
//             case "zoho":
//                 precio = 40;
//                 break;
//             case "salesforce":
//                 precio =30;
//                 break;
//             default :
//                 alert("We don't provide this solution. Please write down an alternative");
//                 precio = 0;
//         }

//         switch (plan){
//             case "once":
//                 plan = 1;
//                 break;
//             case "biweekly":
//                 plan = 2;
//                 break;
//             case "nolimit":
//                 plan =3;
//                 break;
//             default :
//                 alert("Choose a data extracting option");
//                 plan = 0;
//         }
            
//             subTotalMensual = subTotalMensual + precio * plan
//             alert(subTotalMensual)
//             otrocrm  = confirm("Would you like another CRM? Just say yes or no")
//         }
//         while (otrocrm);
//     } 


// function discountMath () {
//             let promoCode = prompt("Do you have a Promo Code?")
//             alert(promoCode)
//             if (promoCode === "codeoff")
//                 {alert("Great! You will get 50% off")
//                 discountPercentage=0.5}         
//             else
//                 {alert("Code not valid")
//                 discountPercentage=0} 
//             }

// function calculoTotal () {
            
//             alert("Your sub total is "+subTotalMensual)    
//             alert("Your discount is "+discountPercentage)
            
//             total= subTotalMensual*(1-discountPercentage)
//             alert("Your total is "+ total)
// }

// calculoSubTotal();
// discountMath();
// calculoTotal();

// alert("Thanks! We will charge "+total+" USD every month on your card")

// CRM & AD NETWORK SELECTION--PRÁCTICA OBJETOS - CLASE 5 - OBJETOS

// // Definición de variables

// let crm = 0;
// let downloadFrequency = 0;
// let price = 0;

// // Creación/Definición de función constructora (CLASE) con ECMA6 

// class Cart {
//     constructor(crm, downloadFrequency, price){
//         this.crm = crm,
//         this.downloadFrequency = downloadFrequency,
//         this.price = price,
//         // this.discount = 1,
//         // this.code="a",
//         this.subTotal = 0,
//         this.total = 0
//     }
//     calcularSubTotal() {this.subTotal=this.price*this.downloadFrequency;}
//     calcularIva() {
//         return this.subTotal*0.21;
//     }
//     // calcularDiscount() {
//     //     if (this.code="PROMO"){
//     //         this.discount=0,5;
//     //     }
//     //     else {this.discount=1;}
//     // }
//     calcularTotal(){
//         this.total = this.subTotal + this.calcularIva();
//     }
// }

// // Creación de Función GLOBAL para solicitud de información
// function pedidoProducto() {
//     while (!crm || crm==0 || crm>3)
//         {crm=parseInt(prompt("Which CRM would you like to use? \n 1:Close.io (50USD/MONTH) \n 2:HubSpot (80USD/MONTH) \n 3:Pipedrive (100USD/MONTH)"));
//     }
        
//     switch (crm){
//                     case 1:
//                         price = 50;
//                         break;
//                     case 2:
//                         price = 80;
//                         break;
//                    case 3:
//                         price =100;
//                         break;
//                 }
//     while (!downloadFrequency || downloadFrequency==0 || downloadFrequency>3)
//         {downloadFrequency=parseInt(prompt("How many downloads per month? Insert option number\n 1:One \n 2:Two per month \n 3:Unlimited"));
//     }    
//     switch (downloadFrequency){
//         case 1:
//             downloadFrequency = 1;
//             break;
//         case 2:
//             downloadFrequency = 2;
//             break;
//         case 3:
//             downloadFrequency =3;
//             break;
//         }

//     //     for (let i=1;i<3;i++) 
//     //         {this.code=parseInt(prompt("Enter you promo code"))
//     //         alert(this.code)
//     //         if(this.code="FIFTY")
//     //             {this.discount=0,5;
//     //             break}
//     //         else {this.discount=1}    
//     //         ;
//     // }    

//     // Carga de la función constructora con los datos obtenidos. ESTÁ DENTRO DE LA FUNCIÓN GLOBAL
// return new Cart (crm, downloadFrequency, price)
// }


// alert("Welcome to our online store")

// // Creación del objeto a partir de la función GLOBAL pedidoProducto que TIENE ADENTRO LA CONSTRUCTORA para cargar al objeto
// const carrito = pedidoProducto()

// // Aplicación de los métodos sobre el objeto CARRITO
// carrito.calcularSubTotal();
// carrito.calcularIva();
// // carrito.calcularDiscount();
// carrito.calcularTotal();

// // Presentación de resultados
// alert("Your purchase:\n"+ carrito.crm + "Downloads per month " + carrito.downloadFrequency +":$ "+ carrito.subTotal+"\n"+
// "VAT 21% $" + carrito.calcularIva()+"\n"+"\n"+"Total:" + carrito.total);


// // CLASE 6 - ARRAYS
// // Creación de lista de supermercado

const itemsListaSuper = [];
const precioItemsListaSuper = [];
let cantidadTotalProductos = 5;
let precioTotal;
let productoIngresado;

do {
    productoIngresado = prompt("Ingresar producto");
    itemsListaSuper.push(productoIngresado.toUpperCase());
}
while (
    itemsListaSuper.length<cantidadTotalProductos
)

alert(itemsListaSuper.sort().join("\n"))


























// --PRÁCTICA JSON & STORAGE - CLASE 7 - JSON

// localStorage.setItem ("bienvenido","Hola Coders");
// let mensaje = localStorage.getItem ("bienvenido");
// console.log(mensaje)




