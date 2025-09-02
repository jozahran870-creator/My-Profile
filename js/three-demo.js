// 🟢 إعداد المشهد
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / 200,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ alpha: true });
const container = document.getElementById("animationArea");
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);
// 🟡 هنستخدم صور بدل فونت
const textures = [
  "img/word1.png", // اعمل صور PNG فيها كلمة "شاعر"
  "img/word2.png", // كلمة "روائي"
  "img/word3.png", // كلمة "ممرّض"
  "img/emoji1.png", // emoji 💖
  "img/emoji2.png", // emoji ✒️
];
// نخزن الكائنات
const objects = [];
// تحميل الصور وتحويلها لمربعات
const loader = new THREE.TextureLoader();
textures.forEach((src, i) => {
  loader.load(src, (tex) => {
    const material = new THREE.SpriteMaterial({ map: tex });
    const sprite = new THREE.Sprite(material);

    sprite.position.x = (i - 2) * 3;
    sprite.position.y = Math.random() * 2 - 1;
    sprite.scale.set(2, 2, 1); // حجم الكلمة/الإيموجي

    scene.add(sprite);
    objects.push(sprite);
  });
});
camera.position.z = 8;
// 🔄 حلقة الحركة
function animate() {
  requestAnimationFrame(animate);
  objects.forEach((obj, i) => {
    obj.rotation += 0.01;
    obj.position.y = Math.sin(Date.now() * 0.001 + i) * 1.5;
  });
  renderer.render(scene, camera);
}
animate();
// 🔄 لو الصفحة اتغير حجمها
window.addEventListener("resize", () => {
  renderer.setSize(container.clientWidth, container.clientHeight);
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
});
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.module.js';
const canvas = document.getElementById('scene');
const scene = new THREE.Scene();
// كاميرا
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;
// رندر
const renderer = new THREE.WebGLRenderer({canvas, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
// ضوء
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);
// العناصر (مثال: صورة البروفايل)
const textureLoader = new THREE.TextureLoader();
const avatarTexture = textureLoader.load('img/111.jpeg');
const avatarMaterial = new THREE.MeshBasicMaterial({map: avatarTexture});
const avatarGeometry = new THREE.PlaneGeometry(1.5, 1.5);
const avatarMesh = new THREE.Mesh(avatarGeometry, avatarMaterial);
avatarMesh.position.set(0, 0, 0);
scene.add(avatarMesh);
// مثال عناصر المشاريع (صور)
const projects = ['img/5.jpeg','img/6.jpeg','img/7.jpeg','img/8.jpeg'];
const projectMeshes = [];
projects.forEach((src, i) => {
  const tex = textureLoader.load(src);
  const mat = new THREE.MeshBasicMaterial({map: tex});
  const geo = new THREE.PlaneGeometry(1,1);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set((i-1.5)*1.5, -2, 0);
  scene.add(mesh);
  projectMeshes.push(mesh);
});
// أنيميشن الدخول
let t = 0;
function animate() {
  requestAnimationFrame(animate);
  t += 0.01;
  // حركة بروفايل
  avatarMesh.position.y = Math.sin(t)*0.2;
  avatarMesh.rotation.z = Math.sin(t)*0.05;
  // حركة المشاريع تتكشف تدريجياً
  projectMeshes.forEach((mesh,i)=>{
    mesh.position.y = -2 + Math.sin(t + i)*0.5;
  });
  renderer.render(scene, camera);
}
animate();
// تحديث على تغيير حجم الشاشة
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
// three-demo.js
const canvas = document.getElementById('scene');
const scene = new THREE.Scene();
// كاميرا
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;
// رندر
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
// ضوء
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);
// صورة البروفايل
const loader = new THREE.TextureLoader();
const avatarTexture = loader.load('img/111.jpeg');
const avatarMaterial = new THREE.MeshBasicMaterial({ map: avatarTexture });
const avatarGeo = new THREE.PlaneGeometry(1.5, 1.5);
const avatarMesh = new THREE.Mesh(avatarGeo, avatarMaterial);
scene.add(avatarMesh);
// أنيميشن بسيط
function animate() {
    requestAnimationFrame(animate);
    avatarMesh.rotation.y += 0.01; // صورة بتلف شوية
    renderer.render(scene, camera);
}
animate();
// تعديل حجم الشاشة
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.module.js';
// مشهد وكاميرا
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000000, 0.05); // غموض في الخلفية
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);
camera.position.z = 10;
// رندر
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// ضوء
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10,10,10);
scene.add(pointLight);
// صورة البروفايل كـ Plane
const loader = new THREE.TextureLoader();
const avatarTexture = loader.load('img/111.jpeg');
const avatarMaterial = new THREE.MeshStandardMaterial({ map: avatarTexture });
const avatarGeo = new THREE.PlaneGeometry(3,3);
const avatarMesh = new THREE.Mesh(avatarGeo, avatarMaterial);
avatarMesh.position.set(0,0,0);
scene.add(avatarMesh);
// مشاريع
const projectImgs = ['img/5.jpeg','img/6.jpeg','img/7.jpeg','img/8.jpeg'];
const projectMeshes = [];
projectImgs.forEach((src,i)=>{
  const tex = loader.load(src);
  const mat = new THREE.MeshStandardMaterial({ map: tex });
  const geo = new THREE.PlaneGeometry(2,2);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set((i-1.5)*4, -3, -i); // توزع المشاريع في عمق 3D
  scene.add(mesh);
  projectMeshes.push(mesh);
});
// خلفية نجوم صغيرة
const particlesGeo = new THREE.BufferGeometry();
const particlesCount = 500;
const positions = new Float32Array(particlesCount*3);
for(let i=0;i<particlesCount*3;i++){
  positions[i] = (Math.random()-0.5)*50;
}
particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions,3));
const particlesMat = new THREE.PointsMaterial({ color:0xffffff, size:0.1 });
const particles = new THREE.Points(particlesGeo, particlesMat);
scene.add(particles);
// أنيميشن
let t=0;
function animate(){
  requestAnimationFrame(animate);
  t+=0.01;
  avatarMesh.rotation.y = Math.sin(t)*0.3;
  projectMeshes.forEach((m,i)=>{ m.rotation.y = Math.sin(t+i)*0.2 });
  renderer.render(scene,camera);
}
animate();
// تعديل الحجم
window.addEventListener('resize',()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth,window.innerHeight);
});
const introVideo = document.getElementById('introVideo');
const siteContent = document.getElementById('siteContent');

introVideo.onended = () => {
  document.getElementById('intro').style.display = 'none'; // تخفي الفيديو
  siteContent.style.display = 'block'; // تظهر الموقع الحقيقي
};
// 🔥 إعداد المشهد
const container = document.getElementById('introScene');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ alpha:true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);
// 💡 ضوء
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(0,5,5);
scene.add(light);
// 🚪 الأبواب الأسطورية
const doorGeo = new THREE.BoxGeometry(2,4,0.1);
const doorMat = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
const leftDoor = new THREE.Mesh(doorGeo, doorMat);
const rightDoor = new THREE.Mesh(doorGeo, doorMat);
leftDoor.position.x = -1.05;
rightDoor.position.x = 1.05;
scene.add(leftDoor, rightDoor);
let t = 0;
let opening = true;

function animate() {
    requestAnimationFrame(animate);
    if(opening){
        t += 0.01;
        leftDoor.rotation.y = -Math.min(t, Math.PI/2);
        rightDoor.rotation.y = Math.min(t, Math.PI/2);

        // لما الأبواب تفتح بالكامل
        if(t >= Math.PI/2){
            opening = false;
            // إظهار الموقع الحقيقي
            document.getElementById('introScene').style.display = 'none';
            document.getElementById('siteContent').style.display = 'block';
        }
    }
    renderer.render(scene, camera);
}
animate();
// ✨ تعديل حجم الشاشة
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
document.body.addEventListener('click', () => {
  introVideo.play();
}, { once: true });
