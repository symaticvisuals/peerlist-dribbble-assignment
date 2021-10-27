import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState } from "react";

function Profile() {
	const router = useRouter();
	const { code } = router.query;
	const authenticateUser = useCallback(() => {
		axios
			.post(
				"https://dribbble.com/oauth/token",

				{
					headers: {
						"Content-Type": "application/json",
						"client_id": process.env.CLIENT_ID,
						"client_secret": process.env.CLIENT_SECRET,
						"code": code,
					},
				}
			)
			.then((res) => {
				localStorage.setItem("token", res.data.access_token);
				router.push("/profile");
			})
			.catch((err) => {
				console.log(err);
			});
	});
	useEffect(() => {
		authenticateUser();
	}, [code]);
	return (
		<div className='max-w-screen-lg  h-screen m-auto'>
			{/* <Topbar />
			<Posts /> */}
			Loading....
		</div>
	);
}
export default Profile;
