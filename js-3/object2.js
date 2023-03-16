let persona = {
    nombre: "Sebastián Montoya",
    edad: 22,
    ciudad: "Medellín",
    profesion: "Estudiante"
 
}

function presentacion(persona) {
    return ("Hola me llamo " + persona.nombre + ", vivo en " + persona.ciudad + " y tengo " + persona.edad + " años.");
}

console.log(persona);

let mensaje = presentacion(persona);

console.log(mensaje);
persona.hobbie = ["programar", "squash", "piano"]

console.log("Mis hobbies son: ")
for (let i = 0; i < persona.hobbie.length; i++) {
    console.log("-" + persona.hobbie[i])
    
}