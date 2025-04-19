<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="fade-in">{{ home.title }}</h1>
      <p>{{home.description}}</p>

      <div class="social-icons fade-in">
        <a
          v-for="(link, index) in socialLinks"
          :key="index"
          :href="link.url"
          target="_blank"
          class="icon"
          rel="noopener noreferrer"
        >
          <i :class="link.icon"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      home: {
        title: "Junior Developer",
        description:
          "I aspire to work for an organization that extends opportunities for extensive learning and skill enhancement to all its employees by providing a professional environment. I see myself contributing to explore my maximum potential as a self-motivated, energetic professional and utilize my skills in the organization.",
      },
      socialLinks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/mattedaramesh/",
          icon: "fab fa-linkedin",
        },
        {
          name: "GitHub",
          url: "https://github.com",
          icon: "fab fa-github",
        },
      ],
    };
  },
  
}
</script>

<style scoped>
/* Hero Section Styling */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  text-align: left;
  padding: 2rem;
}

.hero-content {
  max-width: 600px;
}

/* Heading and Paragraph */
h1 {
  font-size: 2.5rem;
  color: #898a8a;
  margin-bottom: 1rem;
  animation: fadeIn 1s ease-in-out;
}

p {
  font-size: 1.2rem;
  color: #898a8a;
  line-height: 1.6;
  animation: fadeIn 1.5s ease-in-out;
}

/* Social Icons */
.social-icons {
  margin-top: 1.5rem;
  display: flex;
  gap: 15px;
  animation: fadeIn 2s ease-in-out;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid #898a8a;
  border-radius: 50%;
  color: #898a8a;
  font-size: 1.5rem;
  transition: 0.3s ease-in-out;
}

.icon:hover {
  background: #898a8a;
  color: white;
}

/* Fade-in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    text-align: center;
  }
}
</style>
