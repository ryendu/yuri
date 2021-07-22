import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		component: require("../views/Home.vue"),
		name: "Home",
	}, 
	{
		path: "/about",
		component: require("../views/About.vue"),
		name: "About",
	},
	{
		path: "/Blog",
		component: require("../views/Blog.vue"),
		name: "blog",
	},
	{
		path: "/Contact",
		component: require("../views/Contact.vue"),
		name: "Contact",
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router