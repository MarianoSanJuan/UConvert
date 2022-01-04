function crearUserId (){

    let itemRandomId = localStorage.getItem(claveListaProductId)
    if (itemRandomId){
        let arrayNroRandom = []
        arrayNroRandom = JSON.parse(localStorage.getItem(claveListaProductos));
        let idRandom = Math.floor(Math.random()*100000)
        console.log(idRandom)

        for (i=0;arrayNroRandom.length;i++)
            if(idRandom == arrayNroRandom[0]){
            alert("Please retry")
            return
            }
        
        arrayNroRandom.push(idRandom)
        console.log(arrayNroRandom)

        let arrayNroRandomString = JSON.stringify(arrayNroRandom)
        localStorage.setItem(claveListaProductId, arrayNroRandomString)
        console.log(idRandom)
        return idRandom
        

    }
    else {
        let arrayNroRandom = []
        console.log(idarrayNroRandomRandom)

        let idRandom = Math.floor(Math.random()*100000)
        console.log(idRandom)

        arrayNroRandom.push(idRandom)
        console.log(arrayNroRandom)


        let arrayNroRandomString = JSON.stringify(arrayNroRandom)
        localStorage.setItem(claveListaProductId, arrayNroRandomString)
        console.log(idRandom)

        return idRandom
        
    }
}
