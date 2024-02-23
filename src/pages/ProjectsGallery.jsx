//Project Page
import React from "react";
import Project from "../components/Project";
import projects from "../data/projects.json";

function ProjectsGallery() {
	return (
		<div className="container-fluid bg-dark text-light">
      <div className="container col-xxl-8">
			{/* Banner Section */}
			<div className="text-center p-5">
				<h2 className="display-5 fw-bold">Web Development Works</h2>
				<p className="lead mb-2">
					Explore my web development journey through hands-on projects that mark my
					ongoing learning journey, shaped through bootcamp experiences and personal
					study challenges. These projects reflect my journey in HTML, CSS,
					JavaScript, and React.js, showcasing responsive designs and dynamic user
					interfaces. For a closer look, welcome to explore the associated GitHub
					repositories / CodePen.
				</p>
			</div>
			<hr className="my-5" />

			{/* Projects Section */}
			<div className="container-fluid bg-dark text-white min-vh-100">
				{projects.map((project) => (
					<div key={project.id} className="row">
						<Project
							title={project.title}
							description={project.description}
							screenshot={project.screenshot}
							deployLink={project.deployLink}
							repoLink={project.repoLink}
              codePen={project.codePen}
							video={project.video}							
						/>
						<hr className="my-5" />
					</div>
				))}
			</div>
      </div>
		</div>
	);
}

export default ProjectsGallery;
