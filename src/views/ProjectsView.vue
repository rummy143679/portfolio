<template>
  <div class="portfolio">
    <h2 class="title">portfolio.</h2>
    <div class="category">
      <h3>development</h3>
      <div class="projects">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :repo-link="project.repoLink"
          :technologies="project.technologies"
          :description="project.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "weather-dashboard",
          repoLink: "#",
          technologies: ["Vue", "JavaScript", "HTML", "CSS"],
          description: "Weather dashboard for cities with forecast for next five days",
        },
        {
          id: 2,
          title: "TMDB",
          repoLink: "#",
          technologies: ["Vue", "JavaScript", "HTML", "CSS"],
          description: "TMDB - The Movie Database",
        },
        {
          id: 1,
          title: "weather-dashboard",
          repoLink: "#",
          technologies: ["Vue", "JavaScript", "HTML", "CSS"],
          description: "Weather dashboard for cities with forecast for next five days",
        },
        {
          id: 2,
          title: "TMDB",
          repoLink: "#",
          technologies: ["Vue", "JavaScript", "HTML", "CSS"],
          description: "TMDB - The Movie Database",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.portfolio {
  text-align: center;
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.title::after {
  content: "";
  display: block;
  width: 500%;
  max-width: 500px;
  height: 1px;
  background-color: #ccc;
  margin: 8px auto 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.category {
  margin-top: 20px;
}
.projects {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #898a8a;
  font-weight: bold;
}
</style>
