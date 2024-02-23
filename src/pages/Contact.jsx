// Contact pages
import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../css/contact.css";

function Contact() {
	const form = useRef();
	const [showModal, setShowModal] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_n3ecmrk",
				"template_2c9ytgc",
				form.current,
				"R9G3_YaKuPWqzFH1J"
			)
			.then(
				(result) => {
					console.log(result.text);
					setShowModal(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	const handleClose = () => {
		setShowModal(false);
	};

	return (
		<div className="container-fluid bg-dark text-white min-vh-100 d-flex align-items-center">
			<div className="container col-xxl-8">
				<div className="row">
					<div className="col-md-6 mx-auto my-4 px-3">
						<h2>Get In Touch</h2>
						{/* CV */}
						<p className="lead">
							You can check out my detailed information by downloading my CV (PDF)
						</p>
						<div className="d-flex btnRow">
							<button className="btn btn-lg btn-outline-light f  w-light border-white my-2">
								<a
									href="https://drive.google.com/drive/folders/1KJek4wU1VGR8DmHWusPScNDW-OwpuI8N?usp=sharing"
									target="_blank"
								>
									Download CV
								</a>
							</button>
						</div>
						<div className="line bg-light"></div>

						{/* Other */}
						<p className="lead">
							Feel free to contact me, I'm looking forward to hear from you.
						</p>
						<ul className="unstyle">
							<li>
								<FontAwesomeIcon icon={faLinkedin} />
								<a
									href="https://www.linkedin.com/in/celiacyy/"
									target="_blank"
									rel="noopener noreferrer"
									className="icon-link"
								>
									Connect LinkedIn
								</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faEnvelope} />
								<a
									href="mailto:celiayych@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
									className="icon-link"
								>
									Send Email
								</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faGithub} />
								<a
									href="https://github.com/celia103"
									target="_blank"
									rel="noopener noreferrer"
									className="icon-link"
								>
									Visit GitHub
								</a>
							</li>
						</ul>

						<div className="line bg-light"></div>
					</div>

					{/* <!-- Contact form --> */}
					<div className="col-md-6 mx-auto my-4 px-3">
						<div className="col align-self-center">
							<h2>Contact Form</h2>
							<p className="lead">
								Thank you for considering my profile. I am excited about the opportunity
								to discuss how I can contribute my skills and enthusiasm to your
								organization.
							</p>
							{/* <!-- form --> */}
							<form ref={form} onSubmit={sendEmail}>
								{/* <!-- name --> */}
								<div className="form-group">
									<label htmlFor="name">Name</label>
									<input
										type="name"
										name="name"
										className="form-control"
										id="name"
										placeholder="Enter your name"
									/>
								</div>

								{/* <!-- email --> */}
								<div className="form-group">
									<label htmlFor="email">Email address</label>
									<input
										type="email"
										name="email"
										className="form-control"
										id="email"
										placeholder="Enter your email"
									/>
								</div>

								{/* <!-- subject --> */}
								<div className="form-group">
									<label htmlFor="subject">Subject</label>
									<input
										type="text"
										name="subject"
										className="form-control"
										id="subject"
										placeholder="Enter email subject"
									/>
								</div>

								<div className="form-group">
									<label htmlFor="email_body">Message</label>
									<textarea
										className="form-control"
										id="email_body"
										name="message"
										rows="5"
									></textarea>
								</div>

								<div className="d-flex btnRow">
									<button
										type="submit"
										className="btn btn-lg btn-outline-light fw-light border-white mt-4"
									>
										Submit
									</button>
								</div>
							</form>

							{/* Successful message modal */}
							<Modal show={showModal} onHide={handleClose}>
								<Modal.Header closeButton>
									<Modal.Title>Success!</Modal.Title>
								</Modal.Header>
								<Modal.Body>Your message has been sent successfully!</Modal.Body>
								<Modal.Footer>
									<Button variant="dark" onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
