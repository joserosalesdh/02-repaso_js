// Promesas
import { getHeroeById } from "./bases/08-find-filter";
import { heroes } from "./data/heroes";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log("2 segundos despues");
//     // resolve();
//     // Tarea
//     const heroe = getHeroeById(2);
//     // console.log(heroe);
//     resolve(heroe);
//     // reject("No se puedo encontrar el catch");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("Then de la promesa", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se puedo encontrar el catch");
      }
      //   resolve(heroe);
      //   reject("No se puedo encontrar el catch");
    }, 2000);
  });
};
getHeroeByIdAsync(14)
  .then((heroe) => console.log("Heroe", heroe))
  .catch((error) => console.log(error));
