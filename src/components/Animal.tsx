import { IAnimal } from "../models/IAnimal";

interface IAnimalProps {
  animal: IAnimal;
}

export const Animal = ({ animal }: IAnimalProps) => {
  return (
    <>
      <article id="animalCard">
        <h2>{animal.name}</h2>
        <div id="imageContainer">
          <img id="animalImage" src={animal.imageUrl} alt={animal.name}></img>
        </div>
        <button>Feed me</button>
      </article>
    </>
  );
};
