<script>

</script>
<div class="body">

    <div class="container">
        <h1>Complaint Box</h1>
        <p>Select Department</p>
        <div class="select">
            <select id="complaint" name="complaint">
                <option value="None">--Select--</option>
                <option value="mess">Mess Staff</option>
            <option value="Hostel">Hostel Staff</option>
            <option value="Campus">Campus</option>
            <option value="Faculty">Faculty Issue</option>
        </select>
    </div>
    <form>
        <textarea>Type your complaint here...</textarea>
    </form>
    <div class="button">

        <button class="button">Submit</button>
    </div>
    
</div>
</div>
<style>
    .body{
    background-color: #2c3e50;
    width: 100%;
    height:100%;
}
.container{
    display:flex;
    background-color: #2c3e50;
    width:80%;
    height:90vh;
    /* justify-content: space-evenly; */
    margin:auto;
    /* background-color:antiquewhite; */
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    color:white;

}
textarea{
    /* justify-content: center; */
    width: 100%;
    height: 100%;
    margin:auto;
    /* margin-left: 5%; */
    padding: 2% 4%;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #597087;
    color: white;
    font-size: 16px;
    resize: none;
}
form{
    width:100%;
    height:50%;
}

p{
    font-size: 1.2em;
    padding-top:20px;
    padding-bottom:3px;
    

}
.select{
    width:100%;
    height:7%;
    margin-bottom: 5px;
    /* padding:1%; */
}
select{
    width:100%;
    height:100%;

}
#complaint{
    margin:auto;
    width:100%;
    /* padding:0%; */

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
