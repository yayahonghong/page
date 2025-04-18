<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
/* 全局样式 */
:root {
  --primary-color: #6c5ce7;
  --secondary-color: #00cec9;
  --dark-color: #2d3436;
  --light-color: #f5f6fa;
  --accent-color: #fd79a8;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: var(--dark-color);
  color: var(--light-color);
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  position: relative;
  z-index: 1;
}

.section {
  padding: 6rem 0;
  position: relative;
  z-index: 1;
}

.section-title {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.section-title h2 {
  font-size: 2.5rem;
  display: inline-block;
  position: relative;
  padding-bottom: 1rem;
}

.section-title h2::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 3px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(108, 92, 231, 0.4);
  position: relative;
  z-index: 2;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(108, 92, 231, 0.6);
}

/* 动画 */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.floating {
  animation: float 6s ease-in-out infinite;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .about-content {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero h2 {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .hero h1 {
    font-size: 2rem;
  }

  .btn {
    padding: 0.6rem 1.5rem;
  }

  .section-title h2 {
    font-size: 2rem;
  }
}
</style>