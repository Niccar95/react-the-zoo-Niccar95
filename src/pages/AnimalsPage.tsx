import { useEffect, useState } from "react";
import { getAnimalData } from "../services/AnimalService";
import { IAnimal } from "../models/IAnimal";
import { Animals } from "../components/Animals";
import { useAnimal } from "../hooks/useAnimal";

export const AnimalsPage = () => {
  const { findAnimal } = useAnimal();
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [dataFetched, setDataFetched] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const animalData = await getAnimalData();
        setAnimals(animalData);
        setDataFetched(true);
        console.log("Fetched animals successfully:", animalData.length);
        localStorage.setItem("animalData", JSON.stringify(animalData));
      } catch (error) {
        console.error("Error fetching animals:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!dataFetched) {
      getData();
    }
  }, [dataFetched]);

  return (
    <>
      <h1>Our animals</h1>
      {loading && <h2>Loading...</h2>}
      <div id="animalWrapper">
        <Animals animals={animals} findAnimal={findAnimal}></Animals>
      </div>
    </>
  );
};
