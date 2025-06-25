// 🌙 Toggle Project Card Details
function toggleCard(card) {
  const body = card.querySelector('.project-body');
  const arrow = card.querySelector('.project-header span:last-child');

  if (body.style.maxHeight) {
    body.style.maxHeight = null;
    arrow.textContent = "🔽";
  } else {
    body.style.maxHeight = body.scrollHeight + "px";
    arrow.textContent = "🔼";
  }
}

// 🌠 Smooth Scroll to Top (Optional)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// ✨ Animate Project Cards on Load
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, i * 150);
  });

  // Start typing effect
  type();
});

// 🎀 Typing Effect on Landing Page
const text = "Hey, I'm Ruksana 🌸";
let i = 0;
function type() {
  const typingDiv = document.getElementById("typing");
  if (!typingDiv) return;
  if (i < text.length) {
    typingDiv.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

// 🌓 Dark Mode Toggle + Star Constellation
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const canvas = document.getElementById("stars-canvas");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    if (body.classList.contains("dark-theme")) {
      toggleBtn.textContent = "☀️";
      if (canvas) {
        canvas.style.display = "block";
        startConstellation();
      }
    } else {
      toggleBtn.textContent = "🌙";
      if (canvas) {
        canvas.style.display = "none";
        stopConstellation();
      }
    }
  });
}
