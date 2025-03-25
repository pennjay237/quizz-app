import { PropTypes } from "prop-types";

export default function WelcomCart({ navig, isLoading }) {
  return (
    <div className="box">
      <div className="card-box">
        <div className="row">
          <h1>Welcome To My Quiz Game</h1>
        </div>
        <div className="row">
          <p className="rules">
            <ul>
              <li>You will be provided with ten (10) question answering one (1) at a time.</li>
              <li>Answer either True or False depending on your decision.</li>
              <li>Try to score from five and above for a pass mark, else you fail the quizz</li>
              <li>Feel free to play again and score higher marks</li>
            </ul>
          </p>
        </div>
        <div className="row">
          {isLoading ? (
            <button
              onClick={() => navig()}
              className="btn btn-outline-success bouton"
            >
              start game
            </button>
          ) : (
            <button
              onClick={() => navig()}
              className="btn btn-outline-success bouton disabled"
            >
              start game
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

WelcomCart.propTypes = {
  navig: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};