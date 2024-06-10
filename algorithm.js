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

const displayResult = (sequenceItself) => {
  const numberContainer = document.getElementById("result");

  for (let i = 0; i < sequenceItself.length; i++) {
    const numberElement = document.createElement("span");
    numberElement.className = "number";
    numberElement.textContent = sequenceItself[i];
    numberContainer.appendChild(numberElement);

    if (i < sequenceItself.length - 1) {
      const separator = document.createElement("span");
      separator.textContent = i % 10 === 9 ? "" : ", ";
      numberContainer.appendChild(separator);
    }

    if ((i + 1) % 10 === 0) {
      const brElement = document.createElement("br");
      numberContainer.appendChild(brElement);
    }
  }
};

const returnOutput = () => {
  const integerNumber = parseInt(document.getElementById("integer").value);
  const result = collatzConjectureAlgorithm(integerNumber);

  document.getElementById("chart").innerHTML = "";
  document.getElementById("result").innerHTML = "";

  displayResult(result.sequenceItself);
  document.getElementById("count").innerHTML = result.countOfSteps;

  visualize(result.sequenceItself);

  return false;
};
