<template>
	<h2>Wallet Data</h2>
	<p>Address: {{ address }}</p>
</template>

<script setup>
import { walletClient, connectWallet } from "@/walletClient"
import { ref, onMounted } from "vue"
console.log("wallet client:", walletClient)

const address = ref(null)

onMounted(async () => {
	const addresses = await walletClient.getAddresses()
	address.value = addresses[0]
})
</script>
