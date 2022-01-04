//DEFINICIÓN DE FUNCTION DE BÚSQUEDA
function buscarUsuario(user){
    if ( !localStorage.getItem(claveListaUsuarios) ){
      return false;
    }
    let almacenados = JSON.parse(localStorage.getItem(claveListaUsuarios));
    let encontrado = false;
    let i = 0;
    while (!encontrado && i != almacenados.length ){
      if (almacenados[i].usuario == user) {
        encontrado = almacenados[i];
        return encontrado;
      }
      i++;
    }
    return encontrado;
  }

 // DEFINICIÓN FUNCIÓN ALMACENADO DE PRODUCTOS 
  function guardarProductos(productoNuevo){
  
    let itemProducto = localStorage.getItem(claveListaProductos);
    if (itemProducto){
  
      arrayProductos = JSON.parse(localStorage.getItem(claveListaProductos));
      arrayProductos.push(productoNuevo);
  
      let arrayProductosString = JSON.stringify(arrayProductos);
      localStorage.setItem(claveListaProductos,arrayProductosString);
  
    }else{
  
      let arrayProductos = [];
      arrayProductos.push(productoNuevo);

      let arrayProductosString = JSON.stringify(arrayProductos);
      localStorage.setItem(claveListaProductos,arrayProductosString);
  
  
    }
  }

// BANDERA PRODUCTOS GUARDADOS
// let existenciaDeProductos = false

//BOTÓN DE LOG IN DE USUARIOS

$("#logInBtn").click(()=>{

      let userForm = document.getElementById("inputUserLogIn").value.toUpperCase();
      let user = buscarUsuario(userForm);
        if (user != false) {
          
           Swal.fire({
             position: 'center',
             icon: 'success',
             title: 'Bienvenido '+user.usuario,
             showConfirmButton: false,
             timer: 8500,
             footer: '<a href="applogin.html">Access</a>', 
          })
           let usuarioFormString = JSON.stringify(userForm)
           localStorage.setItem(claveUserForm, usuarioFormString)         
            // existenciaDeProductos = true    
            $("#RegisterSpace").fadeOut(2000);
        }else{
         
             Swal.fire({
                 icon: 'error',
                 title: 'Ooops...debe haber un error',
                 text: 'User no registrado',
                 })
        }
})     
     

//BOTÓN DE REGISTRO DE USUARIOS
$("#registerBtn").click(()=>{
  
    let user = document.getElementById("inputUserRegister").value.toUpperCase();
    let fullName = document.getElementById("inputFullName").value.toUpperCase();
    let letters = /^[a-zA-Z\s]*$/;  
    let statusFullName = ""
    
    let existeUsuario = buscarUsuario(user);   

    if (fullName.match(letters)){
        statusFullName = "OK"
    }
    else{
        statusFullName = "ERROR"
    }  

    if (statusFullName === "ERROR" || existeUsuario != false || !user || !fullName){
       
      Swal.fire({
           icon: 'error',
           title: 'Oops...Favor de revisar los siguientes puntos',
           text: 'Campos incompletos - Nombre no debe contener números ni símbolos - Usuario ya registrado' ,
         })
    }
    else{
        
       Swal.fire({
            
           position: 'center',
           icon: 'success',
           title: 'Registro completo',
           showConfirmButton: false,
           timer: 5500,
           footer: '<a href="appregistered.html">Access</a>'
         })
          //Borrado de los campos ingresados correctamente
          document.getElementById("inputUserRegister").value = ""
          document.getElementById("inputFullName").value = ""
          //Identación del objeto usuario y pusheado al array de usuarios
          let usuarioNuevo = new Usuario (user)
          //Guardado del usuario en el local storage
          //Primero chequeo que haya algo en el localStorage
          let item = localStorage.getItem(claveListaUsuarios);
          if (item){
              let arrayUsuario = JSON.parse(localStorage.getItem(claveListaUsuarios))
              arrayUsuario.push(usuarioNuevo)

              let arrayUsuarioString = JSON.stringify(arrayUsuario)
              localStorage.setItem(claveListaUsuarios,arrayUsuarioString);
          }    
          else{
              arrayUsuario.push(usuarioNuevo)
              let arrayUsuarioString =JSON.stringify(arrayUsuario)
              localStorage.setItem(claveListaUsuarios,arrayUsuarioString);
          }

          //Ultimo usuario localstorage
          let usuarioNuevoString = JSON.stringify(usuarioNuevo)
          localStorage.setItem(claveUsuarioNuevo, usuarioNuevoString)
          // existenciaDeProductos = false
          // $("#logInSpace").fadeOut(2000);
        
          

    }
  })

  