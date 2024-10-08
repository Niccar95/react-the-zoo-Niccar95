import animalImage from "../assets/giraffe-4456974_1920.jpg";

export const Home = () => {
  return (
    <>
      <h1 className="welcomeHeading">Välkommen till The Zoo!</h1>
      <div id="introWrapper">
        <div className="animalImageContainer">
          <img className="animalImage" src={animalImage} alt="giraffe"></img>
        </div>

        <section className="zooDescriptionSection">
          <p>
            Välkommen till "The Zoo" – din främsta destination för att utforska
            en mångfald av fascinerande varelser från hela världen. Här på "The
            Zoo" strävar vi efter att förena människor med djur i en atmosfär av
            lärande, respekt och omsorg. Oavsett om du är nyfiken på de exotiska
            arterna från fjärran länder eller är på jakt efter en ny
            familjemedlem bland våra adopterbara vänner, så är du välkommen att
            utforska våra artfullt designade utställningar och lära känna våra
            bevingade, skaliga och pälsklädda invånare. Låt "The Zoo" vara din
            port till en värld av upptäckt och engagemang för djurens
            välbefinnande.
          </p>

          <p>
            <b>Vi ser fram emot ditt besök!</b>
          </p>
        </section>
      </div>
    </>
  );
};
