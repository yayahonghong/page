<template>
    <div class="blog-view">
      <div class="blog-header">
        <h1>我的博客</h1>
        <p>分享我的技术见解、项目经验和学习心得</p>
      </div>
      <BlogSection />
    </div>
  </template>
  
  <script>
  import BlogSection from '../components/BlogSection.vue'
  
  export default {
    name: 'BlogView',
    components: {
      BlogSection
    }
  }
  </script>
  
  <style scoped>
  .blog-header {
    text-align: center;
    padding: 6rem 0 3rem;
    position: relative;
  }
  
  .blog-header h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .blog-header p {
    font-size: 1.2rem;
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto;
  }
  </style>