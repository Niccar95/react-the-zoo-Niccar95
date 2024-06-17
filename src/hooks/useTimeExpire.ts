import { IAnimal } from "../models/IAnimal";

export const useTimeExpire = () => {
  const expirationTime = new Date().setHours(new Date().getHours() + 3);
  const hungerReset = (id: number) => {
    const storedData = JSON.parse(
      localStorage.getItem("animalData") || "[]"
    ) as IAnimal[];

    const updatedTime = storedData.map((animal) =>
      animal.id === id ? { ...animal, lastFed: expirationTime } : animal
    );

    if (expirationTime) {
      localStorage.setItem("animalData", JSON.stringify(updatedTime));
    }
  };
  return { hungerReset };
};
