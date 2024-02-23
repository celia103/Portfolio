//Project.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "../css/project.css";

function Project(props) {
	// Body
	return (
		<div className="row mx-auto">
			<div className="col-md-7 order-md-2 text-align-center px-3">
				<h2>{props.title}</h2>
				<p className="lead">{props.description}</p>

				{/* button */}
				<div className="d-flex my-4 fs-5 mx-auto link-gp">
					<div>
						{props.codePen ? (
							<button
								type="button"
								className="btn-sm btn d-flex mx-2 align-items-center btn-outline-light"
							>
								<FontAwesomeIcon icon={faLink} className="btn-icon" />
								<a href={props.codePen} target="_blank" rel="noopener noreferrer">
									CodePen
								</a>
							</button>
						) : (
							<button
								type="button"
								className="btn-sm btn d-flex mx-2 align-items-center btn-outline-light"
							>
								<FontAwesomeIcon icon={faLink} className="btn-icon" />
								<a href={props.deployLink} target="_blank" rel="noopener noreferrer">
									Deploy Link
								</a>
							</button>
						)}
					</div>

					<div>
						{props.repoLink && !props.codePen && (
							<button
								type="button"
								className="btn-sm btn d-flex mx-2 align-items-center btn-outline-light"
							>
								<FontAwesomeIcon icon={faGithub} className="btn-icon" />
								<a href={props.repoLink} target="_blank" rel="noopener noreferrer">
									GitHub Repo.
								</a>
							</button>
						)}
					</div>
				</div>
			</div>

			{/* Image col */}
			<div className="col-md-5 order-md-1 mx-auto text-center px-3">
				{props.screenshot && (
					<img
						src={props.screenshot}
						alt={`Screenshot of ${props.title}`}
						className="img-fluid rounded"
						style={{ maxWidth: "400px", height: "auto" }}
					/>
				)}
				{props.video && (
					<video controls width="90%" height="auto" className="rounded">
						<source src={props.video} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				)}
			</div>
		</div>
	);
}

export default Project;
