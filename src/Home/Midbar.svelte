<script></script>

<div class="midbar" style="height: 60px">
  <input type="checkbox" id="check1" class="checkbtn1" />
  <label for="check1" class="checkbtn1">
    <i class="fas fa-bars" />
  </label>
  <ul>
    <li><a href="#">Faculty and Staff</a></li>
    <li><a href="#">Prospective Faculty</a></li>
    <li><a href="#">Prospective Staff</a></li>
    <li><a href="#">Student</a></li>
    <li><a href="#">Prospective Students</a></li>
    <li><a href="#">Campus</a></li>
  </ul>
</div>

<style>
  .midbar {
    margin: 0 0 10px 0;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    background-color: #0082e0;
    height: 80px;
    width: 100%;
    border-radius: 15px;
    /* display: flex; */
  }

  #check1 {
    display: none;
  }

  .midbar ul {
    margin-right: 20px;
    float: right;
  }

  .midbar ul li {
    line-height: 80px;
    display: inline-block;
    margin: 0 10px;
  }

  .midbar ul li a {
    text-decoration: none;
    font-size: 17;
    text-transform: uppercase;
    color: white;
    padding: 7px 13px;
    border-radius: 3px;
  }

  a:hover {
    background: #1b9bff;
    transition: 0.5s;
    /* margin: 2px; */
  }

  .checkbtn1 {
    font-size: 30px;
    color: white;
    float: right;
    margin-right: 40px;
    line-height: 80px;
    cursor: pointer;
    display: none;
    z-index: 8;
    /* align-self:stretch; */
  }

  @media (max-width: 1252px) {
    .midbar ul li a {
      font-size: 12px;
    }

    .midbar ul li {
      margin: 0 5px;
    }
  }

  /* @media (max-width:1500) {
    .midbar ul li a{
        font-size: 10px;
    }
} */
  @media (max-width: 980px) {

    .checkbtn1 {
      display: block;
      z-index: 8;
      
    }
    .midbar ul {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: #2c3e50;
      top: 64px;
      left: -200%;
      text-align: center;
      transition: all 0.5s;
      z-index: 5;
    }
    
    .midbar ul li {
      display: block;
      margin: 50px 0;
      line-height: 30px;
      text-align: center;
    }
    
    .midbar ul li a {
      font-size: 20px;
    }

    a:hover {
      background: none;
      color: #0082e6;
    }

    #check1:checked ~ ul {
      left: 0;
    }
  }
</style>
