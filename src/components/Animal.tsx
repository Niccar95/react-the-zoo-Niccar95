import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { useFeedAnimal } from "../hooks/useFeedAnimal";

interface IAnimalProps {
  animal: IAnimal;
  findAnimal: (animalId: number) => void;
}

export const Animal = ({ animal, findAnimal }: IAnimalProps) => {
  const { handleFeed, isFed, lastFed } = useFeedAnimal(
    animal.isFed,
    new Date(animal.lastFed)
  );
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/animal/" + animal.id);
    findAnimal(animal.id);
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
        <button disabled={isFed} onClick={() => handleFeed(animal.id)}>
          Feed me
        </button>
        <p>{isFed ? "Has been fed" : "Is hungry"}</p>
        {isFed && <p>{lastFed.toLocaleString()}</p>}
      </article>
    </>
  );
};
