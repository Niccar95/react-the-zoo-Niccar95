import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";

export const useAnimal = () => {
  const [storedAnimals, setStoredAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    const animals = JSON.parse(localStorage.getItem("animalData") || "[]");
    setStoredAnimals(animals);
    console.log(animals);
  }, []);

  const findAnimal = (animalId: number) => {
    const foundAnimal = storedAnimals.find((a) => a.id === animalId);

    console.log(foundAnimal);
    return foundAnimal;
  };

  return { findAnimal };
};
