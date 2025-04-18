<template>
    <section class="section" id="projects">
      <div class="section-title">
        <h2>我的项目</h2>
      </div>
      <div class="projects-grid">
        <ProjectCard 
          title="电子商务平台" 
          description="一个全功能的电子商务网站，使用React和Node.js构建，包含支付网关集成和用户管理系统。"
        />
        <ProjectCard 
          title="任务管理应用" 
          description="一个基于Vue.js的任务管理应用程序，具有实时同步、团队协作和进度跟踪功能。"
        />
        <ProjectCard 
          title="个人理财工具" 
          description="一个帮助用户跟踪支出、预算和投资的可视化个人理财应用程序，使用D3.js进行数据可视化。"
        />
      </div>
    </section>
  </template>
  
  <script>
  import ProjectCard from './ProjectCard.vue'
  
  export default {
    name: 'ProjectsSection',
    components: {
      ProjectCard
    }
  }
  </script>
  
  <style scoped>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
  </style>