import {
	ExternalLink,
	ArrowUp,
	ArrowDown,
	Search,
	ArrowLeftRight,
	Plus,
} from "lucide-react";

import Image from "next/image";

const TopPoolTable = () => {
	const cryptoData = [
		{
			id: 11,
			name: "JitoSOL/SOL",
			symbol: "SOL",
			icon: "/coins/sol.svg",
			apy: "0.03%",
			fee: "0.3%",
			volume24h: "$0.168",
			tvl: "$364.847",
			actions: { link: true, deposit: true, withdraw: true },
		},
		{
			id: 12,
			name: "HADES/USDC",
			symbol: "USDC",
			icon: "/coins/usdc.svg",
			fee: "1%",
			volume24h: "$0",
			tvl: "$80.32K",
			actions: { link: true, deposit: true, withdraw: true },
		},
		{
			id: 13,
			name: "SNY/USDC",
			symbol: "USDC",
			icon: "/coins/usdc.svg",
			apy: "0.00%",
			fee: "0.3%",
			volume24h: "$0",
			tvl: "$13.90K",
			actions: { link: true, deposit: true, withdraw: true },
		},
		{
			id: 14,
			name: "USDC/IVN",
			symbol: "USDC",
			icon: "/coins/usdc.svg",
			fee: "0.3%",
			volume24h: "$0",
			tvl: "$7.36K",
			actions: { link: true, deposit: true, withdraw: true },
		},
		{
			id: 15,
			name: "USDC/TULIP",
			symbol: "USDC",
			icon: "/coins/usdc.svg",
			fee: "0.3%",
			volume24h: "$0",
			tvl: "$3.47K",
			actions: { link: true, deposit: true, withdraw: true },
		},
		{
			id: 16,
			name: "D8x4...Mmo5/SOL",
			symbol: "SOL",
			icon: "/coins/sol.svg",
			fee: "0.1%",
			volume24h: "$0",
			tvl: "$2.03K",
			actions: { link: true, deposit: true, withdraw: true },
		},
		{
			id: 17,
			name: "5Ytg...qXoS/USDC",
			symbol: "USDC",
			icon: "/coins/usdc.svg",
			fee: "1%",
			volume24h: "$0",
			tvl: "$700.772K",
			actions: { link: true, deposit: true, withdraw: true },
		},
		{
			id: 18,
			name: "PYTH/SOL",
			symbol: "SOL",
			icon: "/coins/sol.svg",
			fee: "0.05%",
			volume24h: "$0",
			tvl: "$507.19",
			actions: { link: true, deposit: true, withdraw: true },
		},
	];
	return (
		<div className='w-full bg-[#121212]  px-6 mb-6 pt-3 rounded-lg'>
			<div className='flex items-center justify-between text-gray-600  h-16 '>
				<p className=' text-gray-500'>Top Pool</p>
				<div className='flex items-center gap-2 h-[70%] border border-[#48484884] px-2 w-[18rem] rounded-[.8rem]'>
					<Search className='w-4 h-4 block' />
					<input
						type='text'
						placeholder='Search pool'
						className='bg-transparent w-full focus:outline-none'
					/>
				</div>
			</div>
			<table className='w-full'>
				<thead>
					<tr className='text-slate-300 text-left'>
						<th className='py-4 px-2 font-normal'>No</th>
						<th className='py-4 px-4 font-normal'>Name</th>
						<th className='py-4 px-4 font-normal'>7-days APY</th>
						<th className='py-4 px-4 font-normal'>Fee</th>
						<th className='py-4 px-4 font-normal'>Volume 24H</th>
						<th className='py-4 px-4 font-normal'>TVL</th>
						<th className='py-4 px-4 font-normal'>Action</th>
					</tr>
				</thead>
				<tbody>
					{cryptoData.map((crypto) => (
						<tr
							key={crypto.id}
							className='border-t border-[#434343c3] text-slate-300 hover:bg-slate-800/50 transition-colors'>
							<td className='py-4 px-2'>{crypto.id}</td>
							<td className='py-4 px-4'>
								<div className='flex items-center gap-2'>
									<Image
										src={crypto.icon}
										alt={crypto.symbol}
										width={20}
										height={20}
										className='w-8 h-8 rounded-full'
									/>
									<div>
										<div className='flex items-center gap-2'>
											<span className='font-medium'>
												{crypto.name}
											</span>
											<span className='text-slate-500'>
												({crypto.symbol})
											</span>
											{crypto.actions.link && (
												<ExternalLink className='w-4 h-4 text-slate-500' />
											)}
										</div>
									</div>
								</div>
							</td>
							<td className='py-4 px-4'>
								{crypto.apy ? (
									<div className='flex items-center gap-1 text-green-400'>
										<ArrowUp className='w-4 h-4' />
										{crypto.apy}
									</div>
								) : (
									<div className='flex items-center gap-1 text-red-400'>
										<ArrowDown className='w-4 h-4' />
										{crypto.fee}
									</div>
								)}
							</td>
							<td className='py-4 px-4'>{crypto.fee}</td>
							<td className='py-4 px-4'>{crypto.volume24h}</td>
							<td className='py-4 px-4'>{crypto.tvl}</td>
							<td className='py-4 px-4'>
								<div className='flex gap-2'>
									{crypto.actions.deposit && (
										<button className='p-2 hover:bg-slate-700 rounded-lg transition-colors'>
											<span className='sr-only'>
												Deposit
											</span>
											<ArrowLeftRight className='w-5 h-5 text-slate-400' />
										</button>
									)}
									{crypto.actions.withdraw && (
										<button className='p-2 hover:bg-slate-700 rounded-lg transition-colors'>
											<span className='sr-only'>
												Withdraw
											</span>
											<Plus className='w-5 h-5 text-slate-400' />
										</button>
									)}
									{crypto.actions.link && (
										<button className='p-2 hover:bg-slate-700 rounded-lg transition-colors'>
											<span className='sr-only'>
												Link
											</span>
											<ExternalLink className='w-5 h-5 text-slate-400' />
										</button>
									)}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TopPoolTable;
