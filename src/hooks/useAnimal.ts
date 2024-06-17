import { useState } from "react";
import { IAnimal } from "../models/IAnimal";

export const useAnimal = () => {
  const storedAnimals = JSON.parse(localStorage.getItem("animalData") || "[]");
  const [foundAnimal, setFoundAnimal] = useState<IAnimal>();

  const findAnimal = (animalId: number) => {
    const animal = storedAnimals.find((a: { id: number }) => a.id === animalId);

    if (animal !== undefined) {
      setFoundAnimal(animal);
    }
  };

  return { findAnimal, foundAnimal };
};
