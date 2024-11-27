import { Copy, MoveLeft } from "lucide-react";
import Image from "next/image";

function AccountHistory() {
	return (
		<div className='w-[87%] border border-[#b84a5929] rounded-[1rem] mx-auto mt-14 p-6 bg-[#151617] min-w-[32rem]'>
			<div className='flex items-center gap-5'>
				<MoveLeft className='w-8 h-8 text-zinc-300' />
				<h2 className='font-manrope font-semibold text-lg text-zinc-300'>
					Account History
				</h2>
			</div>
			<table className='w-full border-collapse mt-4'>
				<thead className='font-manrope text-sm text-gray-400 '>
					<tr>
						<th className='p-2 py-4  text-left'>Type</th>
						<th className='p-2 py-4  text-left'>Amount</th>
						<th className='p-2 py-4  text-left'>Tx Hash</th>
						<th className='p-2 py-4  text-left'>Date</th>
						<th className='p-2 py-4  text-left'>Status</th>
					</tr>
				</thead>
				<tbody>
					{[1, 2, 3, 4].map((item, index) => (
						<tr
							className='text-gray-300'
							key={index}>
							<td className='p-2 py-4 border-t border-t-zinc-700 '>
								<div className='flex items-center'>
									<Image
										src='/coins/usdc.svg'
										alt='Bridge'
										width={1}
										height={1}
										className='w-8 h-8 mr-2'
									/>
									<Image
										src='/coins/btc.svg'
										alt='Bridge'
										height={1}
										width={1}
										className='w-8 h-8  z-10 relative right-4'
									/>
									Swap
								</div>
							</td>
							<td className='p-2 py-4 border-t border-t-zinc-700'>
								{"<0.01 ETH"}
							</td>
							<td className='p-2 py-4 border-t border-t-zinc-700'>
								<div className='flex items-center'>
									0x88c1...a531
									<Copy className='w-4 h-4 ml-2 cursor-pointer' />
								</div>
							</td>
							<td className='p-2 py-4 border-t border-t-zinc-700'>
								17/08/2024 11:23
							</td>
							<td className='p-2 py-4 border-t border-t-zinc-700 text-amber-500'>
								Waiting to finalize
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default AccountHistory;
