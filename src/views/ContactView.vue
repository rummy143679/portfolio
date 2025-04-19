<template>
  <div class="contact-container">
    <!-- About Work -->
    <div class="about-work">
      <h2>{{aboutWork}}</h2>
      <p 
        v-for="( para, index) in description"
        :key="index" >{{para}}</p>
    </div>

    <!-- Contact Information -->
    <div class="contact-info">
      <h2>{{contactInfo}}</h2>
      <p><strong>📍 {{ descriptionTitle.location }}:</strong>{{contactDetails.city}}, {{contactDetails.country}}</p>
      <p><strong>📧 {{ descriptionTitle.email }}:</strong> {{contactDetails.email}}</p>
      <p><strong>📞 {{ descriptionTitle.phone }}:</strong> {{contactDetails.phone}}</p>

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
  </div>
</template>

<script>
  export default {
    name: "ContactView",
    data() {
      return {
        aboutWork: "How I Work",
        contactInfo: "Contact Information",
        contactDetails:{
          city: "Hyderabad",
          country: "India",
          email:"mattedaramesh27@gmail.com",
          phone: "+91 833396 9142",
        },
        descriptionTitle:{
          location: "Location",
          email: "Email",
          phone: "Phone",
        },
        description: [
          "I believe in delivering high-quality, scalable solutions that meet client needs. With expertise in full-stack development, I focus on writing clean, maintainable code and collaborating effectively to bring ideas to life.",
          "My approach is structured, efficient, and user-centric, ensuring seamless experiences. I thrive in dynamic environments and enjoy solving complex challenges.",
        ],
        socialLinks: [
          {
            name: "LinkedIn",
            icon: "fab fa-linkedin",
            url: "https://www.linkedin.com",
          },
          {
            name: "GitHub",
            icon: "fab fa-github",
            url: "https://github.com",
          },
        ],
      };
    },
  };
</script>

<style scoped>
/* Main container */
.contact-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 40px;
  gap: 30px;
}

/* Left Side - About Work */
.about-work {
  flex: 1;
  background: #f9f9f9;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

/* Right Side - Contact Info */
.contact-info {
  flex: 1;
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateX(50px);
  opacity: 0;
  animation: slideIn 1s ease-in-out forwards;
}

/* Titles */
.contact-info h2, .about-work h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #898a8a;
  text-transform: uppercase;
}

/* Paragraphs */
.contact-info p, .about-work p {
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: #898a8a;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
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

/* Responsive Design */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    height: auto;
    margin-top: 60px;
  }

  .about-work, .contact-info {
    width: 90%;
    padding: 25px;
    animation: fadeIn 1s ease-in-out forwards;
  }

  .social-links {
    flex-direction: column;
    gap: 10px;
  }

  .social-btn {
    text-align: center;
    width: 90%;
  }
}
</style>
