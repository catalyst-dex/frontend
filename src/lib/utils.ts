import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";
import { Connection, PublicKey } from "@solana/web3.js";
import { Keypair } from "@solana/web3.js";
import { AccountLayout, TOKEN_PROGRAM_ID } from "@solana/spl-token";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function shortenAddress(address: string, chars = 4): string {
	if (!address) return "";
	return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}
export const showToast = {
	message: (message: string) => {
		toast.remove();
		toast(message);
	},
	success: (message: string) => {
		toast.remove();
		toast.success(message);
	},
	error: (message: string) => {
		toast.remove();
		toast.error(message);
	},
	loading: (message: string) => {
		toast.remove();
		toast.loading(message);
	},
};

export const generateRandomPublicKey = () => {
	const keypair = Keypair.generate();
	const publicKey = keypair.publicKey.toBase58();
	console.log("Public key:", publicKey);
};

export async function getTokenAccountsByOwner(walletAddress: string) {
	const connection = new Connection("https://api.mainnet-beta.solana.com");
	const ownerPublicKey = new PublicKey(walletAddress);

	const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
		ownerPublicKey,
		{
			programId: TOKEN_PROGRAM_ID,
		}
	);

	return tokenAccounts.value.map((account) => {
		return {
			address: account.pubkey.toBase58(),
			mint: account.account.data.parsed.info.mint,
			amount: account.account.data.parsed.info.tokenAmount.amount,
		};
	});
}
