// DesignGallery.jsx

// Fix Lightbox issue
window.global = window;

import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import Design from "../components/Design.jsx";
import SEO from "../components/SEO";
import "react-18-image-lightbox/style.css";
import designs from "../data/designs.json";
import "../css/design.css";

function DesignGallery() {
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="container-fluid bg-dark text-light content">
			<SEO
				title="Celia's Portfolio"
				name="Celia"
				description="This page serves as a showcase of
						my growth in graphic design and illustration. Each experience has taught
						me valuable lessons and helped me refine my craft and approach."
				keywords="graphic design, web design, web development, portolio, freelance designer, illustration, illustrator, freelancer, HK freelance designer, UK freelance designer, 平面設計, 插圖, Celia Chan"
				type="website"
			/>
			<div className="container col-xxl-8">
				{/* Banner Section */}
				<div className="text-center p-5">
					<h2 className="display-5 fw-bold">Design Works</h2>
					<p className="lead mb-2">
						Over the past 10+ years, I have embarked on a journey filled with
						collaboration and adventure. I have had the opportunity to work with
						diverse clients from various industries. This page serves as a showcase of
						my growth in graphic design and illustration. Each experience has taught
						me valuable lessons and helped me refine my craft and approach.
					</p>
				</div>
				<hr className="my-5" />

				{/* Projects Section */}
				<div className="row justify-content-center">
					<div className="col-10">
						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 align-items-center">
							{designs.map((design, index) => (
								<div key={design.id} className="col p-1">
									<button
										type="button"
										className="btn btn-link w-100"
										onClick={() => {
											setPhotoIndex(index);
											setIsOpen(true);
										}}
										// autoComplete="off"
									>
										<Design
											work={design.work}
											title={design.title}
											description={design.description}
										/>
									</button>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Lightbox */}
				{isOpen && (
					<Lightbox
						mainSrc={designs[photoIndex].work}
						nextSrc={designs[(photoIndex + 1) % designs.length].work}
						prevSrc={designs[(photoIndex + designs.length - 1) % designs.length].work}
						onCloseRequest={() => setIsOpen(false)}
						onMovePrevRequest={() =>
							setPhotoIndex((photoIndex + designs.length - 1) % designs.length)
						}
						onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % designs.length)}
						className="custom-lightbox"
					/>
				)}
			</div>
		</div>
	);
}

export default DesignGallery;
