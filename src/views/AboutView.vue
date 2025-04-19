<template>
  <div class="about">
    <h2 class="title">{{title}}</h2>
    <div class="about-container">
      <!-- Education Section -->
      <div class="education">
        <h3>{{educationTitle}}</h3>
        <div class="timeline">
          <div class="timeline-item" v-for="(edu, index) in education" :key="index">
            <div class="circle"></div>
            <div class="content">
              <h4>{{ edu.institution }}</h4>
              <p>{{ edu.degree }}</p>
              <span>{{ edu.duration }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="experience">
        <h3>{{experienceTitle}}</h3>
        <div class="timeline">
          <div class="timeline-item" v-for="(exp, index) in experience" :key="index">
            <div class="circle"></div>
            <div class="content">
              <h4>{{ exp.company }}</h4>
              <p>{{ exp.role }}</p>
              <span>{{ exp.duration }}</span>
              <div class="skills">
                <span v-for="(skill, i) in exp.skills" :key="i" class="skill-pill">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "About Me",
      educationTitle: "Education",
      experienceTitle: "Experience",
      education: [
        {
          institution: "Jawaharlal Nehru Technological University",
          degree: "Bacherol of Technology (Computer Science Engineering) (6.1/10.0)",
          duration: "Aug, 2014 - Oct, 2020",
        },
      ],
      experience: [
        {
          company: "Agro Business Solutions (Impegno), Hyderabad",
          role: "Junior Developer",
          duration: "Nov, 2023 - Apr, 2025",
          skills: ["Vue.js","Bootstrap", "JavaScript", "HTML", "SCSS", "C#","ASP.NET Core","SQL","Linq","Web API"],
        },
        {
          company: "IVIS International PVT LTD, Hyderabad",
          role: "Software Engineer Trainee",
          duration: "Jan, 2022 - Aug, 2022",
          skills: ["JavaScript", "Bootstrap", "HTML","CSS", "C#", "ASP.NET core MVC", ],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* General Styling */
.about {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

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

/* About Sections */
.about-container {
  display: flex;
  justify-content: space-between;
  text-align: left;
  gap: 2rem;
  align-items: flex-start;
}

.education,
.experience {
  width: 48%;
  position: relative;
}

.education{
  animation: slideIn-left 1s ease-in-out forwards;
}

.experience {
  animation: slideIn-right 1s ease-in-out forwards;
}

/* Timeline Vertical Line */
.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #ccc;
}

/* Timeline Item */
.timeline-item {
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: 2rem;
}

/* Circles on Timeline */
.timeline-item .circle {
  width: 15px;
  height: 15px;
  background-color: #f28c53;
  border-radius: 50%;
  position: absolute;
  left: -26px;
  top: 10px;
}

/* Content Styling */
.timeline-item .content {
  margin-left: 35px;
  margin-top: -18px;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #898a8a;
  font-weight: bold;
}

h4 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #898a8a;
}

p {
  font-size: 1rem;
  color: #898a8a;
  margin: 5px 0;
}

span {
  font-size: 0.9rem;
  color: #888;
}

/* Skills Styling */
.skills {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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

@keyframes slideIn-left {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideIn-right {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-20px);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
    gap: 2rem;
  }

  .education,
  .experience {
    width: 100%;
  }

  .timeline {
    padding-left: 25px;
  }

  .timeline::before {
    left: 5px;
  }

  .timeline-item .circle {
    left: -27px;
    top: 8px;
  }

  .timeline-item .content {
    margin-left: 25px;
    margin-top: -20px;
  }

  .title::after {
    width: 100%;
    max-width: 250px;
  }
}
</style>
