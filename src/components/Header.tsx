import Image from "next/image";
import { Settings, History } from "lucide-react";
import Link from "next/link";
import { ConnectWalletButton } from "./ConnectWalletButton";

function Header() {
	return (
		<header className='flex justify-between items-center h-[10vh] relative'>
			<div className='flex items-center gap-3 '>
				<Image
					src='/logo.svg'
					alt='Catalyst Logo'
					width={70}
					height={70}
				/>
				<p className='text-gray-200 font-glyphic font-bold text-xl'>
					Catalyst
				</p>
			</div>
			<div className='flex items-center gap-8 text-sm text-gray-400 absolute left-1/2 -translate-x-1/2'>
				<Link href='/exchange'>Exchange</Link>
				<Link href='/liquidity'>Liquidity</Link>
				<Link href='/statistics'>Statistics</Link>
				<Link href='/creator'>Creator</Link>
			</div>
			<div className='gap-3 flex items-center'>
				<Link
					href='/history'
					className='flex justify-center items-center cursor-pointer rounded-full p-2 hover:bg-zinc-900'>
					{" "}
					<History className='w-[25px] h-[25px] text-zinc-400' />
				</Link>
				{/* <span className='flex justify-center items-center  cursor-pointer rounded-full p-2 hover:bg-zinc-900'>
					{" "}
					<Settings className='w-[25px] h-[25px] text-zinc-400' />
				</span> */}

				<ConnectWalletButton />
			</div>
		</header>
	);
}
export default Header;
