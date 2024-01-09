export const simpleStorageAbi = [
	{
		inputs: [],
		name: "get",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "data", type: "uint256" }],
		name: "set",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
]
