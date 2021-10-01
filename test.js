function even() {
  let evenArr = [];
  for (let i = 1; i < 51; i++) {
    if (i % 2 === 0) {
      evenArr.push(i);
    }
  }
  return evenArr;
}
