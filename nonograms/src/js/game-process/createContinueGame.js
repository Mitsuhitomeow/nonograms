export default function createContinueGame(data) {
  const { time, sizeSelect, imageSelect } = data;
  console.log(`matrix: ${data.imageMatrix}
  select size: ${sizeSelect}
  select.image: ${imageSelect}
  time: ${time}`);

  console.log('continue: ');
}
