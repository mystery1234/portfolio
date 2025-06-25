let canvas = document.getElementById("stars-canvas");
let ctx = canvas.getContext("2d");
let stars = [];
let animation;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);

function initStars(count = 100) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateStars() {
  stars.forEach(star => {
    star.x += star.dx;
    star.y += star.dy;

    if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
  });
}

function animate() {
  drawStars();
  updateStars();
  animation = requestAnimationFrame(animate);
}

function startConstellation() {
  resizeCanvas();
  initStars();
  animate();
}

function stopConstellation() {
  cancelAnimationFrame(animation);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
