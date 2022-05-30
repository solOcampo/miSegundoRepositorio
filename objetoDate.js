let fechaHoy = new Date()

let fechaCumpleaños = new Date(1997,3,28)

/* Dia */
/* console.log(fechaHoy.getDate());
console.log(fechaHoy.getMonth());
console.log(fechaHoy.getFullYear());
console.log(fechaHoy.getUTCHours()); */
console.log(fechaCumpleaños.toDateString());
console.log(fechaCumpleaños.toLocaleDateString());
console.log(fechaHoy.toLocaleTimeString());