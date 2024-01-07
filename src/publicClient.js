import { createPublicClient, http } from "viem"
import { mainnet, sepolia } from "viem/chains"

export const publicClient = createPublicClient({
	chain: sepolia,
	transport: http(
		"https://eth-sepolia.g.alchemy.com/v2/-w-QXibpyMZG3FeiFo5LSFOC4FhFjFA2"
	),
})
