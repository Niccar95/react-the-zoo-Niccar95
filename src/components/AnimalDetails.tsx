import { useFeedAnimal } from "../hooks/useFeedAnimal";
import { IAnimal } from "../models/IAnimal";

interface IFoundAnimalProps {
  foundAnimal: IAnimal;
}

export const AnimalDetails = ({ foundAnimal }: IFoundAnimalProps) => {
  const { handleFeed, isFed } = useFeedAnimal(foundAnimal.isFed);
  console.log("isFed", isFed);

  return (
    <>
      {foundAnimal && (
        <article id="aboutCard">
          <h2>{foundAnimal.name}</h2>

          <div id="descriptionContainer">
            <div className="imageContainer">
              <img className="animalImage" src={foundAnimal.imageUrl}></img>
            </div>
            <p>{foundAnimal.longDescription}</p>
          </div>

          <button disabled={isFed} onClick={() => handleFeed(foundAnimal.id)}>
            Feed me
          </button>
          <p>{isFed ? "Has been fed" : "Is hungry"}</p>
        </article>
      )}
    </>
  );
};
