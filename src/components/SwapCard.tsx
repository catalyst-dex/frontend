"use client";

import { ArrowDown, SlidersHorizontal } from "lucide-react";

import TokenListDialog from "./TokenListDialog";
import useSwapToken, { CryptoData } from "@/hooks/useSwapToken";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";

import { getSOLBalance, getTokenBalances, showToast } from "@/lib/utils";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";

// const coins = ["usdt", "usdc", "btc", "eth", "bnb", "sol"];

type CoinInputProps = {
	coin: CryptoData;
	className?: string;
	title?: string;
	disabled?: boolean;
	availableAmount: number;
	setSelectedToken: (
		value: CryptoData
	) => void | React.Dispatch<React.SetStateAction<string>>;
};

export const CoinInput = (props: CoinInputProps) => {
	return (
		<div className={props.className}>
			<p className='text-sm text-gray-500 mb-4'>{props.title}</p>
			<div className='border border-[#46464690] bg-[#181818] rounded-[1rem] p-4'>
				<div className='flex items-center gap-2 justify-between h-20'>
					<input
						type='number'
						className='font-grotesk bg-transparent w-full border-none outline-none focus:outline-none focus:border-none text-3xl text-gray-200'
						placeholder='0'
					/>
					<TokenListDialog
						setSelectedToken={props.setSelectedToken}
						coin={props.coin}
					/>
				</div>
				<div className='flex items-center justify-between text-sm text-gray-400'>
					<p>$3.22</p>
					<div>
						Balance:{" "}
						<button className='text-app-primary text-semibold'>
							Max
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

function SwapCard() {
	const { setTokenToPay, setTokenToReceive, tokenToPay, tokenToRecieve } =
		useSwapToken();

	const [solBalance, setSolBalance] = useState(0);

	const { publicKey } = useWallet();

	const switchTokens = () => {
		setTokenToPay(tokenToRecieve);
		setTokenToReceive(tokenToPay);
	};

	const swapToken = () => {
		showToast.loading("Initiating swap");
		setTimeout(() => showToast.error("An error occurred"), 4000);
	};

	useEffect(() => {
		const fetchBalances = async () => {
			if (!publicKey) return;
			const connection = new Connection(
				"https://rpc.devnet.soo.network/rpc",
				"confirmed"
			);
			const newPublicKey = new PublicKey(publicKey?.toString());
			const solBalance = await getSOLBalance(connection, newPublicKey);
			setSolBalance(solBalance || 0);
			await getTokenBalances(connection, newPublicKey);
		};
		fetchBalances();
	}, [publicKey]);

	return (
		<article className='w-[40%] border border-[#b23b4b5c] min-w-[32rem] rounded-[1rem] mx-auto mt-14 p-6 bg-[#0f0f0ff0] '>
			<div className='flex items-center justify-between text-sm text-gray-400 mb-7'>
				<p className='font-glyphic font-semibold text-[#cdcdcd] text-lg'>
					Exchange
				</p>
				<span className='flex justify-center items-center cursor-pointer rounded-full p-2 hover:bg-zinc-900'>
					{" "}
					<SlidersHorizontal className='w-[22px] h-[22px] text-zinc-400' />
				</span>
			</div>
			<div>
				<div className='relative mb-16'>
					<CoinInput
						coin={tokenToPay}
						title='You pay'
						setSelectedToken={setTokenToPay}
						availableAmount={solBalance}
					/>
					<div
						onClick={switchTokens}
						className='cursor-pointer absolute -bottom-5 left-1/2  -translate-x-1/2 translate-y-full  flex items-center justify-center  bg-[#181818] border border-[#5c5c5c7d] w-fit p-4 rounded-[.8rem]'>
						<ArrowDown className='text-gray-500' />
					</div>
				</div>
				<CoinInput
					coin={tokenToRecieve}
					title='You receive'
					setSelectedToken={setTokenToReceive}
					availableAmount={solBalance}
				/>
			</div>
			<button
				onClick={swapToken}
				className='active:brightness-90 bg-app-primary w-full rounded-[1rem] py-4 mt-6'>
				Swap
			</button>
		</article>
	);
}
export default SwapCard;

// export function CoinSelect() {
// 	return (
// 		<Select defaultValue={coins[0]}>
// 			<SelectTrigger className=''>
// 				<SelectValue />
// 			</SelectTrigger>
// 			<SelectContent>
// 				{coins.map((coin) => (
// 					<SelectItem
// 						value={coin}
// 						key={coin}>
// 						<div className='flex items-center gap-2'>
// 							<Image
// 								src={`/coins/${coin}.svg`}
// 								alt={coin}
// 								width={20}
// 								height={20}
// 							/>
// 							<span>{coin}</span>
// 						</div>
// 					</SelectItem>
// 				))}
// 			</SelectContent>
// 		</Select>
// 	);
// }
