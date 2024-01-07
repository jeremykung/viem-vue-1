<template>
	<p>Viem Client Loaded...</p>
</template>

<script setup>
import { publicClient } from "@/publicClient"
import { walletClient, connectWallet } from "@/walletClient"

console.log("walletClient:", walletClient)
// console.log("connectWallet:", await connectWallet())

// console.log("public client import:", publicClient)
// console.log("wallet client import:", walletClient)

// const blockNumber = await publicClient.getBlockNumber()
// console.log("blockNumber:", blockNumber)

// const balance = await publicClient.getBalance({
// 	address: address,
// })
// console.log("balance:", balance)
</script>
