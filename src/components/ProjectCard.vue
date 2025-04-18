<template>
    <div class="project-card">
      <div class="project-img">
        <!-- <img src="https://via.placeholder.com/600x400" :alt="title"> -->
      </div>
      <div class="project-info">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <div class="project-links">
          <a href="#"><i class="fas fa-external-link-alt"></i> 查看演示</a>
          <a href="#"><i class="fab fa-github"></i> 源代码</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .project-card {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
  }
  
  .project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  .project-img {
    height: 200px;
    overflow: hidden;
    background-color: rgba(108, 92, 231, 0.1);
  }
  
  .project-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .project-card:hover .project-img img {
    transform: scale(1.1);
  }
  
  .project-info {
    padding: 1.5rem;
  }
  
  .project-info h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  
  .project-info p {
    margin-bottom: 1rem;
    opacity: 0.8;
    line-height: 1.6;
  }
  
  .project-links {
    display: flex;
    gap: 1rem;
  }
  
  .project-links a {
    color: var(--light-color);
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }
  
  .project-links a:hover {
    color: var(--secondary-color);
  }
  </style>