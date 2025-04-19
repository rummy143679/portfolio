<template>
  <div class="portfolio">
    <h2 class="title">{{title}}</h2>
    <div class="category">
      <h3>{{subTitle}}</h3>
      <div class="projects">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :repoLink="project.repoLink"
          :technologies="project.technologies"
          :description="project.description"
          :backgroundImage="project.backGroundImage"
          :siteLink="project.siteLink"
          class="fade-in"
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
      title: "Projects",
      subTitle: "Development",
      projects: [
        {
          title: "Weather Dashboard",
          repoLink: "https://github.com/rummy143679/weather-app",
          technologies: ["Vue", "JavaScript", "Bootstrap", "HTML", "CSS"],
          description: "Weather dashboard with 5-day forecast.",
          backGroundImage: "/weather-dashboard.png",
          siteLink: "https://weather-forecast-app-services.netlify.app/"
        },
        {
          title: "Tenzies Game",
          repoLink: "https://github.com/rummy143679/Tenzies-game",
          technologies: ["React.Js", "JavaScript", "HTML", "CSS"],
          description: "Tenzies game with dice rolling and score tracking.",
          backGroundImage: "tenzies-game.png",
          siteLink: "https://tenzies-game-appl.netlify.app/"
        },
        {
          title: "Find Your Home",
          repoLink: "https://github.com/rummy143679/find-home",
          technologies: ["React.Js", "JavaScript", "Bootstrap", "HTML", "CSS"],
          description: "Real estate website with property listings and filters.",
          backGroundImage: "find-home.png",
          siteLink: "https://selle-or-find-home.netlify.app/"
        },
        {
          title: "Portfolio Website",
          repoLink: "https://github.com/rummy143679/portfolio",
          technologies: ["Vue.js", "JavaScript", "JQuery", "HTML", "CSS"],
          description: "An animated portfolio website.",
          backGroundImage: "/portfolio-img.png",
          siteLink: "https://mattedaramesh.netlify.app/"
        },
        
      ],
    };
  },
};
</script>

<style scoped>
/* General Styling */
.portfolio {
  text-align: center;
  max-width: 1200px;
  margin: auto;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  display: inline-block;
  color: #898a8a;
  margin-bottom: 0;
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

h3{
  color: #898a8a;
  margin-top: 0;
}

/* Category */
.category {
  margin-top: 20px;
}

/* Projects Grid */
.projects {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Individual Project Card */
.projects > * {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.projects > *:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .projects {
    flex-direction: column;
    align-items: center;
  }
}
</style>
