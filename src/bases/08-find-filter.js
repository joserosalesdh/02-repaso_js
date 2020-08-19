//
import { heroes } from "../data/heroes";

// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };
//Mas sencillo abajo ya que me da un true y en el caso contrario un fasle
export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};
// console.log(getHeroesByOwner("DC"));
