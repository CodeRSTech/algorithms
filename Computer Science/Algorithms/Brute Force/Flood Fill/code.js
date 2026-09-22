const G = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', '-', '-', '-', '#', '-', '-', '-', '#'],
  ['#', '-', '-', '-', '#', '-', '-', '-', '#'],
  ['#', '-', '-', '#', '-', '-', '-', '-', '#'],
  ['#', '#', '#', '-', '-', '-', '#', '#', '#'],
  ['#', '-', '-', '-', '-', '#', '-', '-', '#'],
  ['#', '-', '-', '-', '#', '-', '-', '-', '#'],
  ['#', '-', '-', '-', '#', '-', '-', '-', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
];

function FloodFill(i, j, oldColor, newColor) {
  if (i < 0 || i >= G.length || j < 0 || j >= G[i].length) return;
  if (G[i][j] !== oldColor) return;

  // set the color of node to newColor
  G[i][j] = newColor;

  // next step four-way
  FloodFill(i + 1, j, oldColor, newColor);
  FloodFill(i - 1, j, oldColor, newColor);
  FloodFill(i, j + 1, oldColor, newColor);
  FloodFill(i, j - 1, oldColor, newColor);
}

FloodFill(4, 4, '-', 'a');
