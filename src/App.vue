<template>
  <nav class="navbar">
    <div class="logo">Matteda Ramesh.</div>
    <div class="burger" :class="{ open: isOpen }" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="nav-links" :class="{ open: isOpen }">
      <li v-for="(link, index) in links" :key="index" @click="closeMenu">
        <RouterLink :to="link.path">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </nav>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
      ],
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #898a8a;
  color: white;
  position: fixed;
  width: 100vw;
  max-width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

.burger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.burger span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 5px;
  transition: all 0.3s ease-in-out;
}

.burger.open span:nth-child(1) {
  transform: rotate(45deg) translate(9px, 9px);
}

.burger.open span:nth-child(2) {
  opacity: 0;
}

.burger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(10px, -10px);
}


@media screen and (max-width: 768px) {
  .burger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100vw;
    background: #898a8a;
    flex-direction: column;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-links li {
    margin: 1rem 0;
    text-align: center;
  }
}
</style>