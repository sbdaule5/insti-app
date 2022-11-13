<script>
	import { Router, Link, Route } from "svelte-routing";
    import Card from "./MessMenu/Card.svelte";
    import Menu from "./MessMenu/Menu.svelte";

    var ena="Ena";
    var dio = "Dio";
    var tria = "Tria";
</script>

<Router>
    <Route path="/" component={Card}/>
    <Route path="ena" component={Menu} bind:mess={ena}/>
    <Route path="dio" component={Menu} bind:mess={dio}/>
    <Route path="tria" component={Menu} bind:mess={tria}/>
</Router>

<style>

:global(body){
    background-color: #021221;
    color: white;
}
</style>

