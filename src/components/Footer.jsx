//Footer.jsx
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faGithub,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faLinkedin);

function Footer() {
	return (
		<div className="container">
			<footer className="d-flex flex-wrap justify-content-between align-items-center px-4 py-3 mt-5 border-top">
				<div className="col-md-4 d-flex align-items-center">
					<span class="mb-3 mb-md-0 text-body-secondary">
						&copy; 2024 Celia&rsquo;s Portfolio
					</span>
				</div>
				<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li class="ms-3">
						<a
							href="https://www.linkedin.com/in/celiacyy/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-body-secondary"
						>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
					</li>
					<li class="ms-3">
						<a
							href="mailto:celiayych@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-body-secondary"
						>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</li>
					<li class="ms-3">
						<a
							href="https://github.com/celia103"
							target="_blank"
							rel="noopener noreferrer"
							className="text-body-secondary"
						>
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;
