import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IAnimalProps {
  animal: IAnimal;
}

export const Animal = ({ animal }: IAnimalProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/animal/" + animal.id);
  };

  return (
    <>
      <article id="animalCard" onClick={handleClick}>
        <h2>{animal.name}</h2>
        <div id="imageContainer">
          <img id="animalImage" src={animal.imageUrl} alt={animal.name}></img>
        </div>
        <button>Feed me</button>
      </article>
    </>
  );
};
