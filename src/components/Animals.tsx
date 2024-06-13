import { IAnimal } from "../models/IAnimal";
import { Animal } from "./Animal";

interface IAnimalsProps {
  animals: IAnimal[];
}

export const Animals = ({ animals }: IAnimalsProps) => {
  return (
    <>
      {animals.map((animal) => (
        <Animal key={animal.id} animal={animal}></Animal>
      ))}
    </>
  );
};
