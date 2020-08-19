// Desestructuración de Arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes; //Ignora el primero, ignora el seguro y traeme el tercero

console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

// const arr = useState("Goku");
// arr[1]();

// Imprimir en consola el nombre
// 1. El primer valor del arr se llamara nombre
// 2. el segundo setNombre
const [nombre, setNombre] = useState("Goku");
console.log(nombre);
setNombre();
