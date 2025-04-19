<template>
    <div class="card">
      <div class="card-header">
        <img :src="backgroundImage" alt="Project Image" class="card-img-top" style="border-radius: 10px 10px 0 0; width: 100%; height: 150px;" />
      </div>
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <a :href="repoLink" class="repo-btn" target="_blank" rel="noopener noreferrer">🔗 Repo</a>
        <a :href="siteLink" class="repo-btn" target="_blank" rel="noopener noreferrer">🔗 View Site</a>
        <div class="tech-stack">
          <span v-for="tech in technologies" :key="tech" class="tech">{{ tech }}</span>
        </div>
        <p class="description">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      repoLink: String,
      technologies: Array,
      description: String,
      backgroundImage: String,
      siteLink: String,
    },
  };
  </script>
  
  <style scoped>
  .card {
    color: #898a8a;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 250px;
    text-align: center;
  }
  .card-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
  .repo-btn {
    display: inline-block;
    margin: 10px 10px;
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
    background: linear-gradient(to right, #898a8a, #898a8a);
    color: white;
    font-size: 0.85rem;
    padding: 7px 12px;
    border-radius: 20px;
    display: inline-block;
    font-weight: 500;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
    margin: 2px;
  }
  .description {
    font-size: 0.9rem;
    margin-top: 10px;
  }
  </style>
  