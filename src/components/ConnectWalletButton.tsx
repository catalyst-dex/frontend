"use client";

// import { shortenAddress } from "@/lib/utils";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { cn } from "@/lib/utils";
import UserInfo from "./UserInfo";

type ConnectWalletButtonProps = {
	className?: string;
};

export const ConnectWalletButton = (props: ConnectWalletButtonProps) => {
	const { connected, disconnect, connecting } = useWallet();
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
			className={cn("w-full max-w-[150px]", props.className)}>
			{connecting && "Connecting"}
			{!connected && !connecting && "Connect Wallet"}
		</button>
	);
};
