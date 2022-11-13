<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from './Home.svelte';
	import Login from './Login.svelte';
	import Dashboard from './Dashboard.svelte';
</script>

<Router>
<main>
	<Route path="/" component="{Home}"/>
	<Route path="/dashboard/*" component="{Dashboard}"/>
</main>
</Router>

<style>
	main {
		text-align: center;
		margin: 0;
		padding: 0;
		text-decoration: none;
		list-style: none;
		box-sizing: border-box;
	}
	:global(body){
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-size: "Roboto Mono", "Vazirmatn";
		background-color: white;
		overflow-x: hidden;
		background-color: #021221;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
