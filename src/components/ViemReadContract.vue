<template>
	<p>Read Contract loaded..</p>
	<div class="get-data">
		<p>{{ currentData }}</p>
		<button class="btn" @click="getData">Get Data</button>
	</div>
	<div class="set-data">
		<p>{{ dataToSet }}</p>
		<input
			class="input"
			v-model="dataToSet"
			type="text"
			placeholder="uint256"
		/>
		<button class="btn" @click="setData(dataToSet)">Set Data</button>
	</div>
</template>

<script setup>
import { publicClient } from "../publicClient"
import { walletClient, account } from "../walletClient"
import { simpleStorageAbi } from "../abi"
import { ref } from "vue"

const dataToSet = ref(null)
const currentData = ref(null)

async function getData() {
	const data = await publicClient.readContract({
		address: "0x73B176e555046b60451b7D03725D3e1Ee3496035",
		abi: simpleStorageAbi,
		functionName: "get",
	})
	console.log("data:", data)
	currentData.value = data
}

async function setData(newData) {
	const { request } = await publicClient.simulateContract({
		address: "0x73B176e555046b60451b7D03725D3e1Ee3496035",
		abi: simpleStorageAbi,
		functionName: "set",
		args: [newData],
		account,
	})
	const response = await walletClient.writeContract(request)
	console.log("response:", response)

	// console.log("setting data to:", newData)
	// const data = await publicClient.readContract({
	// 	address: "0x73B176e555046b60451b7D03725D3e1Ee3496035",
	// 	abi: simpleStorageAbi,
	// 	functionName: "set",
	// 	args: [newData],
	// })
	// console.log("data:", data)
}
</script>
