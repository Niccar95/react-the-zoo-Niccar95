import { useState } from "react";
import { IAnimal } from "../models/IAnimal";

export const useFeedAnimal = (initialIsFed: boolean) => {
  const [isFed, setIsFed] = useState<boolean>(initialIsFed);

  console.log(isFed);

  const handleFeed = (id: number) => {
    setIsFed(true);
    const storedData = JSON.parse(
      localStorage.getItem("animalData") || "[]"
    ) as IAnimal[];
    const updatedData = storedData.map((item) =>
      item.id === id ? { ...item, isFed: true } : item
    );
    localStorage.setItem("animalData", JSON.stringify(updatedData));
  };

  return { handleFeed, isFed };
};
