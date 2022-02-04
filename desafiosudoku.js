var SudokuValido = function (board) {
  var map = {};
  var tmp = 0;
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      tmp = board[i][j];
      if (tmp === ".") continue;
      if (
        map["i" + i + tmp] ||
        map["j" + j + tmp] ||
        map["b" + Math.floor(i / 3) + Math.floor(j / 3) + tmp]
      )
        return false;
      map["i" + i + tmp] = 1;
      map["j" + j + tmp] = 1;
      map["b" + Math.floor(i / 3) + Math.floor(j / 3) + tmp] = 1;
    }
  }
  return true;
};

//exemplo
console.log(
  SudokuValido([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
