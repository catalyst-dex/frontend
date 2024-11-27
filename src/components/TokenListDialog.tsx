"use client";

import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronDown, Search, X } from "lucide-react";
import { useRef } from "react";
import { showToast } from "@/lib/utils";

const cryptoData = [
	{
		id: 1,
		name: "Wrapped SOL",
		symbol: "SOL",
		icon: "/coins/sol.svg",
		price: 250.51,
		volume24h: "831.19K",
		tvl: "21.93K",
	},
	{
		id: 2,
		name: "USD Coin",
		symbol: "USDC",
		icon: "/coins/usdc.svg",
		price: 0.999,
		volume24h: "739.76K",
		tvl: "183.79K",
	},
	{
		id: 3,
		name: "Bnb",
		symbol: "bnb",
		icon: "/coins/bnb.svg",
		price: 4.0784,
		volume24h: "193.41K",
		tvl: "33.36K",
	},
	{
		id: 4,
		name: "USDT",
		symbol: "USDT",
		icon: "/coins/usdt.svg",
		price: 1.00142,
		volume24h: "70.20K",
		tvl: "126.847",
	},
	{
		id: 2,
		name: "USD Coin",
		symbol: "USDC",
		icon: "/coins/usdc.svg",
		price: 0.999,
		volume24h: "739.76K",
		tvl: "183.79K",
	},
	{
		id: 3,
		name: "Bnb",
		symbol: "bnb",
		icon: "/coins/bnb.svg",
		price: 4.0784,
		volume24h: "193.41K",
		tvl: "33.36K",
	},
	{
		id: 4,
		name: "USDT",
		symbol: "USDT",
		icon: "/coins/usdt.svg",
		price: 1.00142,
		volume24h: "70.20K",
		tvl: "126.847",
	},
	{
		id: 4,
		name: "USDT",
		symbol: "USDT",
		icon: "/coins/usdt.svg",
		price: 1.00142,
		volume24h: "70.20K",
		tvl: "126.847",
	},
];
type TokenListDialogProps = {
	coin: string;
	diabled?: boolean;
	setSelectedToken: (value: string) => void;
};
function TokenListDialog(props: TokenListDialogProps) {
	const elementRef = useRef<HTMLButtonElement>(null);
	const handleTokenSelect = (token: string) => {
		props.setSelectedToken(token);
		elementRef.current?.click();
		console.log("did something");
		showToast.success("Chaged");
	};
	return (
		<Dialog>
			<DialogTrigger disabled={props.diabled}>
				<div className=' px-1 flex items-center gap-1 border border-[#5c5c5c7d] rounded-[2rem] bg-black pr-2 py-1'>
					<Image
						src={`/coins/${props.coin}.svg`}
						alt={props.coin}
						width={37}
						height={37}
					/>
					<p className='uppercase text-gray-300'>{props.coin}</p>
					<ChevronDown
						className='w-[3.6rem] '
						strokeWidth={1}
					/>
				</div>
			</DialogTrigger>
			<DialogContent className='bg-zinc-900 h-[70%] items-start  w-[28%] border border-zinc-600 rounded-[.4rem]'>
				<div className='text-zinc-300 font-grotesk text-[1.2rem] mb-2'>
					<div className='flex justify-between items-center'>
						<DialogTitle className='font-manrope text-xl'>
							Select A Token
						</DialogTitle>
						<DialogPrimitive.Close
							ref={elementRef}
							className='bg-[#e4e4e74e] rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground p-1'>
							<X className='h-7  w-7 text-zinc-900' />
							<span className='sr-only'>Close</span>
						</DialogPrimitive.Close>
					</div>

					<div className='flex items-center gap-2 h-[2.9rem] bg-[#09090bda] border border-[#48484884] px-2 w-full rounded-[.8rem] mt-4'>
						<Search className='w-6 h-6 text-gray-400 block' />
						<input
							type='text'
							placeholder='Search token'
							className='bg-transparent w-full focus:outline-none text-[1.2rem] placeholder:opacity-55'
						/>
					</div>
				</div>
				<div className='overflow-y-scroll  h-full'>
					{cryptoData.map((token, index) => (
						<div
							key={index}
							className='flex items-center gap-3 hover:bg-zinc-800 cursor-pointer p-3 rounded-lg'
							onClick={() => handleTokenSelect(token.symbol)}>
							<Image
								src={token.icon}
								alt='ALI'
								width={40}
								height={40}
							/>

							<div>
								<p className='text-[1rem] text-zinc-400 uppercase'>
									{token.symbol}
								</p>
								<p className='text-[.75rem] text-muted-foreground'>
									{token.name}
								</p>
							</div>
						</div>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
}
export default TokenListDialog;
