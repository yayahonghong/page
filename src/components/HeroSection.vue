<template>
    <section class="hero" id="home">
      <div class="hero-content">
        <h1>你好，我是<span class="highlight">[你的名字]</span></h1>
        <h2>前端开发工程师 / UI设计师</h2>
        <p>我专注于创建美观、响应式的网站和应用程序，致力于提供最佳用户体验。通过代码将创意变为现实是我的热情所在。</p>
        <router-link to="#contact" class="btn">联系我</router-link>
        <div class="social-icons">
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection'
  }
  </script>
  
  <style scoped>
  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .hero-content {
    max-width: 600px;
  }
  
  .hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .hero h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
    color: var(--secondary-color);
  }
  
  .hero p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  .social-icons {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
    position: relative;
    z-index: 2;
  }
  
  .social-icons a {
    color: var(--light-color);
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }
  
  .social-icons a:hover {
    color: var(--secondary-color);
    transform: translateY(-3px);
  }
  </style>