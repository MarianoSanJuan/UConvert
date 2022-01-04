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
        console.log(encontrado)
        return encontrado;
      }
      i++;
    }
    return encontrado;
  }

// BANDERA PRODUCTOS GUARDADOS
let existenciaDeProductos = false

//BOTÓN DE LOG IN DE USUARIOS

$("#logInBtn").click(()=>{

      let userForm = document.getElementById("inputUserLogIn").value;
      let user = buscarUsuario(userForm);
        if (user != false) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Welcome back '+user.fullName,
                showConfirmButton: false,
                timer: 2500
                })
            existenciaDeProductos = true    
            $("#RegisterSpace").fadeOut(2000);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Ooops...Maybe there is a mistake',
                text: 'User not registered',
                })
        }
})     
     

//BOTÓN DE REGISTRO DE USUARIOS
$("#registerBtn").click(()=>{
    let user = document.getElementById("inputUserRegister").value;
    let fullName = document.getElementById("inputFullName").value;
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
            title: 'Oops...Please check the following issues',
            text: 'Missing info // Full name must not contain numbers or symbols // User already exists' ,
          })
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registration completed',
            showConfirmButton: false,
            timer: 2500
          })
          //Borrado de los campos ingresados correctamente
          document.getElementById("inputUserRegister").value = ""
          document.getElementById("inputFullName").value = ""
          //Identación del objeto usuario y pusheado al array de usuarios
          let usuarioNuevo = new Usuario (user, fullName)
          console.log(arrayUsuario)
          //Guardado del usuario en el local storage
          //Primero chequeo que haya algo en el localStorage
          let item = localStorage.getItem(claveListaUsuarios);
          if (item){
              let usuariosLocalStorage = JSON.parse(localStorage.getItem(claveListaUsuarios))
              usuariosLocalStorage.push(usuarioNuevo)

              let usuariosLocalStorageString = JSON.stringify(usuariosLocalStorage)
              localStorage.setItem(claveListaUsuarios,usuariosLocalStorageString);
          }    
          else{
              arrayUsuario.push(usuarioNuevo)
              let usuariosLocalStorageString =JSON.stringify(arrayUsuario)
              localStorage.setItem(claveListaUsuarios,usuariosLocalStorageString);
          }

          existenciaDeProductos = false


          $("#logInSpace").fadeOut(2000);

    }
  })

  