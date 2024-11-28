"use client";

import useNewToken from "@/hooks/useNewToken";
import { useWallet } from "@solana/wallet-adapter-react";
import { ConnectWalletButton } from "./ConnectWalletButton";
import { showToast } from "@/lib/utils";
import { createtokenWithMetaplex } from "@/lib/createTokenWithMetaplex";

const CreateTokenUI = () => {
	const { tokenDetails, setTokenDetails } = useNewToken();
	const { connected, publicKey } = useWallet();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.currentTarget;
		console.log(tokenDetails);
		console.log(Number(tokenDetails?.decimals));
		console.log(Number(tokenDetails?.supply));
		setTokenDetails({ [name]: value });
	};

	const handleSubmit = async () => {
		try {
			if (
				!tokenDetails?.name ||
				!tokenDetails?.decimals ||
				!tokenDetails?.image ||
				!tokenDetails?.symbol ||
				!tokenDetails.supply
			)
				return showToast.error("Fill all required parts");
			showToast.loading("Creating token");
			const formData = new FormData();
			formData.append("images", tokenDetails?.image, "token.png");

			// Send to backend
			const response = await fetch(
				"https://oneid-api-production.up.railway.app/api/v1/kyc/passport/upload",
				{
					method: "POST",
					body: formData,
				}
			);

			if (!response.ok) {
				showToast.error("An error occurred while uploading");
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const { data } = await response.json();
			const imageUrl = data[0];
			await createtokenWithMetaplex(
				tokenDetails?.name,
				imageUrl,
				tokenDetails?.decimals,
				tokenDetails.symbol,
				tokenDetails.supply,
				publicKey!
			);
			showToast.success("Token created successfully");
		} catch (error) {
			console.error(error);
			showToast.error("Unknown error occurred");
		}
	};
	return (
		<div className='bg-[#121212] p-8  mx-auto w-full h-fit rounded-[.9rem]'>
			<div className='mb-6'>
				<label
					htmlFor='name'
					className='block font-medium mb-2 text-gray-400'>
					Name (Max 30)*
				</label>
				<input
					id='name'
					name='name'
					required
					maxLength={30}
					value={tokenDetails?.name}
					onChange={handleChange}
					type='text'
					className='bg-[#1F1F1F] border-none outline-none focus:outline-app-primary focus:border-app-primary rounded-[.9rem] h-16 text-white  px-4 py-2 w-full'
					placeholder='Put the name of your token here'
				/>
			</div>

			<div className='mb-6'>
				<label
					htmlFor='symbol'
					className='block text-gray-400 font-medium mb-2 '>
					Symbol (Max 8)*
				</label>
				<input
					id='symbol'
					value={tokenDetails?.symbol}
					onChange={handleChange}
					maxLength={8}
					name='symbol'
					type='text'
					className='bg-[#1F1F1F] border-none outline-none focus:outline-app-primary focus:border-app-primary rounded-[.9rem] h-16 text-gray-400  px-4 py-2 w-full'
					placeholder='Put the symbol of your token here'
				/>
			</div>

			<div className='grid grid-cols-2 gap-6 mb-6'>
				<div>
					<label
						htmlFor='decimals'
						className='block text-gray-400 font-medium mb-2'>
						Decimals*
					</label>
					<input
						name='decimals'
						value={tokenDetails?.decimals}
						onChange={handleChange}
						type='number'
						className='bg-[#1F1F1F] border-none outline-none focus:outline-app-primary focus:border-app-primary rounded-[.9rem] h-16 text-gray-400  px-4 py-2 w-full'
						placeholder='Decimals between 5 and 8'
					/>
				</div>
				<div>
					<label
						htmlFor='supply'
						className='block text-gray-400 font-medium mb-2'>
						Supply*
					</label>
					<input
						name='supply'
						type='number'
						value={tokenDetails?.supply}
						onChange={handleChange}
						className='bg-[#1F1F1F] border-none outline-none focus:outline-app-primary focus:border-app-primary rounded-[.9rem] h-16 text-gray-400  px-4 py-2 w-full'
						placeholder='Supply of your token'
					/>
				</div>
			</div>

			{tokenDetails?.supply && (
				<div className='text-gray-400 text-sm mb-6'>
					Amount to mint :{" "}
					{Number(tokenDetails?.supply) /
						(1 * Math.pow(10, Number(tokenDetails?.decimals)))}
				</div>
			)}
			{!tokenDetails?.supply && (
				<div className='text-gray-400 text-sm mb-6'>
					Input token supply{" "}
				</div>
			)}
			{connected ? (
				<button
					type='button'
					onClick={handleSubmit}
					className='bg-app-primary h-14  text-white px-4 py-2 w-full rounded-[.7rem]'>
					Create Token
				</button>
			) : (
				<ConnectWalletButton className='bg-app-primary h-14  text-white px-4 py-2 w-full rounded-[.7rem]' />
			)}
		</div>
	);
};

export default CreateTokenUI;
