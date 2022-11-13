<script>
     async function getContacts() {
		return fetch("http://localhost:8080/api/contacts", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
		}).then(data => data.json())
	}
	var contactsPromise = getContacts();
   
</script>
{#await contactsPromise then contacts}
    <div class="container">
        <h1>Contact List</h1>
        <table id="contact">
            <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
            </tr>
            {#each contacts as contact}
                <tr>
                    <td>
                        {contact.name}
                    </td>
                    <td>
                        {contact.phone}
                    </td>
                    <td>
                        {contact.email}
                    </td>
                </tr> 
            {/each}
        </table>
    </div>
{/await}
<style>
.container{
    width: 100%;
    height: 100%;
    color:white;
    text-align: center;
}
#contact {
    background-color: #34495e;
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 80%;
    margin:auto;
    padding:30px;
    border-radius: 5px;
    box-shadow: 0 2px 6px 0 rgb(64, 236, 249);
    text-align: center;
  }

#contact th{
    background-color: #1abc9c;
    padding:10px;
    font-size: 1.2em;
    border:1px solid #ddd;
}
#contact td{
    font-size: 1em;
    border:1px solid #ddd;
    padding:7px;
}
</style>
