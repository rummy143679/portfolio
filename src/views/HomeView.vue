<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="fade-in">Hello there!</h1>
      <p class="fade-in">
        I aspire to work for an organization that extends opportunities for extensive learning 
        and skill enhancement to all its employees by providing a professional environment. 
        I see myself contributing to explore my maximum potential as a self-motivated, 
        energetic professional and utilize my skills in the organization.
      </p>

      <div class="social-icons fade-in">
        <a href="https://www.linkedin.com" target="_blank" class="icon">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com" target="_blank" class="icon">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hero Section Styling */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background: #f8f9fa;
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
  color: #222;
  margin-bottom: 1rem;
  animation: fadeIn 1s ease-in-out;
}

p {
  font-size: 1.2rem;
  color: #555;
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
