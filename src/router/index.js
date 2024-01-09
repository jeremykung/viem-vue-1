import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import ViemPublicView from "@/views/ViemPublicView.vue"
import ViemContractView from "@/views/ViemContractView.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/viem-public",
			name: "viemPublic",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/ViemPublicView.vue"),
		},
		{
			path: "/viem-wallet",
			name: "viemWallet",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/ViemWalletView.vue"),
		},
		{
			path: "/viem-contract",
			name: "viemContract",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/ViemContractView.vue"),
		},
	],
})

export default router
