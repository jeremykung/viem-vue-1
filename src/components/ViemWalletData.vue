<template>
	<!-- 
        1. Show current assets of wallet on this page ✅
        2. Create a new smart contract and deploy on sepolia
        3. Learn readContract viem
        4. Create new view in this app that reads contract
     -->
	<div class="account-details">
		<h2>Account / Wallet Info</h2>
		<p>Address: {{ address }}</p>
		<p>Balance: {{ accountBalance }}</p>
		<p>Transactions: {{ transactions }}</p>
	</div>
	<div class="add-chain">
		<h3>Add Chain</h3>
		<button @click="addChain" class="btn">1. Add Avax</button>
		<button @click="changeChain" class="btn">2. Switch Chain</button>
	</div>
	<div class="sign-message">
		<h3>Sign Message</h3>
		<p>{{ message }}</p>
		<input class="input" v-model="message" type="text" />
		<button class="sign-message btn" @click="signMessage">Sign Message</button>
	</div>
</template>

<script setup>
import { walletClient } from "@/walletClient"
import { publicClient } from "@/publicClient"
import { avalanche } from "viem/chains"
import { ref, onMounted } from "vue"
console.log("wallet client:", walletClient)

const address = ref(null)
const accountBalance = ref(null)
const transactions = ref(null)
const message = ref("")

async function addChain() {
	await walletClient.addChain({ chain: avalanche })
}

async function changeChain() {
	await walletClient.switchChain({ id: avalanche.id })
}

async function signMessage() {
	await walletClient.signMessage({
		account: address.value,
		message: message.value,
	})
}

onMounted(async () => {
	const addresses = await walletClient.getAddresses()
	address.value = addresses[0]

	if (addresses.length > 0) {
		// get balance
		const balance = await publicClient.getBalance({
			address: addresses[0],
		})
		console.log("balance:", balance)
		accountBalance.value = balance

		// get transactions
		const transactionCount = await publicClient.getTransactionCount({
			address: addresses[0],
		})
		console.log("transactions:", transactionCount)
		transactions.value = transactionCount
	} else {
		accountBalance.value = 0
	}
})
</script>

<style scoped>
.account-details {
	margin: 1rem 0;
}
.add-chain {
	display: flex;
	flex-direction: column;
}
.add-chain .btn {
	width: 200px;
	margin-top: 1rem;
}
.sign-message {
	margin-top: 1rem;
}
.sign-message .input {
	margin-right: 1rem;
	width: 300px;
}
</style>
