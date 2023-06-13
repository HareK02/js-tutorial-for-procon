function distance(x1, y1, x2, y2) {
  const distance = Math.sqrt(
    (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)
  );
  return distance;
}
console.log(distance(1, 1, 1, 2));
console.log(distance(1, 1, 3, 3));