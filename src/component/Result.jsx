/** @format */

import PropTypes from "prop-types";

export default function ResultList({ tabResponse, score, star }) {
	return (
		<div className="container bo">
			<div className="cardlist">
				<div className="card-header d-flex align-items-center g-1">
					<h3>Score : {score} /10</h3>{" "}
					{score > 5 ? (
						<h3 className="mx-2">You Passed</h3>
					) : (
						<h3 className="mx-2 ">You Failed</h3>
					)}
				</div>
				<div className="card-body">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Qst</th>
								<th scope="col">Quetions Asked</th>
								<th scope="col">Correct answer</th>
								<th scope="col">Your answer</th>
							</tr>
						</thead>
						<tbody>
							{tabResponse.map((item, index) => {
								return (
									<tr key={index + 1}>
										<th scope="row">{index + 1}</th>
										<td> {item.question}</td>
										<td>{item.correct_answer}</td>
										<td> {item.yours} </td>
									</tr>
								);
							})}
						</tbody>
					</table>
					<div className="rsb">
						<button onClick={() => star()} className="rsb">
							Restart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

ResultList.propTypes = {
	tabResponse: PropTypes.array,
	score: PropTypes.number.isRequired,
	star: PropTypes.func,
};
