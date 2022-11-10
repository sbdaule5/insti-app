<script>
	function loginBtn(){
		window.location.replace('http://localhost:3000/api/auth/google');
	}
</script>

<div class="container">
	<div class="close-btn">X</div>
	<div class="logo-box">
		<div class="logo">
			<img src="./favicon.png" alt="logo">
		</div>
	</div>
	<div class="login-btn-box">
		<button class="login-btn" on:click={loginBtn}>Login with Google</button>
	</div>
	<div class="tandc-container">
		<div class="checkbox">
			<input class="check" type="checkbox"/>
		</div>
		<div class="permission-text">
			<label>I agree to share Personal Data</label>
		</div>
	</div>
</div>

<style>
	.container{
		display: flex;	
		position: fixed;
		right: 2.5vw;
		width: 30vw;
		flex-direction: column;
		background-color: #111166;
		border-radius: 1.5vw;
		padding: 0.5vw;
	}
	.close-btn{
		position: absolute;
		display: inline;
		border-radius: 50%;
		width: 1.2em;
		height: 1.2em;
		top: 0.7vw;
		right: 0.7vw;
		background-color: black;
		color: white;
		font-size: small;
	}
	.logo-box{
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 0.5vw;
	}
	.login-btn-box{
		display: flex;	
		align-items: center;
		justify-content: space-around;
	}
	.login-btn-box button{
		background-color: #EC5645;
		color: white;
		border: none;
		border-radius: 4px;
	}
	/*.login-btn-box button:hover{
		box-shadow: 2px 2px white;
	}*/
	.logo img{
		height: 6vw;
		width: 6vw;
	}
	.logo{
		background-color: black;
		border-radius: 50%;
	}
	.tandc-container{
		display: flex;	
		align-items: flex-end;
		justify-content: center;
	}
	.checkbox{
		height: 100%;	
		position: relative;
		top: 0.35em;
		padding: 5px;
	}
	.permission-text{
		padding: 5px;
		color: white;
	}
</style>
