import { IAnimal } from "../models/IAnimal";

interface IFoundAnimalProps {
  foundAnimal?: IAnimal;
}

export const AnimalDetails = ({ foundAnimal }: IFoundAnimalProps) => {
  return (
    <>
      <div>{foundAnimal?.name}</div>
      <img src={foundAnimal?.imageUrl}></img>
    </>
  );
};
