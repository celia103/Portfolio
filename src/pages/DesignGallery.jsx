// DesignGallery.jsx
import React, { useState } from "react";
import { Modal, Button, Container, Col, Row } from "react-bootstrap";
import Design from "../components/Design.jsx";
import SEO from "../components/SEO";
import designs from "../data/designs.json";
import "../css/design.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function DesignGallery() {
	const [showModal, setShowModal] = useState(false);
	const [selectedDesignIndex, setSelectedDesignIndex] = useState(0);

	const handleCloseModal = () => setShowModal(false);
	const handleShowModal = (index) => {
		setSelectedDesignIndex(index);
		setShowModal(true);
	};

	const handlePrevDesign = () => {
		setSelectedDesignIndex((prevIndex) =>
			prevIndex === 0 ? designs.length - 1 : prevIndex - 1
		);
	};

	const handleNextDesign = () => {
		setSelectedDesignIndex((prevIndex) =>
			prevIndex === designs.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="container-fluid bg-dark text-light">
			<SEO
				title="Celia's Portfolio"
				name="Celia"
				description="This page serves as a showcase of my growth in graphic design and illustration. Each experience has taught me valuable lessons and helped me refine my craft and approach."
				keywords="graphic design, web design, web development, portolio, freelance designer, illustration, illustrator, freelancer, HK freelance designer, UK freelance designer, 平面設計, 插圖, Celia Chan"
				type="website"
			/>
			<div className="container col-xxl-8">
				{/* Banner Section */}
				<div className="px-3 py-4">
					<h2 className="text-center">Design Works</h2>
					<p className="lead mb-2">
						Over the past 10+ years, I have embarked on a journey filled with
						collaboration and adventure. I have had the opportunity to work with
						diverse clients from various industries. This page serves as a showcase of
						my growth in graphic design and illustration. Each experience has taught
						me valuable lessons and helped me refine my craft and approach.
					</p>
				</div>
				<hr className="my-4" />

				{/* Projects Section */}
				<div className="container-fluid">
					<Row className="d-flex row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
						{designs.map((design, index) => (
							<div key={design.id} className="col p-1 mb-2">
								<div
									variant="link"
									className="w-100"
									onClick={() => handleShowModal(index)}
								>
									<Design
										work={design.workImg1}
										title={design.title}
										type={design.type}
									/>
								</div>
							</div>
						))}
					</Row>
				</div>

				{/* Modal */}
				<Modal
					show={showModal}
					onHide={handleCloseModal}
					dialogClassName="modal-size"
					centered
				>
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body>
						<Container className="artwork-modal-container">
							<div className="mt-4">
								{designs[selectedDesignIndex].workImg1 && (
									<Row>
										{
											// Determine column size based on the existence of workImg5
											designs[selectedDesignIndex].workImg5 ? (
												<>
													<Col xs={12} xxl={12}>
														<img
															src={designs[selectedDesignIndex].workImg1}
															alt={designs[selectedDesignIndex].title}
															className="img-fluid mb-3"
														/>
													</Col>
													<Col xs={12} md={6} xxl={4}>
														<img
															src={designs[selectedDesignIndex].workImg2}
															alt={designs[selectedDesignIndex].title}
															className="img-fluid mb-3 modal-img"
														/>
													</Col>
													<Col xs={12} md={6} xxl={4}>
														<img
															src={designs[selectedDesignIndex].workImg3}
															alt={designs[selectedDesignIndex].title}
															className="img-fluid mb-3 modal-img"
														/>
													</Col>
													<Col xs={12} md={6} xxl={4}>
														<img
															src={designs[selectedDesignIndex].workImg4}
															alt={designs[selectedDesignIndex].title}
															className="img-fluid mb-3 modal-img"
														/>
													</Col>
													<Col xs={12} md={6} xxl={12}>
														<img
															src={designs[selectedDesignIndex].workImg5}
															alt={designs[selectedDesignIndex].title}
															className="img-fluid mb-3 modal-img5"
														/>
													</Col>
												</>
											) : // Determine column size based on the existence of workImg4
											designs[selectedDesignIndex].workImg4 ? (
												<>
													<Col xs={12} xl={12}>
														<img
															src={designs[selectedDesignIndex].workImg1}
															alt={designs[selectedDesignIndex].title}
															className="img-fluid mb-3"
														/>
													</Col>
													<Col xs={12} xl={6}>
														<img
															src={designs[selectedDesignIndex].workImg2}
															alt={designs[selectedDesignIndex].title}
															className="img-fluid mb-3 modal-img"
														/>
													</Col>
													<Col xs={12} xl={6}>
														<img
															src={designs[selectedDesignIndex].workImg3}
															alt={designs[selectedDesignIndex].title}
															className="img-fluid mb-3 modal-img"
														/>
													</Col>
													<Col xs={12} xl={12}>
														<img
															src={designs[selectedDesignIndex].workImg4}
															alt={designs[selectedDesignIndex].title}
															className="img-fluib-3"
														/>
													</Col>
												</>
											) : // Determine column size based on the existence of workImg3
											designs[selectedDesignIndex].workImg3 ? (
												<>
													<Col xs={12} xxl={12}>
														<img
															src={designs[selectedDesignIndex].workImg1}
															alt={designs[selectedDesignIndex].title}
															className="img-fluid mb-3"
														/>
													</Col>
													<Col xs={6} xxl={6}>
														<img
															src={designs[selectedDesignIndex].workImg2}
															alt={designs[selectedDesignIndex].title}
															className="img-fluid mb-3"
														/>
													</Col>
													<Col xs={6} xxl={6}>
														<img
															src={designs[selectedDesignIndex].workImg3}
															alt={designs[selectedDesignIndex].title}
															className="img-fluid mb-3"
														/>
													</Col>
												</>
											) : // Determine column size based on the existence of workImg2
											designs[selectedDesignIndex].workImg2 ? (
												<>
													<Col xs={12} xxl={6}>
														<img
															src={designs[selectedDesignIndex].workImg1}
															alt={designs[selectedDesignIndex].title}
															className="img-fluid mb-3"
														/>
													</Col>
													<Col xs={12} xxl={6}>
														<img
															src={designs[selectedDesignIndex].workImg2}
															alt={designs[selectedDesignIndex].title}
															className="img-fluid mb-3"
														/>
													</Col>
												</>
											) : (
												<Col xs={12} xxl={12}>
													<img
														src={designs[selectedDesignIndex].workImg1}
														alt={designs[selectedDesignIndex].title}
														className="img-fluid mb-3"
													/>
												</Col>
											)
										}
									</Row>
								)}
							</div>

							<Row className="mb-3">
								<h4 className="artwork-card-subtitle">
									{designs[selectedDesignIndex].title}
								</h4>
							</Row>
							<Row>
								<Col xs={12} md={6}>
									<h5 className="mb-2 artwork-card-subtitle">Types</h5>
									<p>
										{designs[selectedDesignIndex].category} <br />
										{designs[selectedDesignIndex].type}
									</p>
								</Col>
								<Col xs={12} md={6}>
									<h5 className="mb-2 artwork-card-subtitle">Work About</h5>
									<p>{designs[selectedDesignIndex].description}</p>
									<p className="remark">{designs[selectedDesignIndex].remark}</p>
								</Col>
							</Row>
						</Container>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handlePrevDesign}>
							<FontAwesomeIcon icon={faAngleLeft} />
						</Button>
						<Button variant="secondary" onClick={handleNextDesign}>
							<FontAwesomeIcon icon={faAngleRight} />
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</div>
	);
}

export default DesignGallery;
