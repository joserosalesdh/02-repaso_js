// Desestructuracion de Objetos

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// const { edad, clave, nombre } = persona; //Lo que digo aca es extrae lo que yo estoy poniendo dentro de estas llaves de este objeto persona. por ejemplo si quiero el nombre pongo {nombre}
// console.log(nombre);

const useContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
  //   console.log(usuario);
  //   const { edad, clave, nombre } = usuario;
  //   console.log(edad, nombre, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const avenger = useContext(persona);
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = avenger;
console.log(nombreClave, anios);
console.log(lat, lng);
