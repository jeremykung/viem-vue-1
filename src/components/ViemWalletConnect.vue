<template>
	<button class="btn" @click="connect">
		{{ addressTrimmed ? addressTrimmed : "Connect" }}
	</button>
</template>

<script setup>
import { connectWallet, walletClient } from "@/walletClient"
import { onMounted, ref } from "vue"

const address = ref(null)
const addressTrimmed = ref(null)

async function connect() {
	const connectedAddress = await connectWallet()
	address.value = connectedAddress
	const trimmedAddress =
		connectedAddress.substring(0, 6) +
		"..." +
		connectedAddress.substring(connectedAddress.length - 4)
	addressTrimmed.value = trimmedAddress
	return connectedAddress
}

// Not working to show address on connect button on refresh (even though wallet is connected)
onMounted(async () => {
	const addresses = await walletClient.getAddresses()
	console.log("addresses:", addresses)
	address.value = addresses[0]
})
</script>
