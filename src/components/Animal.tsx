import { IAnimal } from "../models/IAnimal";

interface IAnimalProps {
  animal: IAnimal;
}

export const Animal = ({ animal }: IAnimalProps) => {
  return (
    <>
      <h1>{animal.name}</h1>
      <img src={animal.imageUrl} alt={animal.name}></img>
    </>
  );
};
