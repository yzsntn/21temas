function showTopic(id) {
    var cards = document.querySelectorAll('.card-detail');
    cards.forEach(function(card) {
        card.classList.remove('active');
    });
    
    var buttons = document.querySelectorAll('.topic-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('active-btn');
    });

    var activeCard = document.getElementById(id);
    if (activeCard) {
        activeCard.classList.add('active');
    }

    var activeBtn = document.getElementById('btn-' + id);
    if (activeBtn) {
        activeBtn.classList.add('active-btn');
    }
}

// Hero spotlight dynamic effect
const heroGrid = document.querySelector('.hero-grid');
let gx = 0, gy = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', e => {
  tx = e.clientX;
  ty = e.clientY;
});

(function lerpGrid() {
  gx += (tx - gx) * 0.08;
  gy += (ty - gy) * 0.08;
  heroGrid.style.setProperty('--mx', gx + 'px');
  heroGrid.style.setProperty('--my', gy + 'px');
  requestAnimationFrame(lerpGrid);
})();