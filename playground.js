/* HECHO CON .MAP */

function agregarHttp(url) {
    return "http://" + url
}

function procesarMap(array,fun){
    return array.map(arr => fun(arr))
}

function procesar(array,fun){
    let arrayNuevo = []
    for (let i = 0; i < array.length; i++) {
        arrayNuevo.push(fun(array[i]))
    }
    return arrayNuevo
}
console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp)); 
