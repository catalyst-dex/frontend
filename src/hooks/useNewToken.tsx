import { create } from "zustand";

type NewToken = {
	name: string;
	symbol: string;
	decimals: number;
	supply: number;
	image: Blob | File;
	description: string;
	website: string;
	telegram: string;
	twitter: string;
	discord: string;
};
interface SwapState {
	tokenDetails: Partial<NewToken> | null;
	setTokenDetails: (token: Partial<NewToken>) => void;
}

const useNewToken = create<SwapState>()((set) => ({
	tokenDetails: null,
	setTokenDetails: (detail) =>
		set((state) => ({
			tokenDetails: { ...state.tokenDetails, ...detail },
		})),
}));

export default useNewToken;
