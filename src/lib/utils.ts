import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { Keypair } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

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

export const getTokenBalances = async (
	connection: Connection,
	publicKey: PublicKey
) => {
	try {
		const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
			publicKey,
			{
				programId: TOKEN_PROGRAM_ID,
			}
		);

		const tokenBalances = tokenAccounts.value
			.map((account) => ({
				tokenAddress: account.account.data.parsed.info.mint,
				balance:
					account.account.data.parsed.info.tokenAmount.uiAmount || 0,
				symbol: account.account.data.parsed.info.tokenAmount.decimals,
			}))
			.filter((token) => token.balance > 0);
		console.log(tokenAccounts);
		console.log(tokenBalances);
	} catch (err) {
		console.error("Error fetching token balances:", err);
	}
};

export const getSOLBalance = async (
	connection: Connection,
	publicKey: PublicKey
) => {
	try {
		const balance = await connection.getBalance(publicKey);
		return balance / LAMPORTS_PER_SOL;
	} catch (err) {
		console.error("Error fetching SOL balance:", err);
	}
};
