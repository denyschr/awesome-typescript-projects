function createRipple(event: MouseEvent): void {
  const target = event.currentTarget as HTMLElement;
  const circle = document.createElement('span');
  const diameter = Math.max(target.clientWidth, target.clientHeight);

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - target.offsetLeft}px`;
  circle.style.top = `${event.clientY - target.offsetTop}px`;
  circle.classList.add('_ripple');

  const ripple = target.querySelectorAll<HTMLElement>('._ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  target.appendChild(circle);
}

const rippleButtons = document.querySelectorAll<HTMLElement>('.btn-ripple');

if (rippleButtons.length) {
  rippleButtons.forEach(button => {
    button.addEventListener('mousedown', createRipple);
  });
}
