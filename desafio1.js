function MakeList(lista) {
  lista.sort(function (a, b) {
    return a - b;
  });
  return [...new Set(lista)];
}
console.log(MakeList([8, 5, 10, 5, 2, 4, 4, 3]));
