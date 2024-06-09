const collatzConjectureAlgorithm = (int) => {
  let count = 0;
  while (int !== 1) {
    if (int % 2 == 0) {
      int = int / 2;
      count++;
      console.log(int);
    } else {
      int = 3 * int + 1;
      count++;
      console.log(int);
    }
  }
  console.log(`The Total Number of steps to reach 1: ${count}`);
};

collatzConjectureAlgorithm(27);
