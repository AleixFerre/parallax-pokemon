document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach((box) => {
    const maxMovement = 50;

    box.addEventListener('mousemove', (e) => {
      const centerX = box.offsetLeft + box.offsetWidth / 2;
      const centerY = box.offsetTop + box.offsetHeight / 2;

      const mouseX = e.pageX - centerX;
      const mouseY = e.pageY - centerY;

      const moveX = (mouseX / centerX) * maxMovement;
      const moveY = (mouseY / centerY) * maxMovement;

      const front = box.querySelector('.front');
      const bg = box.querySelector('.bg');

      front.style.transform = `translate(${moveX}px, ${moveY}px)`;
      bg.style.transform = `translate(calc(-50% + ${-moveX}px + var(--size)/2), calc(-50% + ${-moveY}px + var(--size)/2))`;
      bg.style.backgroundImage = `url(assets/images/background/bg${bg.id}_blurred.png)`;
      box.style.transform = `perspective(400px) rotateY(${-moveX}deg) rotateX(${-moveY}deg)`;
    });

    box.addEventListener('mouseleave', () => {
      const front = box.querySelector('.front');
      const bg = box.querySelector('.bg');

      front.style.transform = 'translate(0px, 0px)';
      bg.style.transform = 'translate(calc(-50% + var(--size)/2), calc(-50% + var(--size)/2))';
      bg.style.backgroundImage = `url(assets/images/background/bg${bg.id}.png)`;
      box.style.transform = `perspective(400px) rotateY(0) rotateX(0)`;
    });
  });
});
