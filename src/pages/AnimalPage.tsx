import { useParams } from "react-router-dom";

//import { useEffect } from "react";
import { AnimalDetails } from "../components/AnimalDetails";
import { useAnimal } from "../hooks/useAnimal";

export const AnimalPage = () => {
  const { id } = useParams<{ id: string }>();
  const { findAnimal, foundAnimal } = useAnimal();

  // useEffect(() => {
  if (id && !foundAnimal) {
    findAnimal(parseInt(id, 10));
  }
  //}, [id, findAnimal]);

  return (
    <>
      <h1>About this animal</h1>
      <AnimalDetails foundAnimal={foundAnimal!}></AnimalDetails>
    </>
  );
};
