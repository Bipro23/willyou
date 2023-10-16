const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

noButton.addEventListener('click', () => {
  const maxX = window.innerWidth - noButton.clientWidth;
  const maxY = window.innerHeight - noButton.clientHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = 'absolute';
  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';
});

yesButton.addEventListener('click', () => {
  window.location.href = 'thankyou.html';
});
