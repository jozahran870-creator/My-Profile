document.addEventListener('DOMContentLoaded', () => {
  // 🟢 المهارات
  const skills = [
    { name: 'شاعر', video: 'videos/1.mp4' },
    { name: 'روائي', video: 'videos/2.mp4' },
    { name: 'ممرّض', video: 'videos/3.mp4' },
  { name: 'مصمم', video: 'videos/4.mp4', muted: true }
];
  const skillsList = document.getElementById('skillsList');
  skills.forEach(skill => {
    const el = document.createElement('div');
    el.className = 'skill-item';
    el.innerHTML = `
      <video src="${skill.video}" autoplay loop muted playsinline></video>
      <span>${skill.name}</span>
    `;
    // تشغيل الصوت لما تدوس
    const video = el.querySelector('video');
    el.addEventListener('mouseenter', () => { video.muted = false; video.play(); });
    el.addEventListener('mouseleave', () => { video.muted = true; });
    skillsList.appendChild(el);
  });
// 🟠 المشاريع (4 كروت)
const projects = [
  { title: 'كلمات زهران', img: 'img/5.jpeg', link: 'https://jozahran870-creator.github.io/Zahran_Words/' },
  { title: 'المصحف الإلكتروني', img: 'img/6.jpeg', link: 'https://jozahran870-creator.github.io/-/' },
  { title: 'السبحة الإلكترونية', img: 'img/7.jpeg', link: 'https://jozahran870-creator.github.io/Sebha/' },
  { title: 'القطة المشمشية', img: 'img/8.jpeg', link: 'https://example4.com' }
];
  const projectsList = document.getElementById('projectsList');
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="card-content">
        <h3>${p.title}</h3>
      </div>
    `;
    card.addEventListener('click', () => {
      window.open(p.link, '_blank');
    });
    projectsList.appendChild(card);
  });
  // 📨 فورم التواصل
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log('📩 رسالة هتتبعت:', data);
    alert('✅ تم استلام الرسالة (تجريبي) 😂');
    e.target.reset();
  });
  // ✨ أنيميشن الدخول
  const cards = document.querySelectorAll('.project-card, .skill-item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.2 });
  cards.forEach(card => observer.observe(card));

  // 📸 تكبير الصورة
  const modal = document.getElementById("avatarModal");
  const avatar = document.querySelector(".avatar");
  const bigAvatar = document.getElementById("bigAvatar");
  const closeBtn = document.querySelector(".close");
  avatar.onclick = function() {
    modal.style.display = "block";
    bigAvatar.src = avatar.src;
  }
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(e) {
    if (e.target == modal) modal.style.display = "none";
  }
});
// لما تدوس على الافاتار في Three.js
avatarMesh.userData.isBig = false; // حالة الصورة

window.addEventListener('click', (event) => {
  // هنا ممكن تحسب if raycaster يصطدم بالـ avatarMesh لو عايز تضغط عليه
  // دلوقتي هنفترض كل الضغط على الصفحة بيعمل toggle
  avatarMesh.userData.isBig = !avatarMesh.userData.isBig;
  
  if(avatarMesh.userData.isBig){
    avatarMesh.scale.set(2,2,1); // كبر الصورة
  } else {
    avatarMesh.scale.set(1.5,1.5,1); // رجعها لحجمها الطبيعي
  }
});
document.addEventListener('DOMContentLoaded', () => {
  // كل العناصر اللي هتتحرك
  const fadeItems = document.querySelectorAll('section, .site-header h1, .site-header p, .skill-item, .project-card');

  // نعمل التأخير في ظهورهم واحد واحد
  fadeItems.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('show');
    }, i * 200); // كل عنصر بعد 200 مللي ثانية
  });

  // بعد 1.5 ثانية صورة البروفايل تعمل حركة
  setTimeout(() => {
    const avatar = document.querySelector('.avatar');
    avatar.classList.add('animate');
  }, 1500);

});




















skills.forEach(skill => {
  const el = document.createElement('div');
  el.className = 'skill-item';
  el.innerHTML = `
    <video src="${skill.video}" autoplay loop muted playsinline></video>
    <span>${skill.name}</span>
  `;
  const video = el.querySelector('video');

  // للكمبيوتر
  el.addEventListener('mouseenter', () => { video.muted = false; video.play(); });
  el.addEventListener('mouseleave', () => { video.muted = true; });

  // للموبايل / التابلت
  el.addEventListener('click', () => {
    if(video.muted) {
      video.muted = false;
      video.play();
    } else {
      video.muted = true;
      video.pause();
    }
  });

  skillsList.appendChild(el);
});






