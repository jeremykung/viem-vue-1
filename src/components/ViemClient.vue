<template>
	<h3>Viem Client Data</h3>
</template>

<script setup>
import { publicClient } from "@/publicClient"
import { walletClient, connectWallet } from "@/walletClient"

console.log("walletClient:", walletClient)
</script>
