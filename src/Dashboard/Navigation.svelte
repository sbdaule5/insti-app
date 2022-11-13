<script>
	var left = ["0%", "15%", "38%", "60%", "80%"];
	var width = ["15%", "23%", "20%", "20%", "20%"];
	var current = 0;
</script>

<nav>
	<div>
		<a href="/dashboard">Home</a>
	</div>
	<div>
		<a href="/dashboard/profile">Profile</a>
	</div>
	<div>
		<a href="/dashboard/contacts">Contacts</a>
	</div>
	<div>
		<a href="/dashboard/complaint">Complaint</a>
	</div>
	<div>
		<a href="/dashboard/mess">Mess Menu</a>
	</div>
	<div class="animation start-home" style="width: {width[current]}; left: {left[current]}"></div>
</nav>

<style>
	@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
	body {
		font-family: 'Open Sans', sans-serif;
		background: #2c3e50;

	}
	nav{
		position: relative;
		margin: 10px auto 0;
		justify-content: space-around;
		width: 65%;
		height: 50px;
		background: #34495e;
		border-radius: 8px;
		font-size: 0;
		box-shadow: 3px 6px 4px 0 rgba(24, 176, 160, 0.642);
	}
	nav div{
		font-size: 15px;
		text-transform: uppercase;
		color: white;
		text-decoration: none;
		line-height: 50px;
		position: relative;
		z-index: 1;
		display: inline-block;
		text-align: center;
	}
	nav div a{
		font-size: 15px;
		text-transform: uppercase;
		color: white;
		text-decoration: none;
		line-height: 50px;
		position: relative;
		z-index: 1;
		display: inline-block;
		text-align: center;
	}
	nav .animation{
		position: absolute;
		height: 100%;
		/* height: 5px; */
		top: 0;

		/* bottom: 0; */
		z-index: 0;
		background: #1abc9c;
		border-radius: 8px;
		transition: all .5s ease 0s;
	}
	/*nav .start-home{
		width: 15%;
		left: 0;
	}*/
	nav div:nth-child(1){
		width: 15%;
	}
	nav div:nth-child(1):hover~.animation{
		width: 15%;
		left: 0;
	}
	nav div:nth-child(2){
		width: 23%;
	}
	nav div:nth-child(2):hover~.animation{
		width: 23%;
		left: 15%;
	}
	nav div:nth-child(3){
		width: 20%;
	}
	nav div:nth-child(3):hover~.animation{
		width: 20%;
		left: 38%;
	}

	nav div:nth-child(4){
		width: 20%;
	}
	nav div:nth-child(4):hover~.animation{
		width: 20%;
		left: 60%;
	}
	nav div:nth-child(5){
		width: 20%;
	}

	nav div:nth-child(5):hover~.animation{
		width: 20%;
		left: 80%;
	}
	@media screen and (max-width:1152px){
		nav div{
			font-size: 10px;
			text-transform: uppercase;
			color: white;
			text-decoration: none;
			line-height: 50px;
			position: relative;
			z-index: 1;
			display: inline-block;
			text-align: center;
		}

	}
	@media screen and (max-width:576px){
		nav div{
			font-size: 5px;
			text-transform: uppercase;
			color: white;
			text-decoration: none;
			line-height: 50px;
			position: relative;
			z-index: 1;
			display: inline-block;
			text-align: center;
		}

	}
</style>
