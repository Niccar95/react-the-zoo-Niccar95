import { useFeedAnimal } from "../hooks/useFeedAnimal";
import { IAnimal } from "../models/IAnimal";
import placeholder from "../assets/magnifying-glass-2831367_1920.png";

interface IFoundAnimalProps {
  foundAnimal: IAnimal;
}

export const AnimalDetails = ({ foundAnimal }: IFoundAnimalProps) => {
  const { handleFeed, isFed, lastFed } = useFeedAnimal(
    foundAnimal.isFed,
    new Date(foundAnimal.lastFed)
  );
  console.log("isFed", isFed);

  return (
    <>
      {foundAnimal && (
        <article id="aboutCard">
          <h2>{foundAnimal.name}</h2>

          <div id="descriptionContainer">
            <div className="imageContainer">
              <img
                className="animalImage"
                src={foundAnimal.imageUrl}
                alt={foundAnimal.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = placeholder;
                }}
              ></img>
              <p>
                Födelseår: <b>{foundAnimal.yearOfBirth}</b>
              </p>
            </div>

            <p>{foundAnimal.longDescription}</p>
          </div>

          <div id="buttonWrapper">
            <button disabled={isFed} onClick={() => handleFeed(foundAnimal.id)}>
              {isFed ? "Jag har matats" : "Mata mig"}
            </button>

            <div>
              <p>
                <b>
                  {isFed
                    ? "Matades den: " + lastFed.toLocaleString()
                    : "Är hungrig"}
                </b>
              </p>
            </div>
          </div>
        </article>
      )}
    </>
  );
};
