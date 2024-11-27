"use client";

import { shortenAddress } from "@/lib/utils";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

import UserInfo from "./UserInfo";

export const ConnectWalletButton = () => {
	const { connected, disconnect, connecting, publicKey } = useWallet();
	const { setVisible } = useWalletModal();

	const handleClick = () => {
		if (connected) {
			disconnect();
		} else {
			setVisible(true);
		}
	};

	if (connected) {
		return <UserInfo />;
	}

	return (
		<button
			onClick={handleClick}
			className='w-full max-w-[150px] '>
			{connecting && "Connecting"}
			{!connected && "Connect Wallet"}
		</button>
	);
};
