import { IAnimal } from "../models/IAnimal";

interface IFoundAnimalProps {
  foundAnimal?: IAnimal;
}

export const AnimalDetails = ({ foundAnimal }: IFoundAnimalProps) => {
  return (
    <>
      <article id="aboutCard">
        <h2>{foundAnimal?.name}</h2>

        <div id="descriptionContainer">
          <div className="imageContainer">
            <img className="animalImage" src={foundAnimal?.imageUrl}></img>
          </div>
          <p>{foundAnimal?.longDescription}</p>
        </div>

        <button>Feed me</button>
      </article>
    </>
  );
};
