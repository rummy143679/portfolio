<template>
  <div class="skills-section">
    <h2 class="title">{{title}}</h2>
    <div class="skills-container">
      <div class="skill-box" v-for="(skill, index) in skills" :key="index">
        <div class="icon-container">
          <img :src="skill.image" :alt="skill.title" class="skill-icon" />
        </div>
        <h3>{{ skill.title }}</h3>
        <div class="skill-list">
          <span v-for="(item, idx) in skill.list" :key="idx" class="skill-pill">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Skills",
      skills: [
        {
          title: "Languages",
          image: "/Learned-skills.png",
          list: ["JavaScript", "C#"],
        },
        {
          title: "Web Technologies",
          image: "/web-development.png",
          list: ["React.Js", "Vue.Js", "HTML", "CSS", "Bootstrap", "JQuery","ASP.NET Core", "Express.js" ],
        },
        {
          title: "Databases",
          image: "/data-base.png",
          list: ["MongoDB", "MySQL"],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* General Styling */
.skills-section {
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Title Styling */
.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  color: #898a8a;
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

/* Skills Grid */
.skills-container {
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  animation: fadeInDown 0.8s ease-out forwards;
}

/* Skill Card - Glassmorphism Effect */
.skill-box {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 0.5rem;
  width: 300px;
  text-align: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skill-box:hover {
  transform: translateY(-8px);
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
}

/* Image Section - Covers 70% of Card */
.icon-container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 15px;
}

.skill-icon {
  width: 100%;
}

/* Title */
h3 {
  font-size: 1.3rem;
  font-weight: bold;
  color: #898a8a;
  margin-bottom: 10px;
}

/* Skill Pills */
.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 10px;
}

.skill-pill {
  background: linear-gradient(to right, #898a8a, #898a8a);
  color: white;
  font-size: 0.85rem;
  padding: 7px 12px;
  border-radius: 20px;
  display: inline-block;
  font-weight: 500;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
}

/* Animation */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .skills-container {
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
  }

  .skill-box {
    width: 100%;
    max-width: 400px;
    padding: 1.5rem;
  }

  /* Fix Icon Size */
  .icon-container {
    width: 80px;
    height: 80px;
  }

  .skill-icon {
    width: 100%;
  }

  /* Adjust Heading */
  h3 {
    font-size: 1.2rem;
  }

  /* Adjust Skill Pills */
  .skill-list {
    flex-direction: row;
    justify-content: center;
  }

  .skill-pill {
    font-size: 0.9rem;
    padding: 8px 12px;
  }
  
}
</style>
