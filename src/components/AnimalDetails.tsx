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
          <div id="generalInfoContainer">
            <section id="animalInfoSection">
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
              </div>

              <div className="uniqueDetailsContainer">
                <p>
                  <b>Latinsk namn: </b>
                  {foundAnimal.latinName}
                </p>
                <p>
                  <b>Födelseår: </b> {foundAnimal.yearOfBirth}
                </p>
                <p>
                  <b>Mediciner: </b> {foundAnimal.medicine}
                </p>
              </div>
            </section>

            <section id="descriptionSection">
              <h2>{foundAnimal.name}</h2>
              <p className="shortText">{foundAnimal.shortDescription}</p>
              <h3>Art</h3>
              <p className="longText">{foundAnimal.longDescription}</p>
            </section>
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
