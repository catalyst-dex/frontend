import { Copy, ExternalLink, Search } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";

const TopTokenTable = () => {
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
	];

	return (
		<div className='bg-[#121212] mt-8 rounded-[.9rem]'>
			<div className='flex items-center justify-between text-gray-600  h-16 px-8'>
				<p className=' text-gray-500'>Top Token</p>
				<div className='flex items-center gap-2 h-[70%] border border-[#48484884] px-2 w-[18rem] rounded-[.8rem]'>
					<Search className='w-4 h-4 block' />
					<input
						type='text'
						placeholder='Search token'
						className='bg-transparent w-full focus:outline-none'
					/>
				</div>
			</div>
			<div className='w-full  rounded-lg mb-4 px-8 pb-8'>
				<table className='w-full '>
					<thead>
						<tr className='text-slate-300 text-left px-6 '>
							<th className='py-4 px-2 font-normal'>No</th>
							<th className='py-4 px-4 font-normal'>Name</th>
							<th className='py-4 px-4 font-normal'>Price</th>
							<th className='py-4 px-4 font-normal'>
								Volume 24H
							</th>
							<th className='py-4 px-4 font-normal'>TVL</th>
							<th className='py-4 px-4 font-normal'>Action</th>
						</tr>
					</thead>
					<tbody>
						{cryptoData.map((crypto) => (
							<tr
								key={crypto.id}
								className='border-t border-[#434343c3] text-slate-300 hover:bg-slate-800/50 transition-colors px-6'>
								<td className='py-4 px-2'>{crypto.id}</td>
								<td className='py-4 px-4'>
									<div className='flex items-center gap-2'>
										<Image
											src={crypto.icon}
											alt={crypto.symbol}
											width={30}
											height={30}
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
												<Copy className='w-4 h-4 text-slate-500' />
											</div>
										</div>
									</div>
								</td>
								<td className='py-4 px-4'>
									~${crypto.price.toLocaleString()}
								</td>
								<td className='py-4 px-4'>
									${crypto.volume24h}
								</td>
								<td className='py-4 px-4'>${crypto.tvl}</td>
								<td className='py-4 px-4'>
									<button className='p-2 hover:bg-slate-700 rounded-lg transition-colors'>
										<ExternalLink className='w-5 h-5 text-slate-400' />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TopTokenTable;
