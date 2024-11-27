"use client";
import { useMemo } from "react";
import {
	ConnectionProvider,
	WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
	SalmonWalletAdapter,
	SolflareWalletAdapter,
	PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { CATALYST_RPC_ENDPOINT } from "@/lib/constants";

import "@solana/wallet-adapter-react-ui/styles.css";

export default function SolanaWalletProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const solanaWallets = useMemo(
		() => [
			new SolflareWalletAdapter(),
			new SalmonWalletAdapter(),
			new PhantomWalletAdapter(),
		],
		[]
	);

	return (
		<ConnectionProvider endpoint={CATALYST_RPC_ENDPOINT}>
			<WalletProvider
				wallets={solanaWallets}
				autoConnect={true}>
				<WalletModalProvider>{children}</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
}
