// 导航栏滚动效果
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// 移动端菜单切换
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

// 平滑滚动（冲突修复关键）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.nav-links').classList.remove('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // 修复URL哈希更新
        if (history.pushState) {
            history.pushState(null, null, this.href);
        } else {
            location.hash = this.getAttribute('href');
        }
    });
});

// 粒子效果初始化（完美保留动画+解决冲突）
document.addEventListener('DOMContentLoaded', function () {
    // 确保粒子容器不拦截点击
    const particlesEl = document.getElementById('particles-js');
    particlesEl.style.pointerEvents = 'none';

    // 粒子配置（保留所有视觉效果）
    particlesJS(particlesEl, {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#6c5ce7" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#6c5ce7",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "detect_on": "parent",  // 关键修改！
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab",
                    "parallax": { "enable": false } // 禁用视差
                },
                "onclick": { "enable": false } // 禁用点击
            },
            "modes": {
                "grab": { "distance": 140, "line_linked": { "opacity": 1 } }
            }
        },
        "retina_detect": true
    });

    // 强制重绘解决部分浏览器兼容问题
    setTimeout(() => particlesEl.style.visibility = 'visible', 100);
});