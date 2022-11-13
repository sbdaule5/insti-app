<script>
  import Navbar from "./Home/Navbar.svelte";
  import ImageSlider from "./Home/ImageSlider.svelte";
  import Midbar from "./Home/Midbar.svelte";
  import Imformation from "./Home/Imformation.svelte";
  import Footer from "./Home/Footer.svelte";
  import Login from "./Login.svelte";


  export let showLoginBox;
</script>

  {#if (showLoginBox)}
    <Login bind:showLoginBox/>
  {/if}
  <Navbar bind:showLoginBox/>
  <ImageSlider />
  <Midbar />
  <Imformation />
  <Footer />

<style>
</style>
