import { createWalletClient, custom } from "viem"
import { mainnet, sepolia } from "viem/chains"

export const walletClient = createWalletClient({
	chain: sepolia,
	transport: custom(window.ethereum),
})

export async function connectWallet() {
	try {
		const addresses = await walletClient.requestAddresses()
		console.log("address:", addresses)
		return addresses[0]
	} catch (error) {
		console.log("get address error:", error)
	}
}

export const [account] = await walletClient.getAddresses()
