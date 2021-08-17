<template>
  <div class="project">
    <div class="thumbnail section">
      <div class="section-content thumbnail-img">
        <img
          :src="
            require('@/assets/projects/' +
              getProject().url +
              '/' +
              getProject().thumbnail)
          "
          alt=""
        />
        <div class="overlay">
          <div class="overlay-text">
            <h1>{{ getProject().title }}</h1>
            <p>{{ getProject().description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-content">
        <div class="info-line">
          <div class="info-title">
            Skills
          </div>
          <div class="info-text">{{ getProject().infobox.skills }}</div>
        </div>
        <div class="info-separator"></div>
        <div class="info-line">
          <div class="info-title">
            Context
          </div>
          <div class="info-text">{{ getProject().infobox.context }}</div>
        </div>
        <div class="info-separator"></div>
        <div class="info-line">
          <div class="info-title">
            Mission
          </div>
          <div class="info-text">{{ getProject().infobox.mission }}</div>
        </div>
        <div class="info-separator"></div>
        <div class="info-line">
          <div class="info-title">
            Time
          </div>
          <div class="info-text">{{ getProject().infobox.time }}</div>
        </div>
        <div class="info-separator"></div>

        <div class="info-line">
          <div class="info-title" v-if="getProject().infobox.links">
            Links
          </div>
          <div class="info-text ">
              <a class="links animated-links" :href="link.link" target="_blank" v-for="(link,i) in getProject().infobox.links" :key="i">
                  {{link.name}}
              </a>

          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-content" v-html="getProject().paragraph"></div>
    </div>
    <div class="section">
      <carousel :perPage="1" class=" section-content">
        <slide
          v-for="(image, i) in getProject().pictures"
          :key="i"
          class="carousel"
        >
          <img
            :src="
              require('@/assets/projects/' + getProject().url + '/' + image)
            "
            alt=""
          />
        </slide>
      </carousel>
    </div>

    <div class="section">
      <div class="section-content lesson-box">
        <h2>What I learned from this project</h2>
        <p v-html="getProject().lesson"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Project",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      selectedProject: {},
      projects: [
        {
          url: "monordo",
          title: "Project 1",
          description:
            "Lorem Ipsum has been the industry's standard dummy text.",
          thumbnail: "project-card.png",
          infobox: {
            skills:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.",
            context:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.",
            mission:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.",
            time: "3 weeks",
            links: [
                {
                    name:"Github",
                    link:"www.github.com"
                }
            ]
          },
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.",
          pictures: ["album/project-card.png", "album/project-card.png"],
          lesson:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.",
        },
        {
          url: "javascriptmas",
          title: "24 Days of Javascriptmas",
          description:
            "Solving problems in Javascript every day unyil Christmas, and filming my solutions explained",
          thumbnail: "project-card.jpeg",
          infobox: {
            skills:
              "Vanilla JS, synthesize explanations and editing fast-paced videos",
            context:
              "December 2020, Scrumba released a 24 Days of Javascriptmas challenge.",
            mission:
              "Solving the exercices, and editing clear and understandable explanation videos",
            time: "24 Days (and not one more)",
            links: [
                {
                    name:"Instagram",
                    link:"https://www.instagram.com/lea.buende/channel/"
                },
                {
                    name:"Linkedin",
                    link:"https://www.linkedin.com/posts/l%C3%A9a-buend%C3%A9-65b440174_il-y-a-14-jours-je-me-suis-lanc%C3%A9-un-nouveau-activity-6744175097650663424-W6Au"
                },

            ]
          },
          paragraph:
            "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
          pictures: ["album/1.png", "album/2.png"],
          lesson:
            "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
        },
      ],
    };
  },
  methods: {
    backgroundStyles(project, thumbnail) {
      return {
        // any other styles you might need to add on as an example
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(@/assets/projects/${project}/${thumbnail}) no-repeat center center`,
        "background-size": "cover",
      };
    },
    getProject() {
      return this.projects.find((x) => x.url == this.$route.params.name);
    },
  },
};
</script>
<style scoped>
.thumbnail {
  height: 350px;
  width: 100%;
}
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
}
.overlay-text {
  position: absolute;
  bottom: 0;
  color: white;
  margin: 15px;
}
.thumbnail-img {
  width: 100vw;
  height: 350px;
  max-width: 950px;
  position: relative;
  overflow: hidden;
}
.thumbnail-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.info-line {
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px 5px 0px;
}
.section-content {
  max-width: 950px;
  width: 100%;
}
.info-title {
  font-weight: bold;
  width: 100px;
}
.info-separator {
  width: 100%;
  height: 1px;
  background-color: #f3c2c1;
}
.section {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}

.carousel {
  padding: 10px;
  height: 500px;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.carousel img {
  height: 100%;
  width: auto;
}
.lesson-box {
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.05);
  padding: 15px;
  width: 100%;
}
.lesson-box p{
    margin-top:16px;
}
.links{
    font-style: italic;
        font-weight: bold;
        font-family: roboto;

    margin-right: 10px;
}

@media (max-width: 1200px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}
@media (max-width: 768px) {
  .info-title,
  .info-text {
    flex: 100%;
  }
  .carousel img {
    width: 100%;
    object-fit: cover;
    height: 300px;
  }
}
</style>
