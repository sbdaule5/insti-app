<script>
	import Card from "./DashboardCard.svelte"; 

    var profileInfo = {
        url: "profile",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU",
        title: "Profile"
    };
    var contactInfo = {
        url: "contacts",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFwAk6T0t16rG8uApAzBdWe2obWmr8zYU7w&usqp=CAU",
        title: "Contact"
    };
    var complaintInfo = {
        url: "complaint",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavDUwHx4qRQZc3jBbTtliQWreFaEZCqC9KQ&usqp=CAU",
        title: "Complain"
    };
    var messInfo = {
        url: "messmenu",
        img: "https://scontent-bom1-2.xx.fbcdn.net/v/t1.18169-9/23659332_1318566701603464_5654378545258270003_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=zrpzW8hH-nsAX_18CA7&_nc_ht=scontent-bom1-2.xx&oh=00_AfBVSgHDP9GJZkXf42k_vInNqoaMG-sBcgCW1nP3gwAblQ&oe=6396182C",
        title: "Mess Menu"
    };
    var calanderInfo = {
        url: "https://openlake.github.io/iitbh-calendar/",
        img: "https://dmer.haryana.gov.in/assets/site/images/Calendar.jpg",
        title: "Mess Menu"
    };

</script>

 <div class="container">
     <Card bind:info={profileInfo}/>
     <Card bind:info={contactInfo}/>
     <Card bind:info={complaintInfo}/>
     <Card bind:info={messInfo}/>
 </div>
 <div class="container">
    <Card bind:info={calanderInfo}/>
</div>
<style>
.container{
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content:space-evenly ;
	padding-top:7%;
    color: white;
    margin: 5vw 0px 5vw 0px;
    padding: 0px;
}
</style>
