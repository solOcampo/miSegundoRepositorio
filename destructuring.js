/* Aplicado a Arrays */
let colores = ["Rojo","Azul","Amarillo",{
    colorMezcla : "Violeta"
}]

let colorRojo = colores[0]
let colorAzul = colores[1]
let colorAmarillo = colores[2]

let [,,,oreo] = colores

console.log(colorRojo,oreo.colorMezcla);

/* Aplicado a Objetos Literales */

let auto = {
    marca: "Volkswagen",
    modelo: "Vento",
    precio: 6000000,
    km:60000,
    color: "Turquesa",
    anio: 2020,
    patente:"COM017",
    vendido: true
}

let {color:pintura} = auto

console.log(pintura);