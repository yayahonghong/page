<template>
    <div class="home-view">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <BlogSection />
      <footer>
        <div class="container">
          <p>&copy; 2023 [你的名字]. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  import HeroSection from '../components/HeroSection.vue'
  import AboutSection from '../components/AboutSection.vue'
  import ProjectsSection from '../components/ProjectsSection.vue'
  import ContactSection from '../components/ContactSection.vue'
  import BlogSection from '../components/BlogSection.vue'
  
  export default {
    name: 'HomeView',
    components: {
      HeroSection,
      AboutSection,
      ProjectsSection,
      ContactSection,
      BlogSection
    }
  }
  </script>
  
  <style scoped>
  footer {
    text-align: center;
    padding: 2rem 0;
    background-color: rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
  }
  
  footer p {
    opacity: 0.7;
  }
  </style>