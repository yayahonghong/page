<template>
  <nav id="navbar" :class="{ scrolled: isScrolled }">
    <router-link to="/" class="logo">个人品牌</router-link>
    <div class="nav-links" :class="{ active: isMenuOpen }">
      <router-link to="/#home" @click="closeMenu">首页</router-link>
      <router-link to="/#about" @click="closeMenu">关于我</router-link>
      <router-link to="/#projects" @click="closeMenu">项目</router-link>
      <router-link to="/#contact" @click="closeMenu">联系</router-link>
      <router-link to="/blog" @click="closeMenu">博客</router-link>
    </div>
    <div class="menu-toggle" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
}

nav.scrolled {
  background-color: rgba(45, 52, 54, 0.9);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  padding: 1rem 5%;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--light-color);
  text-decoration: none;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--light-color);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
}

.nav-links a:hover {
  color: var(--secondary-color);
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: var(--secondary-color);
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background-color: var(--dark-color);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transition: all 0.5s ease;
  }

  .nav-links.active {
    left: 0;
  }

  .menu-toggle {
    display: block;
  }
}
</style>