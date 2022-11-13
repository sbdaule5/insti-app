<script>
	import Profile from "./Profile.svelte";
	import EditProfile from "./EditProfile.svelte";
	import Contact from "./Contact.svelte";
	import { Router, Link, Route } from "svelte-routing";
	import NavigationBar from "./Dashboard/Navigation.svelte";
	import DashboardHome from "./Dashboard/DashboardHome.svelte";
	import MessMenu from "./MessMenu.svelte";
import { compute_slots } from "svelte/internal";

	async function getProfile() {
		return fetch("http://localhost:8080/api/user/myprofile", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
		}).then(data => data.json())
	}
	var profilePromise = getProfile();

</script>
<Router>
	<div>
		<NavigationBar/>
		<div class="content">
			<Route path="contacts" component={Contact}/>
			<Route path="mess" component={MessMenu}/>
			{#await profilePromise then profile}
				{#if (!('id' in profile) || profile.id == null || profile.id == undefined || profile.id == 0)}
					<Route path="profile" component={EditProfile} bind:profilePromise/>
					<Route path="/" component={EditProfile} bind:profilePromise/>
				{:else}
					<Route path="profile" component={Profile} bind:profilePromise/>
					<Route path="/" component={DashboardHome}/>
				{/if}
			{/await}
		</div>
	</div>


</Router>
<style>
	.content{
	margin: 2vw;
	}
</style>
