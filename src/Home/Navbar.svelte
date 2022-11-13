<script>
  import { Link } from "svelte-routing";

  function displayLoginBox(){

    showLoginBox = true;
  }

  export let showLoginBox;
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />

  <nav class="navbar">
    <div class="brand">
      <img class="logo-image" src="https://upload.wikimedia.org/wikipedia/en/6/61/IIT_Bhilai_logo.png" alt="IIT Bhilai">
      <label class="logo" for="">IIT Bhilai</label>
    </div>
    <input type="checkbox" id="check" class="checkbtn" />

    <label for="check" class="checkbtn">
      <i class="fas fa-bars" />
    </label>
    <ul> 
      <li><a class="active" href="#">Home</a></li>
      <li><a href="#">Admission</a></li>
      <li><a href="#">Institute</a></li>
      <li><a href="#">Alumini</a></li>
      <li><a href="#">Placement</a></li>
      <li>
        <span on:click={displayLoginBox}>
          <i class="fas fa-user-alt" style="font-size:24px" />
        </span>
      </li>
    </ul>
  </nav>

<style>

  .navbar {
    position: sticky;
    top: 0;
    z-index: 5;
    justify-content:space-around;
    background-color: #0082e0;
    height: 80px;
    width: 100%;
    margin: 0;
    padding: 0;
    /* align-items: center; */
    display: flex;
  }

  .brand{
    display: flex;
  }

  .logo-image {
    height: 100%;
    /* color: white; */
    display: inline-block;
    margin-left: 1%;
  }

  .navbar .logo {
    display: inline-block;
    box-sizing: border-box;
    color: white;
    font-size: 35px;
    align-self: center;
    padding: 0 5%;
    font-weight: bold;
  }


  .navbar ul {
    justify-content:end;
    align-self: center;
    /* float: right; */
    /* margin-right: 1%; */
  }

  .navbar ul li {
    line-height: 80px;
    display: inline-block;
    margin: 0 10px;
  }

  .navbar ul li a, .navbar ul li Link {
    font-size: 17;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    padding: 7px 13px;
    border-radius: 3px;
  }

  a.active,
a:hover, Link:active, Link:hover {
  background: #1b9bff;
  transition: 0.5s;
  /* margin: 2px; */
}

  .checkbtn {
    font-size: 30px;
    color: white;
    float: right;
    margin-right: 40px;
    line-height: 80px;
    cursor: pointer;
    display: none;
  }

  #check {
    display: none;
  }

  @media (max-width: 1252px) {
    .logo {
      font-size: 30px;
      padding-left: 50px;
    }
    .navbar ul li a, .navbar ul li Link {
      font-size: 13px;
    }

    .navbar ul li {
      margin: 0 5px;
    }
  }

  @media (max-width: 1180px) {
    .logo {
      font-size: 20px;
      padding-left: 50px;
    }
    .checkbtn {
      display: block;
    }
    .navbar ul {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: #2c3e50;
      top: 64px;
      left: -200%;
      /* right: 0%; */
      text-align: center;
      transition: all 0.5s;
      z-index: 10;
    }

    .navbar ul li {
      display: block;
      margin: 50px 0;
      line-height: 30px;
    }

    .navbar ul li a, .navbar ul li Link {
      font-size: 20px;
    }

    a.active,
  a:hover {
    background: none;
    color: #0082e6;
  }

  #check:checked ~ ul {
    left: 0;
  }
  }
</style>
