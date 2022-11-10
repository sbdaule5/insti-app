<script>
	import Profile from "./Profile.svelte";
	import EditProfile from "./EditProfile.svelte";

	async function getProfile() {
		return fetch("http://localhost:8080/api/user/myprofile", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
		}).then(data => data.json())
	}
	var profilePromise = getProfile();
	
</script>
<div>
	{#await profilePromise then profile}
		{#if (profile.id == null || profile.id == undefined || profile.id == 0)}
			<EditProfile bind:profilePromise/>
		{:else}
			<Profile bind:profilePromise/>
		{/if}
	{/await}
</div>

<style>

</style>
