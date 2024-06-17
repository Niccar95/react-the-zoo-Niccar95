import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";

export const useAnimal = () => {
  const [storedAnimals, setStoredAnimals] = useState<IAnimal[]>([]);
  const [foundAnimal, setFoundAnimal] = useState<IAnimal | undefined>();

  useEffect(() => {
    const animals = JSON.parse(localStorage.getItem("animalData") || "[]");
    setStoredAnimals(animals);
    console.log(animals);
  }, []);

  const findAnimal = (animalId: number) => {
    const animal = storedAnimals.find((a) => a.id === animalId);
    setFoundAnimal(animal);

    console.log(animal);
  };

  return { findAnimal, foundAnimal };
};
