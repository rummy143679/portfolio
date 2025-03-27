<template>
    <div class="skills-section">
      <h2 class="title">skills.</h2>
      <div class="skills-container">
        <div class="skill-box" v-for="(skill, index) in skills" :key="index">
          <img :src="skill.icon" :alt="skill.title" class="skill-icon" />
          <h3>{{ skill.title }}</h3>
          <div class="line"></div>
          <p>{{ skill.list.join(", ") }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        skills: [
          {
            title: "languages",
            icon: "https://cdn-icons-png.flaticon.com/128/919/919828.png", // Change this to your own icon
            list: ["JavaScript", "C#"],
          },
          {
            title: "web technologies",
            icon: "https://cdn-icons-png.flaticon.com/128/919/919826.png", // Change this to your own icon
            list: ["Vue", "HTML", "CSS"],
          },
          {
            title: "databases",
            icon: "https://cdn-icons-png.flaticon.com/128/919/919836.png", // Change this to your own icon
            list: ["MongoDB", "MySQL"],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .skills-section {
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
  
  .skills-container {
    display: flex;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
  
  .skill-box {
    text-align: center;
    flex: 1;
    min-width: 200px;
    max-width: 250px;
  }
  
  .skill-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }
  
  .line {
    width: 60%;
    height: 1px;
    background-color: #ccc;
    margin: 10px auto;
  }
  
  p {
    font-size: 1rem;
    color: #555;
  }
  </style>
  