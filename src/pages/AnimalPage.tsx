import { useParams } from "react-router-dom";

import { AnimalDetails } from "../components/AnimalDetails";
import { useFindAnimal } from "../hooks/useFindAnimal";

export const AnimalPage = () => {
  const { id } = useParams<{ id: string }>();
  const { findAnimal, foundAnimal } = useFindAnimal();

  if (id && !foundAnimal) {
    findAnimal(parseInt(id, 10));
  }

  return (
    <>
      <h1>About this animal</h1>
      <AnimalDetails foundAnimal={foundAnimal!}></AnimalDetails>
    </>
  );
};
