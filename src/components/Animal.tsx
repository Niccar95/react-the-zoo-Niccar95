import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IAnimalProps {
  animal: IAnimal;
  findAnimal: (animalId: number) => void;
}

export const Animal = ({ animal, findAnimal }: IAnimalProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/animal/" + animal.id);
    findAnimal(animal.id);
  };

  return (
    <>
      <article id="animalCard" onClick={handleClick}>
        <h2>{animal.name}</h2>
        <div className="imageContainer">
          <img
            className="animalImage"
            src={animal.imageUrl}
            alt={animal.name}
          ></img>
        </div>
        <button>Feed me</button>
      </article>
    </>
  );
};
