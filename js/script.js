// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Swiper 初始化
  const swiper = new Swiper('.swiper', {
    // 可选参数
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 标签页切换
  const tabs = document.querySelectorAll('.tab-item');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // 移除所有标签的 active 类
      tabs.forEach(t => t.classList.remove('active'));
      // 隐藏所有内容
      tabContents.forEach(c => c.classList.remove('active'));

      // 给当前点击的标签添加 active 类
      tab.classList.add('active');
      // 显示对应的内容
      const tabId = tab.dataset.tab;
      document.getElementById(tabId).classList.add('active');
    });
  });
});
