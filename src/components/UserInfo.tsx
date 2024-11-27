import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { generateRandomPublicKey, shortenAddress } from "@/lib/utils";

import { useWallet } from "@solana/wallet-adapter-react";
import { Copy, LogOut, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Image from "next/image";

const UserInfo = () => {
	const { disconnect, publicKey } = useWallet();

	return (
		<Dialog>
			<DialogTrigger className='w-full max-w-[150px] bg-zinc-800 px-5 py-3 rounded-[.8rem] text-sm'>
				{shortenAddress(publicKey?.toBase58() || "", 4)}
			</DialogTrigger>
			<DialogContent className='bg-zinc-900  items-start min-w-[25rem]  w-[22%] border border-[#b23b4b48] rounded-[.4rem]'>
				<DialogHeader>
					<div className='flex justify-between items-center'>
						<DialogTitle className='font-manrope text-xl'>
							{/* Select A Token */}
						</DialogTitle>
						<DialogPrimitive.Close className='bg-[#e4e4e7b3] rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground p-1'>
							<X className='h-4  w-4 text-zinc-900' />
							<span className='sr-only'>Close</span>
						</DialogPrimitive.Close>
					</div>
					<div className='mx-auto '>
						<Image
							src='/avatar/avatar-2.svg'
							alt='avatar'
							width={90}
							height={90}
						/>
					</div>
					<h1 className='font-grotesk text-zinc-200 font-semibold  text-center text-[1.3rem] mt-7'>
						{shortenAddress(publicKey?.toBase58() || "", 4)}
					</h1>
				</DialogHeader>
				<div className='flex justify-center items-center [&>button]:bg-zinc-800 text-zinc-400 gap-5 [&>button]:w-1/2 [&>button]:h-[4rem] text-center'>
					<button
						className='rounded-[.9rem]'
						onClick={generateRandomPublicKey}>
						<Copy className='w-5 mx-auto' />
						<p className='test-sm'>Copy address</p>
					</button>
					<button className='rounded-[.9rem]'>
						<LogOut className='w-5 mx-auto' />
						<p className='text-sm'>Disconnect</p>
					</button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

// Public key: EsAY88hRNxEVekB1bNjhCpSkABPj8FG5eheg1E8kXgGw
// utils.ts:36 Public key: Efkqdtkcz7oVuS9ihZZZofKp5mZvmsnWBAsyTJN7zDAh
// utils.ts:36 Public key: 8SjCtV9AtZsTv9Sc2TJ4udkQR41XXfxVEJMd4ai4UWS1

export default UserInfo;
