import errorImage from "../assets/cat-1390342_1920.png";

export const PageNotFound = () => {
  return (
    <>
      <div id="errorWrapper">
        <h2 className="errorMessage">
          Error 404. The page you are looking for doesn't exist...
        </h2>

        <div id="errorImageContainer">
          <img className="errorImage" src={errorImage} alt="notAmusedCat"></img>
        </div>
      </div>
    </>
  );
};
