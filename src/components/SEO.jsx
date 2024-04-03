// SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

function SEO({ title, description, keywords, type, name }) {
	return (
		<Helmet>
			{/* Standard metadata tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta name="author" content="Celia Chan" />
			{/* End standard metadata tags */}
			{/* Facebook tags */}
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			{/* End Facebook tags */}
			{/* Twitter tags */}
			<meta name="twitter:creator" content={name} />
			<meta name="twitter:card" content={type} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{/* End Twitter tags */}
		</Helmet>
	);
}

export default SEO;
