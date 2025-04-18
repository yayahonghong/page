<template>
    <section class="section" id="blog">
      <div class="section-title">
        <h2>我的博客</h2>
      </div>
      <div class="blog-container">
        <div class="blog-post" v-for="post in posts" :key="post.id">
          <div class="blog-post-img">
            <img :src="post.image" :alt="post.title">
          </div>
          <div class="blog-post-content">
            <div class="blog-post-meta">
              <span class="date">{{ post.date }}</span>
              <span class="category">{{ post.category }}</span>
            </div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <router-link :to="`/blog/${post.id}`" class="read-more">阅读更多</router-link>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'BlogSection',
    data() {
      return {
        posts: [
          {
            id: 1,
            title: 'Vue 3 组合式 API 入门指南',
            excerpt: '探索 Vue 3 的组合式 API 如何改变我们编写组件的方式，以及它带来的优势。',
            date: '2023-05-15',
            category: '前端开发',
            image: 'https://via.placeholder.com/600x400'
          },
          {
            id: 2,
            title: '响应式设计的最佳实践',
            excerpt: '了解如何创建真正响应式的网站，适应各种设备和屏幕尺寸。',
            date: '2023-04-22',
            category: 'UI/UX',
            image: 'https://via.placeholder.com/600x400'
          },
          {
            id: 3,
            title: 'JavaScript 性能优化技巧',
            excerpt: '提升你的 JavaScript 代码性能的实用技巧和策略。',
            date: '2023-03-10',
            category: '编程',
            image: 'https://via.placeholder.com/600x400'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .blog-container {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .blog-post {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .blog-post:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .blog-post-img {
    flex: 1;
    min-width: 300px;
    overflow: hidden;
  }
  
  .blog-post-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .blog-post:hover .blog-post-img img {
    transform: scale(1.05);
  }
  
  .blog-post-content {
    flex: 2;
    padding: 2rem;
  }
  
  .blog-post-meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: var(--secondary-color);
  }
  
  .blog-post h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--light-color);
  }
  
  .blog-post p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    opacity: 0.9;
  }
  
  .read-more {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 600;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .read-more::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--secondary-color);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  .read-more:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  @media (max-width: 768px) {
    .blog-post {
      flex-direction: column;
    }
    
    .blog-post-img {
      min-width: 100%;
      height: 200px;
    }
  }
  </style>