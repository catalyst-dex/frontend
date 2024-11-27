const CreateTokenUI = () => {
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
						id='decimals'
						type='text'
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
						id='supply'
						type='text'
						className='bg-[#1F1F1F] border-none outline-none focus:outline-app-primary focus:border-app-primary rounded-[.9rem] h-16 text-gray-400  px-4 py-2 w-full'
						placeholder='Supply of your token'
					/>
				</div>
			</div>

			<div className='text-gray-400 text-sm mb-6'>
				Token cost: ~0.0002 ETH
			</div>

			<button className='bg-app-primary h-14  text-white px-4 py-2 w-full rounded-[.7rem]'>
				Connect wallet
			</button>
		</div>
	);
};

export default CreateTokenUI;
