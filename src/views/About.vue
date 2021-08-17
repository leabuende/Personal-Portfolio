<template>
  <div class="about">
    <div class="presentation-section">
      <div class="presentation-left">
        <Presentation />
        <a href="https://drive.google.com/file/d/1NsO7pEXPJZxEyiOfPLi5W5VlsrXdr7Y9/view?usp=sharing" target="_blank">
        <button class="white-button">
          Download my resume
        </button>
        </a>
      </div>
      <div class="about-slider about-desktop">

        <div class="container" v-if="page == 1">
          <div class="column">
            <h2 class="category-title">Skills</h2>
            <div class="icons">
              <div class="icon" v-for="tech in techs" :key="tech.naùe">
                <a :href="tech.link">
                  <img
                    :src="require(`@/assets/tech-icons/${tech.img}.png`)"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="column">
            <h2 class="category-title">Tools</h2>
            <div class="icons">
              <div class="icon" v-for="tool in tools" :key="tool.name">
                <a :href="tool.link">
                  <img
                    :src="require(`@/assets/tech-icons/${tool.img}.png`)"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="column">
            <h2 class="category-title">Languages</h2>
            <p class="category-text">
              Fluent French, German and English Profficient Spanish
            </p>
          </div>
          <div class="column">
            <h2 class="category-title">Eductaion</h2>
            <p class="category-text">
              Software Engineering major @ Efrei Paris
            </p>
            <p class="category-text">
              Self-taught designer
            </p>
          </div>
        </div>

        <div class="container" v-if="page == 2">
          <div class="alt-column">
            <h2 class="category-title">I'm passionate about...</h2>
            <div class="icons">
              <div class="icon" v-for="passion in passions" :key="passion.name">
                <a :href="passion.link">
                  <img
                    :src="require(`@/assets/passions-icons/${passion.img}.png`)"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="alt-column">
            <h2 class="category-title">And inspired by...</h2>
            <div class="icons">
              <div class="icon" v-for="inspiration in inspirations" :key="inspiration.name">
                <a :href="inspiration.link">
                  <img
                    :src="require(`@/assets/passions-icons/${inspiration.img}.png`)"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="button">
          <button class="white-button" v-if="page == 1" @click="page=2">Passions and Interests...</button>
          <button class="white-button" v-if="page == 2" @click="page=1">Skills and education...</button>

        </div>
      </div>
      <div class="about-slider alt-about">
         <div class="container">
          <div class="column">
            <h2 class="category-title">Skills</h2>
            <div class="icons">
              <div class="icon" v-for="tech in techs" :key="tech.naùe">
                <a :href="tech.link">
                  <img
                    :src="require(`@/assets/tech-icons/${tech.img}.png`)"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="column">
            <h2 class="category-title">Tools</h2>
            <div class="icons">
              <div class="icon" v-for="tool in tools" :key="tool.name">
                <a :href="tool.link">
                  <img
                    :src="require(`@/assets/tech-icons/${tool.img}.png`)"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="column">
            <h2 class="category-title">Languages</h2>
            <p class="category-text">
              Fluent French, German and English Profficient Spanish
            </p>
          </div>
          <div class="column">
            <h2 class="category-title">Eductaion</h2>
            <p class="category-text">
              Software Engineering major @ Efrei Paris
            </p>
            <p class="category-text">
              Self-taught designer
            </p>
          </div>
        </div>
      </div>
      <div class="about-slider alt-about">
         <div class="container">
          <div class="alt-column">
            <h2 class="category-title">I'm passionate about...</h2>
            <div class="icons">
              <div class="icon" v-for="passion in passions" :key="passion.name">
                <a :href="passion.link">
                  <img
                    :src="require(`@/assets/passions-icons/${passion.img}.png`)"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="alt-column">
            <h2 class="category-title">And inspired by...</h2>
            <div class="icons">
              <div class="icon" v-for="inspiration in inspirations" :key="inspiration.name">
                <a :href="inspiration.link">
                  <img
                    :src="require(`@/assets/passions-icons/${inspiration.img}.png`)"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  


  </div>
</template>

<script>
import Presentation from "../components/Presentation.vue";

export default {
  name: "About",
  components: {
    Presentation,
  },
  data() {
    return {
      page: 1,
      techs: [
        {
          name: "Vue.js",
          img: "vue",
          link: "www.vuejs.org",
        },
        {
          name: "Javascript",
          img: "js",
          link: "www.vuejs.org",
        },
        {
          name: "Node.js",
          img: "node",
          link: "www.vuejs.org",
        },
        {
          name: "Figma",
          img: "figma",
          link: "www.vuejs.org",
        },
        {
          name: "Wordpress",
          img: "wordpress",
          link: "www.vuejs.org",
        },
      ],
      tools: [
        {
          name: "Slack",
          img: "slack",
          link: "www.slack.com",
        },
        {
          name: "Notion",
          img: "notion",
          link: "www.notion.org",
        },
        {
          name: "Node.js",
          img: "node",
          link: "www.vuejs.org",
        },
        {
          name: "Gitlab",
          img: "gitlab",
          link: "www.gitlab.com",
        },
        {
          name: "Github",
          img: "github",
          link: "www.github.com",
        },
      ],
      inspirations: [
        {
          name: "Heidi Lamarr",
          img: "heidi",
          link: "www.slack.com",
        },
        {
          name: "Michelle Obama",
          img: "michelle",
          link: "www.notion.org",
        },
      ],
      passions: [
        {
          name: "Animal Crossing",
          img: "ac",
          link: "www.slack.com",
        },
        {
          name: "Overwatch",
          img: "overwatch",
          link: "www.notion.org",
        },
        {
          name: "Ladies of Code",
          img: "ladies",
          link: "www.vuejs.org",
        },
        {
          name: "Netflix",
          img: "netflix",
          link: "www.vuejs.org",
        },
       
      ],
      album:[
        {
          img:"1.JPG",
          description:"Lorem ipsum blabla"
        },
        {
          img:"2.JPG",
          description:"Lorem ipsum blabla"
        },
        {
          img:"3.JPG",
          description:"Lorem ipsum blabla"
        },
        {
          img:"4.JPG",
          description:"Lorem ipsum blabla"
        }
      ]
    };
  },
};
</script>
<style scoped>


.presentation-section {
  display: flex;
  width: 100%;
    flex-wrap: wrap;

}
.presentation-left {
  width: 100%;
      flex:50%;

}
.presentation-left button{
  margin-top:16px;
}
.about-slider {
  width: 100%;
    flex:50%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.05);
  padding: 15px;
    position: relative;
    min-height:310px;
}
.about-desktop{
  display:block;
}
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 50px;
}
.alt-column{
  width:100%;
  flex:100%;
  padding:10px;
}
.column {
  width: 100%;
  flex: 50%;
  max-width: 50%;
  padding: 10px;
}
.category-title {
  margin-bottom: 15px;
}
.icons {
  display: flex;
  flex-wrap: wrap;
}
.icon {
  margin-right: 10px;
}
.button{
  position:absolute;
  bottom:0;
  right:0;
  width:100%;
  display:flex;
  justify-content: flex-end;
  margin:0px 20px 20px 0px;
}
.alt-about{
    display:none;
  }

@media (max-width: 768px) {
  .about-slider, .presentation-left{
    flex:100%;
  }
  .button{
    display: none;
  }
  .container{
      padding-bottom: 0px;

  }
  .column {
    flex: 100%;
    max-width: 100%;
  }
  .category-filter {
      font-size:16px;
  }
  .alt-about{
    margin-top:32px;
    display:block;
  }
  .about-desktop{
  display:none;
}
}
</style>
