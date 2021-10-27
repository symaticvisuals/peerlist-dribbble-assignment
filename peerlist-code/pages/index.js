import axios from "axios";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
export default function Home() {
	const [scopeString, setScope] = React.useState("xyz");
	const router = useRouter();
	const handleClick = () => {
		router.push("/login2");
	};
	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>Peerlist Dribbble Integration</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<button className='bg-black text-white p-3 rounded' onClick={handleClick}>
				Integrate Dribbble
			</button>
		</div>
	);
}
