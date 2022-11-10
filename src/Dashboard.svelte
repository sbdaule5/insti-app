<script>
	async function getProfile() {
		return fetch("http://localhost:8080/api/user/myprofile", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: {
				serachBy: "email",
				email: "shubhambd@iitbhilai.ac.in"
			}
		}).then(data => data.json())
	}
	var profilePromise = getProfile();
	
</script>
<div>
	{#await profilePromise then profile}
		profile:{profile.name}
	{/await}
</div>

<style>

</style>
