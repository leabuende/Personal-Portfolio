<template>
  <div id="app">
    <Navbar class="nav"/>
    <div class="page">
     <router-view class="view"></router-view>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components : {
    Navbar,
    Footer
  }
}
</script>
<style>
#app {
font-family: 'Karla', sans-serif;
background-color: #FAFAFA;
min-height:100vh;
}
.nav{
  z-index:4
}
.page{
  width:100vw;
  display:flex;
  justify-content: center;
  margin-top:100px;
  padding:20px;
}
.view{
  width:100vw;
  max-width: 1400px;
}
.links{
  text-decoration: none;
  color: black;
}
.links:hover{
  cursor: pointer;
}
a:hover{
  cursor: pointer;
}
*{
  margin:0;
  box-sizing: border-box;
}

.white-button{
  background-color: white;
  padding:10px 15px 10px 15px;
  font-family: Karla;
  border: 1px solid black;
  transition: 0.5s;
}
.white-button:hover{
  background-color: black;
  border: 1px solid white;
  color:white;
  cursor: pointer;
}

h2{
  font-weight: bold;
  font-size: 20px;
}

.animated-links {
  
  display: inline-block;
  position: relative;
}
.animated-links:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: black;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.animated-links:hover:after { 
  width: 100%; 
  left: 0; 
}
@media only screen and (max-width: 480px) {
  .page{
    margin-top:0;
  }
  h2{
    font-size: 16px;
  }
}
</style>
