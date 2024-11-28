import { create } from "zustand";

export const cryptoData = [
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
	{
		id: 4,
		name: "CHAINLINK",
		symbol: "LINK",
		icon: "/coins/chainlink.webp",
		price: 1.00142,
		volume24h: "70.20K",
		tvl: "126.847",
	},
	{
		id: 4,
		name: "NOSANA",
		symbol: "NOS",
		icon: "/coins/nosana.webp",
		price: 1.00142,
		volume24h: "70.20K",
		tvl: "126.847",
	},
	{
		id: 4,
		name: "GRASS",
		symbol: "grass",
		icon: "/coins/grass.webp",
		price: 1.00142,
		volume24h: "70.20K",
		tvl: "126.847",
	},
	{
		id: 4,
		name: "DOGWIFHAT",
		symbol: "WIF",
		icon: "/coins/dogwifhat.webp",
		price: 1.00142,
		volume24h: "70.20K",
		tvl: "126.847",
	},
	{
		id: 4,
		name: "JUP",
		symbol: "grass",
		icon: "/coins/jup.webp",
		price: 1.00142,
		volume24h: "70.20K",
		tvl: "126.847",
	},
];
export type CryptoData = (typeof cryptoData)[number];
interface SwapState {
	tokenToPay: CryptoData;
	tokenToRecieve: CryptoData;
	setTokenToPay: (token: CryptoData) => void;
	setTokenToReceive: (token: CryptoData) => void;
}

const useSwapToken = create<SwapState>()((set) => ({
	tokenToPay: cryptoData[0],
	tokenToRecieve: cryptoData[1],
	setTokenToReceive: (token) => set(() => ({ tokenToRecieve: token })),
	setTokenToPay: (token) => set(() => ({ tokenToPay: token })),
}));

export default useSwapToken;
