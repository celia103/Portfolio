//Footer.jsx
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin);

function Footer() {
	return (
		<footer className="bg-dark text-light text-center p-3 bottom">
			<div className="container">
				<div className="row">
					<div className="col-md-8 d-flex justify-content-center align-items-center m-auto">
						<span>&copy; 2024 Celia&rsquo;s Portfolio</span>
						<span className="ms-3">
							<a
								href="https://www.linkedin.com/in/celiacyy/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={["fab", "linkedin"]} className="text-light" />
							</a>
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
