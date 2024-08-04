"use strict";
function createRipple(event) {
    const target = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - target.offsetLeft}px`;
    circle.style.top = `${event.clientY - target.offsetTop}px`;
    circle.classList.add('_ripple');
    const ripple = target.querySelectorAll('._ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    target.appendChild(circle);
}
const rippleButtons = document.querySelectorAll('.btn-ripple');
if (rippleButtons.length) {
    rippleButtons.forEach(button => {
        button.addEventListener('mousedown', createRipple);
    });
}
//# sourceMappingURL=script.js.map