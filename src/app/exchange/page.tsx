import Footer from "@/components/Footer";
import SwapCard from "@/components/SwapCard";

export default function Home() {
	return (
		<div>
			<SwapCard />
			<Footer className=' fixed bottom-5   -translate-y-1/2 -translate-x-1/2 left-1/2 w-[80%] ' />
		</div>
	);
}
