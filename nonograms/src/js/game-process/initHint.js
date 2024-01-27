export default function createHint(leftHint, topHint) {
  const leftHintElements = document.querySelectorAll('.hint__left');
  const topHintElements = document.querySelectorAll('.hint__top');

  const iteratingHint = (element, arrayHint) => {
    element.forEach((hint, index) => {
      const newHint = arrayHint[index];

      newHint.forEach((_, ind) => {
        const span = document.createElement('span');
        span.textContent = newHint[ind];
        hint.append(span);
      });
    });
  };

  iteratingHint(leftHintElements, leftHint);
  iteratingHint(topHintElements, topHint);
}
