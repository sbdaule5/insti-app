<script>
	
        export let info;
</script>

<a href={info.url}>

<div class="box" style="background-image: url({info.img});">
	<!--<img src={info.img} >
        <h2>{info.title}</h2>-->
</div>
</a>
<!--<div class="box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFwAk6T0t16rG8uApAzBdWe2obWmr8zYU7w&usqp=CAU" alt="Contact">
		<h2>{info.title} Us</h2>
    </div>

	background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFwAk6T0t16rG8uApAzBdWe2obWmr8zYU7w&usqp=CAU");
-->

<style>


.box{
	background-size: cover;
	width:20vw;
	height: 15vw;
	border-radius: 15px;
	padding: 1%;
	box-shadow: 0 4px 6px 0 rgb(64, 236, 249);
    cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

.box img{
	width: 100%;
	height: 100%;
	border-radius: 15px;
	
}
</style>
