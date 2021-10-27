import React from "react";
import Card from "./Card";
function Posts() {
	return (
		<div className=' grid grid-cols-1 sm:grid-cols-2 mt-10'>
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}

export default Posts;
