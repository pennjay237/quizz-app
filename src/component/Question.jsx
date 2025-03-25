import { PropTypes } from "prop-types";
import he from "he";

export default function Question({
	next,
	question,
	number,
	totalQuestion,
	time,
}) {
	function escapeHtml(word){
		return word ? he.decode(word) : "";
	}
	return (
		<div className="box">
			<div className="card-box question-box">
				<div className="row">
					<h3>
						Question{" "}
						<span>
							{number}/{totalQuestion}
						</span>
					</h3>
					<h3> Time left: {time} </h3>
				</div>
				<div className="yes">
					<div className="col-6">
						<h4>
							Category : <span>{question?.category}</span>
						</h4>
					</div>
					<div className="col-6">
						<h4>
							Difficulty : <span>{question.difficulty}</span>
						</h4>
					</div>
				</div>
				<div className="row g-1">
					<h3 className="questipn"> {escapeHtml(question?.question)}</h3>
				</div>
				<div className="tfbut">
					<div className="col-6">
						<button
							onClick={() => next(question, "True")}
							className="btn btn-outline-success bouton"
						>
							{" "}
							True{" "}
						</button>
					</div>
					<div className="col-6">
						<button
							onClick={() => next(question, "False")}
							className="btn btn-outline-danger bouton "
						>
							{" "}
							False
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

Question.propTypes = {
	next: PropTypes.func.isRequired,
	question: PropTypes.object,
	number: PropTypes.number,
	totalQuestion: PropTypes.number,
	time: PropTypes.number,
};
