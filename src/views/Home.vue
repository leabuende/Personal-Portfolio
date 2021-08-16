<template>
  <div class="home">
    <Presentation />
    <h2>My latest projects</h2>
    <div class="container">
      <div class="column" v-for="project in projects" :key="project.name">
        <Project
          class="project-card"
          :image="require(`@/assets/projects/monordo/${project.img}`)"
          :name="project.name"
          :description="project.description"
          :skills="project.skills"
        />
      </div>
    </div>
    <div class="see-more-link">
      <router-link to="" class="links  animated-links">See more</router-link>
    </div>
    <h2>A word from my friends and team mates ❤️</h2>
    <Testimonials/>
  </div>
</template>

<script>
// @ is an alias to /src
import Presentation from "../components/Presentation.vue";
import Project from "../components/Project.vue";
import Testimonials from "../components/Testimonials.vue";

export default {
  name: "Home",
  components: {
    Presentation,
    Project,
    Testimonials,
  },
  data() {
    return {
      projects: [
        {
          name: "Project Number One",
          description: "A wonderfully unique project, very fun to do",
          skills: ["Development", "UX/UI Design"],
          img: "project-card.png",
        },
        {
          name: "Project Number Two",
          description: "A wonderfully unique project, very fun to do",
          skills: ["Development", "UX/UI Design"],
          img: "project-card.png",
        },
        {
          name: "Project Number Two",
          description: "A wonderfully unique project, very fun to do",
          skills: ["Development", "UX/UI Design"],
          img: "project-card.png",
        },
      ],
    };
  },
};
</script>
<style scoped>
h2 {
  margin: 50px 0px 15px 0px;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
.column {
  width: 100%;
  flex: 33%;
  max-width: 33%;
  display: flex;
  padding: 10px 10px 10px 0px;
  display: flex;
  justify-content: center;
}
.project-card {
  max-height: 350px;
  overflow: hidden;
}

.see-more-link {
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  color: black;
  font-weight: 400;
}
@media (max-width: 1024px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}
@media (max-width: 768px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
