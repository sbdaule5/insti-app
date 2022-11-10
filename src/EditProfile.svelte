<script>
    export let profilePromise;
    var newProfile = {
        name:"",
        id: 0,
        branch: "",
        degree: "",
        contact: ""
    };
    async function updateProfile(){
        await fetch("http://localhost:8080/api/user/updateprofile", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProfile) 
        });
		window.location.replace('http://localhost:8080/dashboard/profile');
    }       
</script>

{#await profilePromise then profile}
    {#if (newProfile.name == "")}
        newProfile = JSON.parse(JSON.stringify(profile))
    {/if}
    <div class="container">
        <h1>Edit Profile</h1>
        <div class="row">
            <div class="label">
                <label>Name</label>
            </div>
            <div class="fill">
                <input type="text" id="fname" name="FirstName" placeholder="Your name..." bind:value={newProfile.name}>
            </div>
        </div>
        <div class="row">
            <div class="label">
                <label>Branch Name</label>
            </div>
            <div class="fill">
                <input type="text" id="bname" name="BranchName" placeholder="Your Branch name..." bind:value={newProfile.branch}>
            </div>
        </div>
        <div class="row">
            <div class="label">
                <label>Degree</label>
            </div>
            <div class="fill">
                <input type="text" id="dname" name="DegreeName" placeholder="Your Degree name..." bind:value={newProfile.degree}>
            </div>
        </div>
        <div class="row">
            <div class="label">
                <label>Id No.</label>
            </div>
            <div class="fill">
                <input type="number" id="idno" name="IdNo." placeholder="Your id no..." bind:value={newProfile.id}>
            </div>
        </div>
        <div class="row">
            <div class="label">
                <label>Contact</label>
            </div>
            <div class="fill">
                <input type="text" id="con" name="Contactno" placeholder="Your contact no..." bind:value={newProfile.contact}>
            </div>
        </div>
        <!-- <div class="row">
            <div class="label">
            <label>Twitter</label>
            </div>
            <div class="fill">
            <input type="text" id="twit" name="Twit" placeholder="Your Twitter Id...">
            </div>
            </div>
            <div class="row">
            <div class="label">
            <label>Instagram</label>
            </div>
            <div class="fill">
            <input type="text" id="Int" name="Instagram" placeholder="Your Instagram Id...">
            </div>
            </div> -->
            <div class="button">
                <button type="button" class="btn btn-outline-success" on:click={updateProfile}>Submit</button>
            </div>
    </div>
{/await}
<style>
    *{
        box-sizing: border-box;
    }
    body{
        background: #2c3e50;
    }

    .container{
        display:flex;
        flex-direction: column;
        background-color: #34495e;
        width:80%;
        margin:auto;
        color: white;
        font-size: 1em;
        padding:10px;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-transform: uppercase;
        border-radius: 10px;
    }
    h1{
        text-align: center;
        color:aqua;
    }
    .label {
        padding: 10px 10px 6px 0;
        display: inline-block;
    }
    .row{
        width:100%;
    }
    input{
        width:100%;
        height:2em;
        border-radius:7px ;

    }
    .button{
        border-radius: 10px;
        text-align: center;
        padding:6px;
    }
    button {
        background-color: #4CAF50; /* Green */
        border: none;
        width:90px;
        height: 50px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>
