import { useParams } from "react-router-dom";
import { useAnimal } from "../hooks/useAnimal";
import { useEffect } from "react";

export const AnimalPage = () => {
  const { id } = useParams<{ id: string }>();
  const { findAnimal, foundAnimal } = useAnimal();

  useEffect(() => {
    if (id) {
      findAnimal(parseInt(id, 10));
    }
  }, [id, findAnimal]);
  return (
    <>
      <h1>About this animal</h1>
      <div>{foundAnimal?.name}</div>
    </>
  );
};
