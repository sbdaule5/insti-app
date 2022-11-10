<script>
  export let profilePromise;
</script>

    {#await profilePromise then profile}
	<div class="profile">
        <div class=" img">
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt = "Avatar" style = "width:70%">
            <div id="name">
                <p1>{profile.name}</p1>
                <p2>{profile.branch}</p2>
            </div>
        </div>
        <div class=" detail">
            <div id="detail">
                <p>Id No.:{profile.id} </p>
                <p>Degree:{profile.degree}</p>
                <p>Email Id:{profile.email}</p>
                <p>DOB:{profile.dob} </p>
                <p>Contact:{profile.contact} </p>
            </div>
        </div>
    </div>
    {/await}


<style>
*{
    margin: 0;
    padding: 0;
}
body{
    background-color: rgb(19, 19, 19);
}


.profile{
    margin:auto;
    display : flex;
    justify-content: space-around;
    background-color:#34495e;
    width : 70%;
    height: 30%;
    border-radius:7px;
    align-self: center;
    /* box-shadow: 0 4px 8px 0 rgba(252, 252, 252, 0.2); */
    box-shadow: 0 4px 8px 0 rgb(64, 236, 249);
}
.img{
    margin-left:2%;
    margin-top: 2%;
    margin-bottom: 2%;
    align-content: center;
    /* display:flex; */
    background-color:#1abc9c;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width:30%;
    height:auto;
    box: shadow 1em;
    border-radius: 4px;
}
img{
    display:block;
    width:auto;
    height:auto;
    margin:auto;
    margin-top:10%;
    /* margin-bottom: 10%; */
    /* padding:5% 30%; */
    
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
    
}
.img p1 {
    display: block;
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 1.5em;
    /* margin-top:5%; */

    text-align: center;
}
.img p2 {
    display: block;
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 1.2em;
    /* margin-top:5%; */
    /* padding-bottom:18%; */
    color:white;
    text-align: center;
}

.detail{
    border-radius:4px;
    margin:2%;    
    background-color:#1abc9c;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width:70%;
    height:90%;
    font-family: "Lucida Console", "Courier New", monospace;
    align-items:center;

}
p{
    padding:0.7em;
} 

</style>
