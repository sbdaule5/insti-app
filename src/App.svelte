<script>
	import { Router, Link, Route } from "svelte-routing";
	import Login from './Login.svelte';
	import Dashboard from './Dashboard.svelte';
	
	export let name;
	export let url = '';
</script>

<Router>
<main>
	<Route path="login" component="{Login}"/>
	<Route path="dashboard" component="{Dashboard}"/>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
</Router>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
