//NavBar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
	const [expanded, setExpanded] = useState(false);

	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="p-2">
			<div className="container">
				<Navbar.Brand
					as={Link}
					to="/"
					className="d-flex align-items-center mb-0 mb-lg-0 text-white text-decoration-none"
				>
					<img
						src={logo}
						className="img-fluid"
						alt="Logo"
						style={{ marginRight: "10px", maxWidth: "150px" }}
					/>
				</Navbar.Brand>

				<Navbar.Toggle
					aria-controls="navbar-nav"
					onClick={() => setExpanded(!expanded)}
				/>

				<Navbar.Collapse id="navbar-nav" className="justify-content-end">
					<Nav className="mr-auto">
						<Nav.Link as={Link} to="/" className="nav-link text-white">
							Home
						</Nav.Link>
						<Nav.Link
							as={Link}
							to="/projects-gallery"
							className="nav-link text-white"
						>
							Web Projects
						</Nav.Link>
						<Nav.Link as={Link} to="/design-gallery" className="nav-link text-white">
							Design
						</Nav.Link>
						<Nav.Link as={Link} to="/contact" className="nav-link text-white">
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default NavBar;
