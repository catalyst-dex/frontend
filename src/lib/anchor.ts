import { CATALYST_RPC_ENDPOINT } from "./constants";
import { CatalystProtocol } from "./catalystProgramTypes";
import catalystIdl from "./catalystProgramIDL.json";

import { Connection } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { AnchorWallet } from "@solana/wallet-adapter-react";

export const getProgramServerSide = async (
	rpcEndpoint: string = CATALYST_RPC_ENDPOINT
) => {
	if (!rpcEndpoint) throw new Error("RPC endpoint is not defined");
	const connection = new Connection(rpcEndpoint, {
		commitment: "finalized",
	});
	const program = new anchor.Program<CatalystProtocol>(
		catalystIdl as CatalystProtocol,
		{
			connection,
		}
	);
	return program;
};

export const getProgramClient = async (
	connection: Connection,
	wallet: AnchorWallet
) => {
	const provider = new anchor.AnchorProvider(connection, wallet);
	anchor.setProvider(provider);
	const program = new anchor.Program<CatalystProtocol>(
		catalystIdl as CatalystProtocol,
		provider
	);
	return program;
};
