"use client";

import useNewToken from "@/hooks/useNewToken";
import html2canvas from "html2canvas";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { showToast } from "@/lib/utils";

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
	const { setTokenDetails, tokenDetails } = useNewToken();
	const [selectedImage, setSelectedImage] = useState("second");
	const [upLoadedImage, setUploadedImage] = useState<File | null>(null);
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		async function getCurrentImageBlob() {
			const imageElement = document.getElementById("second")!;

			const canvas = await html2canvas(imageElement, {
				useCORS: true,
				scale: 2,
				logging: false,
			});
			// Convert canvas to blob
			const blob = await new Promise((resolve) => {
				canvas.toBlob(resolve, "image/png", 1.0);
			});
			if (!blob) return showToast.error("Internal server error");

			return setTokenDetails({ image: blob as Blob });
		}
		getCurrentImageBlob();
	}, []);

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files![0];
		if (file) {
			// Handle the uploaded image file (e.g., preview, upload to a server, etc.)
			console.log("Uploaded file:", file);
			setUploadedImage(file);
			setHidden(true);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { value, name } = e.currentTarget;
		setTokenDetails({ [name]: value });
		console.log(tokenDetails);
	};

	const removeUploadedImage = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.stopPropagation();
		setUploadedImage(null);
		if (selectedImage == "sixth") {
			setSelectedImage("first");
		}
		setHidden(false);
	};

	const handleImageSelect = async (e: React.MouseEvent<HTMLDivElement>) => {
		setSelectedImage(e.currentTarget.id);
		const imageElement = document.getElementById(e.currentTarget.id)!;
		if (!imageElement) return;

		if (e.currentTarget.id !== "sixth") {
			const canvas = await html2canvas(imageElement, {
				useCORS: true,
				scale: 2,
				logging: false,
			});
			// Convert canvas to blob
			const blob = await new Promise((resolve) => {
				canvas.toBlob(resolve, "image/png", 1.0);
			});
			if (!blob) return showToast.error("Internal server error");

			return setTokenDetails({ image: blob as Blob });
		}
		if (!upLoadedImage) return showToast.error("Select an Image");

		setTokenDetails({ image: upLoadedImage });
	};

	return (
		<div className='bg-[#121212] p-8 rounded-[.9rem] w-full mx-auto'>
			<div className='grid grid-cols-2 gap-6 w-[80%]'>
				<div
					id='first'
					onClick={handleImageSelect}
					className={`${
						selectedImage == "first"
							? "bg-zinc-800   rounded-xl"
							: ""
					} p-2 hover:bg-zinc-800 w-fit rounded-xl active:bg-zinc-700 cursor-pointer
					`}>
					<TokenIcon color='blue' />
				</div>
				<div
					id='second'
					onClick={handleImageSelect}
					className={`${
						selectedImage == "second"
							? "bg-zinc-800   rounded-xl"
							: ""
					} p-2 hover:bg-zinc-800 w-fit rounded-xl active:bg-zinc-700 cursor-pointer
					`}>
					<TokenIcon color='yellow' />
				</div>
				<div
					id='third'
					onClick={handleImageSelect}
					className={`${
						selectedImage == "third"
							? "bg-zinc-800   rounded-xl"
							: ""
					} p-2 hover:bg-zinc-800 w-fit rounded-xl active:bg-zinc-700 cursor-pointer
					`}>
					<TokenIcon color='#b23b4b' />
				</div>
				<div
					id='fourth'
					onClick={handleImageSelect}
					className={`${
						selectedImage == "fourth"
							? "bg-zinc-800   rounded-xl"
							: ""
					} p-2 hover:bg-zinc-800 w-fit rounded-xl active:bg-zinc-700 cursor-pointer
					`}>
					<TokenIcon color='green' />
				</div>
				<div
					id='fifth'
					onClick={handleImageSelect}
					className={`${
						selectedImage == "fifth"
							? "bg-zinc-800   rounded-xl"
							: ""
					} p-2 hover:bg-zinc-800 w-fit rounded-xl active:bg-zinc-700 cursor-pointer
					`}>
					<TokenIcon color='violet' />
				</div>
				{upLoadedImage && (
					<div
						id='sixth'
						onClick={handleImageSelect}
						className={`${
							selectedImage == "sixth"
								? "bg-zinc-800   rounded-xl"
								: ""
						} p-2 hover:bg-zinc-800 w-fit rounded-xl active:bg-zinc-700 cursor-pointer relative
					`}>
						<Image
							src={URL.createObjectURL(upLoadedImage)}
							alt=''
							width={48}
							height={55}
							className='object-cover w-[3rem] h-[3rem]'
						/>
						<span
							onClick={removeUploadedImage}
							className='cursor-pointer absolute top-0 left-0 bg-[#e4e4e7b3] rounded-full  ring-offset-background transition-opacity hover:opacity-100 focus:outline-none  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground p-1'>
							<X className='h-4  w-4 text-zinc-900' />
							<span className='sr-only'>Close</span>
						</span>
					</div>
				)}
				<div
					className={`${
						hidden && "hidden"
					}  flex justify-center items-center w-[3.8rem] h-[3.5rem] bg-zinc-700 cursor-pointer relative rounded-[.6rem]`}>
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
					onChange={handleChange}
					name='description'
					required
					value={tokenDetails?.description}
					placeholder='Tell us something about your token...'
				/>
			</div>

			<div className='mt-8'>
				<p className='text-gray-400 font-medium mb-2'>Website</p>
				<input
					type='text'
					className='bg-[#1F1F1F] text-gray-400 px-4 py-2 w-full h-16 rounded-[.8rem] border-none outline-none focus:outline-app-primary focus:border-app-primary'
					name='website'
					onChange={handleChange}
					value={tokenDetails?.website}
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
					value={tokenDetails?.twitter}
					onChange={handleChange}
					name='twitter'
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
					onChange={handleChange}
					value={tokenDetails?.telegram}
					name='telegram'
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
					onChange={handleChange}
					value={tokenDetails?.discord}
					name='discord'
					className='rounded-[.8rem] bg-[#1F1F1F] text-gray-400 px-4 py-2 w-full h-16 border-none outline-none focus:outline-app-primary focus:border-app-primary'
					placeholder='Discord'
				/>
			</div>
		</div>
	);
};

export default TokenDetailsUI;
