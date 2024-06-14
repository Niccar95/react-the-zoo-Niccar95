import { IAnimal } from "../models/IAnimal";
import { Animal } from "./Animal";

interface IAnimalsProps {
  animals: IAnimal[];
  findAnimal: (animalId: number) => void;
}

export const Animals = ({ animals, findAnimal }: IAnimalsProps) => {
  return (
    <>
      {animals.map((animal) => (
        <Animal
          key={animal.id}
          animal={animal}
          findAnimal={findAnimal}
        ></Animal>
      ))}
    </>
  );
};
