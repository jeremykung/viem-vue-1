<template>
	<nav>
		<div class="left">
			<span class="logo">Viem x Vue</span>
			<router-link to="/">Home</router-link>
			<router-link to="/viem-public">Public Client</router-link>
			<router-link to="/viem-wallet">Wallet Client</router-link>
		</div>
		<div class="right">
			<ViemWalletConnect />
		</div>
	</nav>
</template>

<script setup>
import ViemWalletConnect from "./ViemWalletConnect.vue"
</script>

<style scoped>
nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
}
.logo {
	padding-right: 1rem;
}
</style>
