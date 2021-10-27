import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Posts from "../../components/Posts";
import Topbar from "../../components/Topbar";
function Profile() {
	const router = useRouter();

	return (
		<div className='max-w-screen-lg  h-screen m-auto'>
			<Topbar />
			<Posts />
		</div>
	);
}
export default Profile;
