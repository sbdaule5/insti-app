<script>
    export let mess;
</script>

{#if (mess="Ena")}
<hr>
<div class="MenuContainer">
    <h1>Dio Mess Menu</h1>
    <div >
        <iframe class="menu-frame" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQGav6WXsocV6r-FDquK8o8y9mdw6PXik4wtSm0StM848wg_MLp4B1fIkiKEjV1Xw/pubhtml?gid=631523536&amp;single=true&amp;widget=true&amp;headers=false" title="Mess Menu"></iframe>
    </div>
</div>
<hr>
{/if}
<hr>
<div class="MenuContainer">
    <h1>Ena Mess Menu</h1>
    <div >
        <iframe class="menu-frame" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQGav6WXsocV6r-FDquK8o8y9mdw6PXik4wtSm0StM848wg_MLp4B1fIkiKEjV1Xw/pubhtml?gid=631523536&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
    </div>
</div>

<hr>
<div class="MenuContainer">
    <h1>Tria Mess Menu</h1>
    <div >
        <iframe class="menu-frame" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQGav6WXsocV6r-FDquK8o8y9mdw6PXik4wtSm0StM848wg_MLp4B1fIkiKEjV1Xw/pubhtml?gid=631523536&amp;
        single=true&amp;widget=true&amp;headers=false&amp;chrome=flase&amp;range=A1:B9;"></iframe>
    </div>
</div>

<style>
    .MenuContainer{
        /* border: 2px solid; */
        margin-top: 50px;
    }

    .menu-frame{
        margin: 10px 0;
        border-radius: 8px;
        font-size: x-large;
        height: 1170px;
        width: 100%;
    }

    .MenuContainer h1{
        text-align: center;
    }

    hr{
        margin: 40px auto;
        width: 80%;
        border:2px nonshade;
    }
</style>
