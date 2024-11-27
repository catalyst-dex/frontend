"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { ArrowLeftRight, MoveHorizontal } from "lucide-react";
import { CoinInput } from "./SwapCard";
import { useState } from "react";

const coins = ["usdt", "usdc", "btc", "eth", "bnb", "sol"];

export function CoinSelect() {
	return (
		<Select defaultValue={coins[0]}>
			<SelectTrigger className='h-full bg-zinc-800 border border-zinc-700'>
				<SelectValue />
			</SelectTrigger>
			<SelectContent className='bg-zinc-900 border-zinc-700'>
				{coins.map((coin) => (
					<SelectItem
						value={coin}
						key={coin}
						className='focus:bg-zinc-800'>
						<div className='flex items-center gap-2'>
							<Image
								src={`/coins/${coin}.svg`}
								alt={coin}
								width={30}
								height={30}
							/>
							<span className='text-gray-400 uppercase text-[1rem] font-manrope'>
								{coin}
							</span>
						</div>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}

function LiquidityCard() {
	const [firstToken, setFirstToken] = useState<string>();
	const [secondToken, setSecondToken] = useState<string>();

	return (
		<article className='w-[45%] mx-auto mt-[5rem] border border-[#5c5c5c7d] rounded-[1rem] bg-[#0f0f0ff0] p-8'>
			<h2 className='mb-5 font-manrope text-zinc-400 font-semibold text-[1.1rem]'>
				Deposit Amount
			</h2>
			<div className='flex items-center gap-8 justify-between h-[3.2rem]'>
				<CoinSelect />
				<span className='w-[8rem] h-full flex items-center justify-center p-2 bg-zinc-800 border border-zinc-700 rounded-[.9rem]'>
					<MoveHorizontal />
				</span>
				<CoinSelect />
			</div>

			<CoinInput
				className='mt-4'
				coin={coins[0]}
				setSelectedToken={setFirstToken}
			/>
			<CoinInput
				className='mt-4'
				coin={coins[0]}
				setSelectedToken={setSecondToken}
			/>
			<button className='bg-app-primary w-full rounded-[1rem] py-4 mt-6 font-grotesk text-sm'>
				Add position
			</button>
		</article>
	);
}
export default LiquidityCard;
