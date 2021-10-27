import React from "react";
import Image from "next/image";
function Topbar() {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center ml-3'>
				<Image
					src='https://cdn.worldvectorlogo.com/logos/dribbble-4.svg'
					alt='Picture of the author'
					width={100}
					height={100}
				></Image>

				<h3 className='ml-6 font-display font-regular underline text-gray-500'>
					Remove Account
				</h3>
			</div>
			<div className='font-display p-2 bg-gray-100 rounded-sm mr-3'>
				<h5 className='font-semibold text-gray-500'>
					https://dribbble.com/ms_yogii
				</h5>
			</div>
		</div>
	);
}

export default Topbar;
