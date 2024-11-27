import { create } from "zustand";

interface SwapState {
	tokenToPay: string;
	tokenToRecieve: string;
	setTokenToPay: (token: string) => void;
	setTokenToReceive: (token: string) => void;
}

const useSwapToken = create<SwapState>()((set) => ({
	tokenToPay: "usdc",
	tokenToRecieve: "btc",
	setTokenToReceive: (token) => set(() => ({ tokenToRecieve: token })),
	setTokenToPay: (token) => set(() => ({ tokenToPay: token })),
}));

export default useSwapToken;
