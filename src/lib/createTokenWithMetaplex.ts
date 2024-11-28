import {
	percentAmount,
	generateSigner,
	some,
	createSignerFromKeypair,
	signerIdentity,
	publicKey,
	Umi,
} from "@metaplex-foundation/umi";
import { createFungible } from "@metaplex-foundation/mpl-token-metadata";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import {
	Keypair,
	LAMPORTS_PER_SOL,
	PublicKey,
	SendTransactionError,
} from "@solana/web3.js";
import { Connection } from "@solana/web3.js";
import { SOON_RPC_ENDPOINT } from "./constants";
import { showToast } from "./utils";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { getOrCreateAssociatedTokenAccount, mintTo } from "@solana/spl-token";
// Function to switch to SOON Devnet and register required programs
export async function umiSwitchToSoonDevnet(umi: Umi) {
	// Register Token Metadata Program
	umi.programs.add(
		{
			name: "mplTokenMetadata",
			publicKey: publicKey(
				"6C4GR9AtMGF25sjXKtdB7A6NVQUudEQWw97kG61pGuA1"
			),
			getErrorFromCode: () => null,
			getErrorFromName: () => null,
			isOnCluster: () => true,
		},
		true
	);

	// Register Candy Machine Core Program
	umi.programs.add(
		{
			name: "mplCandyMachineCore",
			publicKey: publicKey(
				"GFmqavo1M8wEL3a4uouSCaDX5CJapcYWXTcZ4TK6L9ad"
			),
			getErrorFromCode: () => null,
			getErrorFromName: () => null,
			isOnCluster: () => true,
		},
		true
	);

	// Register Candy Machine Program
	umi.programs.add(
		{
			name: "mplCandyMachine",
			publicKey: publicKey(
				"GFmqavo1M8wEL3a4uouSCaDX5CJapcYWXTcZ4TK6L9ad"
			),
			getErrorFromCode: () => null,
			getErrorFromName: () => null,
			isOnCluster: () => true,
		},
		true
	);

	umi.programs.add(
		{
			name: "mplCandyGuard",
			publicKey: publicKey(
				"3g5Pe9ZoDmhA4k1ooFhxgtMWNesTYRdrSAKWMfjr2YxH"
			),
			getErrorFromCode: () => null,
			getErrorFromName: () => null,
			isOnCluster: () => true,
			// @ts-expect-error sgew
			availableGuards: [
				"botTax",
				"solPayment",
				"tokenPayment",
				"startDate",
				"thirdPartySigner",
				"tokenGate",
				"gatekeeper",
				"endDate",
				"allowList",
				"mintLimit",
				"nftPayment",
				"redeemedAmount",
				"addressGate",
				"nftGate",
				"nftBurn",
				"tokenBurn",
				"freezeSolPayment",
				"freezeTokenPayment",
				"programGate",
				"allocation",
				"token2022Payment",
			],
		},
		true
	);
}
// Set up the Umi instance
const umi = createUmi(SOON_RPC_ENDPOINT).use(mplTokenMetadata());

// Create keypair and signer
const decoder = bs58.decode(process.env.NEXT_PUBLIC_MY_SECREAT!);

const keypair = umi.eddsa.createKeypairFromSecretKey(decoder);
const payer = Keypair.fromSecretKey(decoder);
// const payer = Keypair.fromSecretKey(payerSecretKey);
// console.log("Payer Public Key:", payer.publicKey);

const myKeypairSigner = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(myKeypairSigner));

// Create a mint signer
const mint = generateSigner(umi);

// Main function to create a fungible token
export async function createtokenWithMetaplex(
	name: string,
	imageURL: string,
	decimals: number,
	symbol: string,
	supply: number,
	publicKey: PublicKey
) {
	console.log(name, imageURL, decimals, symbol, supply, publicKey);
	try {
		showToast.loading("Minting token...");
		const connection = new Connection(
			"https://rpc.devnet.soo.network/rpc",
			"confirmed"
		);
		const balance = await connection.getBalance(publicKey);
		const solBalance = balance / LAMPORTS_PER_SOL;
		console.log(solBalance.toString());
		// // Switch Umi instance to SOON Devnet by adding necessary programs
		await umiSwitchToSoonDevnet(umi);

		// // Check balance before transaction
		// const balance = await
		// console.log("Current balance:", balance);

		// // Ensure you have enough balance for transaction fees
		// if (balance < 10_000_000) {
		// 	// Adjust threshold as needed
		// 	throw new Error("Insufficient SOL balance for transaction");
		// }

		// // Create the fungible token
		console.log(name, imageURL, decimals);
		const txResponse = await createFungible(umi, {
			mint,
			name: name,
			uri: imageURL,
			sellerFeeBasisPoints: percentAmount(5.5),
			decimals: some(Number(decimals)),
			symbol,
		}).sendAndConfirm(umi);

		console.log(mint.publicKey, "mint");
		const newTokenMintPublicKey = new PublicKey(mint.publicKey);
		console.log(txResponse);

		const tokenAccount = await getOrCreateAssociatedTokenAccount(
			connection,
			payer,
			newTokenMintPublicKey,
			publicKey
		);

		// // Create ATA for recipient
		// await getOrCreateAssociatedTokenAccount(umi, {
		// 	mint: mint.publicKey,
		// 	owner: recipientAddress,
		// }).sendAndConfirm(umi);

		// Mint tokens to recipient's ATA
		await mintTo(
			connection,
			payer,
			newTokenMintPublicKey,
			tokenAccount.address,
			payer,
			Number(supply)
		);
	} catch (error) {
		console.error("Transaction failed:", error);
		// If it's a SendTransactionError, you can get more details
		if (error instanceof SendTransactionError) {
			console.log("Transaction logs:", error);
		}
	}
}
