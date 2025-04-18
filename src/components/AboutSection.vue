<template>
    <section class="section" id="about">
      <div class="section-title">
        <h2>关于我</h2>
      </div>
      <div class="about-content">
        <div class="about-img">
          <img src="https://via.placeholder.com/400x500" alt="个人照片" class="floating">
        </div>
        <div class="about-text">
          <h3>专业前端开发人员</h3>
          <p>我是一名充满激情的前端开发人员，拥有5年以上的行业经验。我专注于使用现代技术如React、Vue.js和TypeScript构建高性能的Web应用程序。</p>
          <p>我的工作不仅仅是编写代码，而是创造能够解决实际问题并提供卓越用户体验的数字产品。我相信好的设计和技术应该无缝结合。</p>
          <div class="skills">
            <div class="skill-item">
              <div class="skill-info">
                <span>HTML/CSS</span>
                <span>95%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 95%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span>JavaScript</span>
                <span>90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span>React</span>
                <span>85%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span>UI/UX设计</span>
                <span>80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 80%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutSection'
  }
  </script>
  
  <style scoped>
  .about-content {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  
  .about-img {
    flex: 1;
    position: relative;
  }
  
  .about-img img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;
  }
  
  .about-img:hover img {
    transform: scale(1.03);
  }
  
  .about-text {
    flex: 1;
  }
  
  .about-text h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--secondary-color);
  }
  
  .about-text p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    opacity: 0.9;
  }
  
  .skills {
    margin-top: 2rem;
  }
  
  .skill-item {
    margin-bottom: 1.5rem;
  }
  
  .skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  
  .skill-bar {
    height: 8px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
  }
  
  .skill-progress {
    height: 100%;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    border-radius: 10px;
    transition: width 1s ease;
  }
  </style>