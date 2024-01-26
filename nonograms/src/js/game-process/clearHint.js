export default function clearHint() {
  const [hintTop, hintLeft] = [
    document.querySelectorAll('.hint__top'),
    document.querySelectorAll('.hint__left'),
  ];

  hintTop.forEach((elem) => {
    const element = elem;
    element.innerHTML = '';
  });

  hintLeft.forEach((elem) => {
    const element = elem;
    element.innerHTML = '';
  });
}
