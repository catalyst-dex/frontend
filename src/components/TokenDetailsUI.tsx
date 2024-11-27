"use client";

import { Plus } from "lucide-react";

type TokenIconProps = {
	color: string;
};
const TokenIcon = (props: TokenIconProps) => {
	return (
		<svg
			id='logo-85'
			width='48'
			height='48'
			viewBox='0 0 40 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				className='ccustom'
				fillRule='evenodd'
				clipRule='evenodd'
				d='M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z'
				fill={props.color}></path>
		</svg>
	);
};

const TokenDetailsUI = () => {
	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files![0];
		if (file) {
			// Handle the uploaded image file (e.g., preview, upload to a server, etc.)
			console.log("Uploaded file:", file);
		}
	};

	return (
		<div className='bg-[#121212] p-8 rounded-[.9rem] w-full mx-auto'>
			<div className='grid grid-cols-2 gap-8 w-[80%]'>
				<div>
					<TokenIcon color='blue' />
				</div>
				<div>
					<TokenIcon color='yellow' />
				</div>
				<div>
					<TokenIcon color='#b23b4b' />
				</div>
				<div>
					<TokenIcon color='green' />
				</div>
				<div>
					<TokenIcon color='violet' />
				</div>
				<div className='flex justify-center items-center w-[3.8rem] h-[3.5rem] bg-zinc-700 cursor-pointer relative rounded-[.6rem]'>
					<input
						type='file'
						accept='image/*'
						onChange={handleImageUpload}
						style={{ display: "none" }}
						id='upload-button'
					/>
					<label
						htmlFor='upload-button'
						className='cursor-pointer'>
						<Plus className='text-zinc-500 w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
					</label>
				</div>
			</div>
			<div className='mt-8'>
				<p className='text-gray-400 font-medium mb-2'>Description</p>
				<textarea
					className='bg-[#1F1F1F] border-none outline-none focus:outline-app-primary focus:border-app-primary text-gray-400 rounded-[.8rem] px-4 py-2 w-full h-[9rem] resize-none'
					placeholder='Tell us something about your token...'
				/>
			</div>

			<div className='mt-8'>
				<p className='text-gray-400 font-medium mb-2'>Website</p>
				<input
					type='text'
					className='bg-[#1F1F1F] text-gray-400 px-4 py-2 w-full h-16 rounded-[.8rem] border-none outline-none focus:outline-app-primary focus:border-app-primary'
					placeholder='Website'
				/>
			</div>

			<div className='mt-6'>
				<label
					htmlFor='twitter'
					className='block text-gray-400 font-medium mb-2'>
					X (formerly Twitter)
				</label>
				<input
					id='twitter'
					type='text'
					className='rounded-[.8rem] bg-[#1F1F1F] text-gray-400 px-4 py-2 w-full h-16 border-none outline-none focus:outline-app-primary focus:border-app-primary'
					placeholder='X (formerly Twitter)'
				/>
			</div>

			<div className='mt-6'>
				<label
					htmlFor='telegram'
					className='block text-gray-400 font-medium mb-2'>
					Telegram
				</label>
				<input
					id='telegram'
					type='text'
					className='rounded-[.8rem] bg-[#1F1F1F] text-gray-400 px-4 py-2 w-full h-16 border-none outline-none focus:outline-app-primary focus:border-app-primary'
					placeholder='Telegram'
				/>
			</div>

			<div className='mt-6'>
				<label
					htmlFor='discord'
					className='block text-gray-400 font-medium mb-2'>
					Discord
				</label>
				<input
					id='discord'
					type='text'
					className='rounded-[.8rem] bg-[#1F1F1F] text-gray-400 px-4 py-2 w-full h-16 border-none outline-none focus:outline-app-primary focus:border-app-primary'
					placeholder='Discord'
				/>
			</div>
		</div>
	);
};

export default TokenDetailsUI;
