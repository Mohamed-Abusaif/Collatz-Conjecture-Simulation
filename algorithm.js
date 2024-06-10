const collatzConjectureAlgorithm = (int) => {
  let count = 0;
  let theSecquence = [];
  while (int !== 1) {
    if (int % 2 == 0) {
      int = int / 2;
      count++;
      theSecquence.push(int);
    } else {
      int = 3 * int + 1;
      count++;
      theSecquence.push(int);
    }
  }
  const output = {
    countOfSteps: count,
    sequenceItself: theSecquence,
  };
  return output;
};

const returnOutput = () => {
  const integerNumber = parseInt(document.getElementById("integer").value);
  const result = collatzConjectureAlgorithm(integerNumber);

  document.getElementById("result").innerHTML = result.sequenceItself;
  document.getElementById("count").innerHTML = result.countOfSteps;
  visualize(result.sequenceItself);
  return false;
};
