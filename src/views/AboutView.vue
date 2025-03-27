  <template>
    <div class="about">
      <h2 class="title">About Me</h2>
      <div class="about-container">
        <!-- Education Section -->
        <div class="education">
          <h3>Education</h3>
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
          <h3>Experience</h3>
          <div class="timeline">
            <div class="timeline-item" v-for="(exp, index) in experience" :key="index">
              <div class="circle"></div>
              <div class="content">
                <h4>{{ exp.company }}</h4>
                <p>{{ exp.role }}</p>
                <span>{{ exp.duration }}</span>
                <div class="skills">
                  <span v-for="(skill, i) in exp.skills" :key="i">{{ skill }}</span>
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
        education: [
          {
            institution: "Jawaharlal Nehru Technological University",
            degree: "Masters of Business Administration (Fintech) (8.0/10.0)",
            duration: "Aug, 2018 - Sep, 2020",
          },
        ],
        experience: [
          {
            company: "Agro Business Solutions (Impegno), Hyderabad",
            role: "Front End Developer",
            duration: "Nov, 2021 - Present",
            skills: ["Vue.js", "Vuex", "Vue Router", "Bootstrap", "JavaScript", "HTML", "SCSS", "Web API"],
          },
          {
            company: "Agro Business Solutions (Impegno), Hyderabad",
            role: "Front End Developer",
            duration: "Nov, 2021 - Present",
            skills: ["Vue.js", "Vuex", "Vue Router", "Bootstrap", "JavaScript", "HTML", "SCSS", "Web API"],
          }
        ],
      };
    },
  };
  </script>

  <style scoped>
  .about {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 1rem;
    text-align: center;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
    position: relative;
    display: inline-block;
    color: #898a8a;
  }

  .title::after {
    content: "";
    display: block;
    width: 500%; /* Increase this for a longer line */
    max-width: 500px; /* Optional: Set a max width */
    height: 1px; /* Line thickness */
    background-color: #ccc; /* Line color */
    margin: 8px auto 0; /* Space between text and line */
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }



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
    transform: translateY(0%);
  }

  /* Content Styling */
  .timeline-item .content {
    margin-top: -18px;
    margin-left: 35px;
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

  .skills span {
    background: #e8ecef;
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #333;
    font-weight: bold;
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
      padding-left: 20px;
    }

    .timeline::before {
      left: -25px;
    }

    .timeline-item .circle {
      left: -2px;
    }

    .timeline-item .content {
      margin-left: 25px;
    }
    .title::after {
      width: 500%; /* Ensure it stays within mobile view */
      max-width: 500px; /* Limit max width */
    }
  }
  </style>
