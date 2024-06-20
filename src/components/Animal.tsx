import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { useFeedAnimal } from "../hooks/useFeedAnimal";
import placeholder from "../assets/magnifying-glass-2831367_1920.png";

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
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = placeholder;
            }}
          ></img>
        </div>
        <div id="shortDescription">
          <p>{animal.shortDescription}</p>
        </div>
        <button disabled={isFed} onClick={() => handleFeed(animal.id)}>
          {isFed ? "Jag har matats" : "Mata mig"}
        </button>
        <p>
          <b>
            {isFed ? "Matades den: " + lastFed.toLocaleString() : "Är hungrig"}
          </b>
        </p>
      </article>
    </>
  );
};
