import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { useState } from "react";

interface IAnimalProps {
  animal: IAnimal;
  findAnimal: (animalId: number) => void;
}

export const Animal = ({ animal, findAnimal }: IAnimalProps) => {
  const navigate = useNavigate();
  const [isFed, setIsFed] = useState<boolean>(false);

  const handleNavigation = () => {
    navigate("/animal/" + animal.id);
    findAnimal(animal.id);
  };

  const handleFeed = () => {
    setIsFed(!animal.isFed);
  };
  return (
    <>
      <article id="animalCard">
        <h2>{animal.name}</h2>
        <div className="imageContainer" onClick={handleNavigation}>
          <img
            className="animalImage"
            src={animal.imageUrl}
            alt={animal.name}
          ></img>
        </div>
        <button disabled={isFed} onClick={handleFeed}>
          Feed me
        </button>
      </article>
    </>
  );
};
