/* eslint-disable no-unused-vars */
//Home page
import React from "react";
import "../css/home.css";
import profileImage from "/assets/images/photo1.jpg";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="container-fluid bg-dark text-white min-vh-100 d-flex align-items-center">
			<div className="container col-xxl-8">
				<div className="row">
					<div className="col-md-6">
						<main className="d-flex w-100 h-100 p-3 mx-auto flex-column px-3 ms-md-4">
							{/* Text section */}
							<div>
								<svg>
									<text x="0%" y="50%" dy=".35em" textAnchor="start">
										Hello
									</text>
								</svg>
							</div>

							<p className="lead">
								<span className="fw-bold">
									I&rsquo;m Celia, a graphic designer and illustrator originally from
									Hong Kong, but now based in Greater Manchester, UK.
								</span>{" "}
								Recently, I completed a Front-End Web Development bootcamp. My design
								journey is a continuous learning experience, and I&rsquo;m excited about
								exploring the possibilities of web development. I aspire to contribute
								my skills to create engaging and interactive web experiences. Feel free
								to explore my portfolio.
							</p>

							<p className="lead">
								<Link
									to="/projects-gallery"
									className="btn btn-lg btn-outline-light fw-light border-white mt-4"
								>
									Learn more
								</Link>
							</p>
						</main>
					</div>

					{/* Photo */}
					<div className="col-md-6 d-flex justify-content-center align-items-center">
						<div className="profile-image">
							<div className="circleFrame1"></div>
							<div className="circleFrame2"></div>
							<img className="fitting-image" src={profileImage} alt="Profile" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
