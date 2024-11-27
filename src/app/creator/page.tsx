import CreateTokenUI from "@/components/CreateTokenUI";
import Footer from "@/components/Footer";
import TokenDetailsUI from "@/components/TokenDetailsUI";

function CreatorPage() {
	return (
		<div className='mt-10'>
			<h1 className='text-[1.6rem] text-gray-300 mb-4'>Create Token</h1>
			<div className='grid grid-cols-2   gap-10'>
				<CreateTokenUI />
				<TokenDetailsUI />
			</div>
			<Footer className='py-8' />
		</div>
	);
}
export default CreatorPage;
