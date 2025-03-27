<template>
    <div class="contact-container">
      <!-- Left Side: About Work -->
      <div class="about-work">
        <h2>How I Work</h2>
        <p>
          I believe in delivering high-quality, scalable solutions that meet client needs.
          With expertise in full-stack development, I focus on writing clean, maintainable code
          and collaborating effectively to bring ideas to life.
        </p>
        <p>
          My approach is structured, efficient, and user-centric, ensuring seamless experiences.
          I thrive in dynamic environments and enjoy solving complex challenges.
        </p>
      </div>
  
      <!-- Right Side: Contact Information -->
      <div class="contact-info">
        <h2>Contact Information</h2>
        <p><strong>📍 Location:</strong> Your City, Country</p>
        <p><strong>📧 Email:</strong> your.email@example.com</p>
        <p><strong>📞 Phone:</strong> +123 456 7890</p>
  
        <div class="social-links">
          <a href="#" target="_blank" class="social-btn">🔗 LinkedIn</a>
          <a href="#" target="_blank" class="social-btn">💻 GitHub</a>
          <a href="#" target="_blank" class="social-btn">📧 Email</a>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .contact-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    height: 100vh; /* Full viewport height */
    padding: 20px;
    box-sizing: border-box;
    gap: 20px;
  }
  
  /* Left Side - About Work */
  .about-work {
    flex: 1;
    width: 100%;
    background: #f9f9f9;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  /* Right Side - Contact Info */
  .contact-info {
    flex: 1;
    width: 100%;
    background: #fff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .contact-info h2, .about-work h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
  
  .contact-info p, .about-work p {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  
  .social-links {
    display: flex;
    gap: 15px;
    margin-top: 15px;
  }
  
  .social-btn {
    background: #007bff;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1rem;
    transition: 0.3s ease-in-out;
  }
  
  .social-btn:hover {
    background: #0056b3;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .contact-container {
      flex-direction: column;
      height: auto;
    }
  
    .about-work, .contact-info {
      width: 100%;
      padding: 20px;
    }
  
    .social-links {
      flex-direction: column;
    }
  
    .social-btn {
      display: block;
      text-align: center;
    }
  }
  </style>
  