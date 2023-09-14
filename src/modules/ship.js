export default function ship(length) {
  let numTimesHit = 0;
  const hit = () => {
    numTimesHit++;
  };
  const isSunk = () => {
    return (numTimesHit >= length);
  };
  return { hit, isSunk };
}

