<script setup>
import Navbar from "./components/Navbar.vue"
import ViemClient from "./components/ViemClient.vue"
</script>

<template>
	<Navbar />
	<div class="body-content">
		<router-view></router-view>
	</div>
</template>

<style scoped></style>
