// Template Strings alt + 96

const nombre = "Jose";
const apellido = "Rosales";

const nombreCompleto = `${nombre} ${apellido}`;

function getSaludo(nombre) {
  return "Hola" + nombre;
}
console.log(`Este es un texto: ${getSaludo(nombre)}`);

//
