
// Лепестки роз
function createPetal() {
  const petal = document.createElement('div');
  petal.className = 'petal';
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 5000);
}
setInterval(createPetal, 300);

// Мерцающие звезды
function createStars() {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * 100 + 'vh';
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 4000);
}
setInterval(createStars, 100);

// Сердечки
function startHeartAnimation() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.backgroundColor = getRandomColor();
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 200);
}

function getRandomColor() {
  const colors = ['#ff4da6', '#ff6666', '#ffcc00', '#66ff99', '#66b3ff', '#c266ff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

const text = "Ты делаешь этот мир красивее...";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
setTimeout(typeWriter, 1000);

const button = document.getElementById('openBtn');
const images = document.getElementById('imageContainer');

button.addEventListener('click', () => {
  images.classList.remove('hidden');
  button.style.display = 'none';
  startHeartAnimation(); // включаем анимацию сердечек
});
