
  const card = document.getElementById('card');
  const modal = document.getElementById('infoModal');

  function openCard() {
    card.classList.toggle('open');
    createHearts();
  }

  function showInfo() {
    modal.style.display = 'flex';
  }

  function closeInfo() {
    modal.style.display = 'none';
  }

  // Floating heart animation
  function createHearts() {
    for (let i = 0; i < 15; i++) {
      let heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤';
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = window.innerHeight + 'px';
      heart.style.fontSize = Math.random() * 20 + 10 + 'px';
      heart.style.animationDuration = Math.random() * 4 + 3 + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }
  }

