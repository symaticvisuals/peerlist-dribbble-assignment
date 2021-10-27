import Image from "next/image";
function Card(props) {
	return (
		<div className='mb-6'>
			<div className='h-auto max-w-lg rounded-lg border-2 pb-3 ml-3 mr-3 cursor-pointer'>
				<img
					src='https://cdn.dribbble.com/users/123819/screenshots/4119299/media/5cad3811094913554f9022dd415a3d4e.gif'
					alt=''
					className='object-cover h-full w-full'
				/>
				<h1 className='pl-3 pt-3 font-display font-semibold'>
					Valley - Web Design for Eco Products
				</h1>
			</div>
		</div>
	);
}
export default Card;
