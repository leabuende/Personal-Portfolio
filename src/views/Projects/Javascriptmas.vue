<template>
  <div class="javascriptmas project-component">
    <div class="half-section">
    <p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>
    </div>
     <div class="half-section half-section-media">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Zv4VBzj4WjE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
    </div>
    <div class="full-section half-section-media">
        <img src="@/assets/projects/javascriptmas/album/1.png" alt="">
    </div>

 </div>
</template>

<script>

export default {
  name: 'Javascriptmas',

}
</script>
<style scoped>
.project-component{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.half-section{
    width:50%;
    flex:50%;
    padding:10px 0px 10px 0px;
}
.full-section{
    width:100%;
    flex:100%;
}
.half-section-media{
    padding: 10px;
    min-height: 300px;
}
.half-section-media img{
    width:100%;
    height:auto;
}
@media (max-width: 768px) {
    .half-section{
    width:100%;
    flex:100%;
}
.half-section-media{
    padding:10px 0px 10px 0px;
}
}
</style>
