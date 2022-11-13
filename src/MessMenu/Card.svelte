<script>
</script>

<div class="title">
    <h1>Mess Menu</h1>
  </div>
<hr>
  <div class="cardContainer">
    <div class="dio box">
      <img src="../dio.jpeg" alt="dio mess" />
      <h2>Dio Mess</h2>
      <div class="discription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ullam
        saepe ea fugiat fuga asperiores doloribus nesciunt ex. Voluptatum
        autem eius esse nostrum aperiam! Porro, maxime. Labore tempora cum
        illo!
      </div>
    <a href="dio">
      <button class="viewBtn">View</button>
    </a>
    </div>
    <div class="ena box">
      <img src="../ena.jpg" alt="Ena mess" />
      <h2>Ena Mess</h2>
      <div class="discription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odit
        blanditiis eveniet, tenetur et temporibus aspernatur nemo explicabo
        similique mollitia labore. Quis eum fugit vero, nemo tenetur
        dignissimos quaerat magni?
      </div>
    <a href="ena">
      <button class="viewBtn">View</button>
    </a>
    </div>
    <div class="tria box">
      <img src="../tria.jpeg" alt="Tria mess" />
      <h2>Tria Mess</h2>
      <div class="discription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        maxime eveniet itaque nam at atque tenetur doloremque, consectetur
        porro voluptatum sit aliquid sed et autem impedit deserunt amet ab.
        Dicta!
      </div>
    <a href="tria">
      <button class="viewBtn">View</button>
    </a>
    </div>
  </div>

  <style>
.title{
    width: 100%; 
}

.title h1{
    margin: 2% 0% 0 0%;
}

.cardContainer{
    align-self: center;
    justify-self: center;
    align-content: center;
    /* width: 80%; */
    display: flex;
    flex-direction: row;
}

.cardContainer .box{
    border-radius: 15px;
    width: 30%;
    padding: 10px;
    height: fit-content;
    margin: 40px 2%;
    /* border: ; */
    box-shadow: 0 4px 6px 0 rgb(64, 236, 249);
    background-color: #2c3e50;
}

.cardContainer .box img{
    border-radius: 15px;
    width: 100%;
    height: 60%;
}

.cardContainer .box h2{
    padding: 5px;
}

.viewBtn{
    box-sizing: border-box;
    background-color: rgb(22, 163, 22);
    margin:10% 70% 0 0;
    font-weight: 400;
    color: white;
    padding: 5px;
    border-radius: 8px;
    font-size:1.5rem;
}


hr{
  width: 80%;
  border: 2px nonshade;
}

@media screen and (max-width:1152px){
  .cardContainer{
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-right:auto;
    margin-left: auto; 
  }

  .cardContainer .box{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 40px auto;
  }

  .viewBtn{
    font-size: 11;
    padding: 1%;
  }
}

@media screen and (max-width:576px){
  .cardContainer{
    width: 80%;
  }

  .title{
    display: flex;
    justify-content: space-evenly;
  }
}
  </style>
