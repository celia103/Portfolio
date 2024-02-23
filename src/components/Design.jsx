/* eslint-disable react/prop-types */
// Design.jsx
import React from "react";
import "../css/design.css";

function Design(props) {
	// Body
	return (
		<div className="card bg-dark text-white design-card align-self-center">
			<div className="card-img-container">
				{props.work && (
					<img
						src={props.work}
						alt={`image of ${props.title}`}
						className="card-img img-fluid object-fit-cover"
					/>
				)}
			</div>
			<div className="card-img-overlay">
				<div className="overlay-content">					
					<p className="card-title">{props.title}</p>
					<p className="card-text">{props.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Design;
