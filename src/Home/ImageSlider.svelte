<script>
  var responsiveSlider = function () {
    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slide-wrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    window.addEventListener("resize", function () {
      sliderWidth = slider.offsetWidth;
    });

    var nextSlide = function () {
      if (count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      } else if ((count = items)) {
        slideList.style.left = "0px";
        count = 1;
      }
    };

    var prevSlide = function () {
      if (count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      } else if ((count = 1)) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };

    next.addEventListener("click", function () {
      nextSlide();
    });

    prev.addEventListener("click", function () {
      prevSlide();
    });

    setInterval(function () {
      nextSlide();
    }, 8000);
  };

  window.onload = function () {
    responsiveSlider();
  };

  
</script>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />

<div id="slider">
  <ul id="slide-wrap">
    <li><img src="./img1.png" alt="img1" /></li>
    <li><img src="./img2.png" alt="img2" /></li>
    <li><img src="./img3.png" alt="img3" /></li>
    <li><img src="./img4.png" alt="img4" /></li>
  </ul>
  <a id="prev" href="#">&#8810;</a>
  <a id="next" href="#">&#8811;</a>
</div>

<style>
  #slider {
    margin: 20px 0 20px 0;
    width: 100vw; /*500px*/
    height: 700px;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    position: relative;
  }

  #slider ul {
    width: 10000%;
    height: 100%;
    position: relative;
    left: 0;
    list-style: none;
    transition: all 750ms ease;
    padding: 0;
    margin: 0;
  }

  #slider ul li {
    /* display: inline-flex; */
    /* flex-direction: row; */
    position: relative;
    height: 100%;
    float: left;
  }

  #slider ul li img {
    width: 100vw; /*500px*/
    height: 700px;
    /* overflow: hidden; */
  }

  #slider #prev,
  #slider #next {
    width: 100px;
    line-height: 100px;
    /* border-radius: 50%; */
    font-size: 3rem;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    text-align: center;
    color: white;
    text-decoration: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 150ms ease;
  }

  #slider #prev {
    left: 10px;
  }
  #slider #next {
    right: 10px;
  }

  #slider #prev:hover,
  #slider #next:hover {
    background-color: rgba(0, 0, 0, 0.5);
    text-shadow: 0;
  }
</style>
