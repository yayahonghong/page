<template>
    <section class="section" id="contact">
      <div class="section-title">
        <h2>联系我</h2>
      </div>
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">邮箱</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="subject">主题</label>
            <input type="text" id="subject" v-model="form.subject" required>
          </div>
          <div class="form-group">
            <label for="message">消息</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit" class="btn">发送消息</button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        form: {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        // 这里可以添加表单提交逻辑
        console.log('表单提交:', this.form)
        alert('消息已发送！')
        this.resetForm()
      },
      resetForm() {
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.8rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    color: var(--light-color);
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--secondary-color);
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .form-group textarea {
    resize: vertical;
    min-height: 150px;
  }
  </style>