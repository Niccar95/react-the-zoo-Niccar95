import { useState } from "react";
import { IAnimal } from "../models/IAnimal";

export const useFeedAnimal = (initialIsFed: boolean, initialLastFed: Date) => {
  const [isFed, setIsFed] = useState<boolean>(initialIsFed);
  const [lastFed, setLastFed] = useState<Date>(initialLastFed);

  const handleFeed = (id: number) => {
    const newLastFed = new Date();
    setIsFed(true);
    setLastFed(newLastFed);
    const storedData = JSON.parse(
      localStorage.getItem("animalData") || "[]"
    ) as IAnimal[];
    const updatedData = storedData.map((item) =>
      item.id === id ? { ...item, isFed: true, lastFed: newLastFed } : item
    );
    localStorage.setItem("animalData", JSON.stringify(updatedData));
  };

  return { handleFeed, isFed, lastFed };
};
