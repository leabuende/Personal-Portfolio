<template>
  <div class="works">
    <div class="categories">
      <h2 class="category-filter" @click="filterProjects('design')">
        Design
      </h2>
      <h2 class="category-filter" @click="filterProjects('code')">
        Code
      </h2>
      <h2 class="category-filter" @click="filterProjects('extra')">
        Extra
      </h2>
       <h2 class="category-filter" @click="filterProjects('all')">
        All
      </h2>
    </div>
      <div class="container">
        <div class="column" v-for="project in selectedProjects" :key="project.name">
          <Project
            class="project-card"
            :image="require(`@/assets/projects/monordo/${project.img}`)"
            :name="project.name"
            :description="project.description"
            :skills="project.skills"
          />
        </div>
      </div>
    <h2>A word from my friends and team mates ❤️</h2>
    <Testimonials />
  </div>
</template>

<script>
import Project from "../components/Project.vue";
import Testimonials from "../components/Testimonials.vue";

export default {
  name: "Works",
  components: {
    Project,
    Testimonials,
  },
  data() {
    return {
    toggleFilter:false,
    selectedProjects:"",
      projects: [
        {
          name: "Project Number One",
          description: "A wonderfully unique project, very fun to do",
          skills: ["Development", "UX/UI Design"],
          img: "project-card.png",
          tags: ["design", "code"],
        },
        {
          name: "Project Number Two",
          description: "A wonderfully unique project, very fun to do",
          skills: ["Development", "UX/UI Design"],
          img: "project-card.png",
          tags: ["design"],
        },
        {
          name: "Project Number Three",
          description: "A wonderfully unique project, very fun to do",
          skills: ["Development", "UX/UI Design"],
          img: "project-card.png",
          tags: ["code"],
        },
        {
          name: "Project Number Four",
          description: "A wonderfully unique project, very fun to do",
          skills: ["Development", "UX/UI Design"],
          img: "project-card.png",
          tags: ["design", "code"],
        },
        {
          name: "Project Number Five",
          description: "A wonderfully unique project, very fun to do",
          skills: ["Development", "UX/UI Design"],
          img: "project-card.png",
          tags: ["design", "extra"],
        },
        {
          name: "Project Number Six",
          description: "A wonderfully unique project, very fun to do",
          skills: ["Development", "UX/UI Design"],
          img: "project-card.png",
          tags: ["extra", "code"],
        },
        {
          name: "Project Number Seven",
          description: "A wonderfully unique project, very fun to do",
          skills: ["Development", "UX/UI Design"],
          img: "project-card.png",
          tags: ["extra"],
        },
      ],
    };
  },
  created(){
    this.selectedProjects=this.projects;
  },
  methods:{
      filterProjects(category){
          this.selectedProjects=[]
          this.projects.forEach(e=>{
              if(e.tags.includes(category)){
                this.selectedProjects.push(e)
              }
          })
          if(category=='all'){
              this.selectedProjects=this.projects;
          }
          console.log(this.selectedProjects)
      },
     
  }
};
</script>
<style scoped>
.categories {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}
.category-filter {
  margin: 0px 10px 0px 10px;
  padding: 5px;
  letter-spacing: 0.08em;
  color: black;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 50%,
    black 50%
  );
  background-position: -0% 0;
  background-size: 200% auto;
  color: #222;
  font-size: 20px;
  line-height: 1.15em;
  text-decoration: none;
  transition: background-position 0.5s ease-out;
}
.category-filter:hover {
  background-position: -99.99% 0;
  color: white;
  cursor: pointer;
}

.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.column {
  width: 100%;
  flex: 33.33%;
  max-width: 33.33%;
  display: flex;
  padding: 10px;
  display: flex;
  justify-content: center;
}
.project-card {
  max-height: 350px;
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
  .category-filter {
      font-size:16px;
  }
}
</style>
