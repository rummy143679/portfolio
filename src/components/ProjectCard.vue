<template>
    <div class="card">
      <h4 class="card-title">{{ title }}</h4>
      <a :href="repoLink" class="repo-btn">🔗 Repo</a>
      <div class="tech-stack">
        <span v-for="tech in technologies" :key="tech" class="tech">{{ tech }}</span>
      </div>
      <p class="description">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      repoLink: String,
      technologies: Array,
      description: String,
    },
  };
  </script>
  
  <style scoped>
  .card {
    background: white;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 250px;
    text-align: center;
  }
  .card-title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .repo-btn {
    display: inline-block;
    margin: 10px 0;
    padding: 5px 10px;
    background: #e0e0e0;
    border-radius: 5px;
    text-decoration: none;
    font-size: 0.9rem;
  }
  .tech-stack {
    margin-top: 10px;
  }
  .tech {
    display: inline-block;
    background: #e0e0e0;
    padding: 3px 8px;
    margin: 2px;
    border-radius: 5px;
    font-size: 0.8rem;
  }
  .description {
    font-size: 0.9rem;
    margin-top: 10px;
  }
  </style>
  