const collatzConjectureAlgorithm = (int) => {
  let count = 0;
  let theSecquence = [];
  if (int < 0) {
    return false;
  } else {
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
  }
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

const displayCount = (countOfSteps) => {
  if (countOfSteps >= 70) {
    document.getElementById(
      "count"
    ).innerHTML = `${countOfSteps}<br>Heyyyy WATCHOUT!!! This Number Is Reaching (1) <br> with a Crazy Big Number of Steps!<br>😡🐳`;
    document.getElementById("count").style.color = "red";
  } else if (countOfSteps < 70 && countOfSteps >= 50) {
    document.getElementById(
      "count"
    ).innerHTML = `${countOfSteps}<br>Soooo, Not that small, But also not a big deal!<br>😏👌🏽`;
  } else {
    document.getElementById(
      "count"
    ).innerHTML = `${countOfSteps}<br>Thank You Sir for giving me such an opportunity <br> to reach (1) with these small number of steps!<br>🥹💗`;
    document.getElementById("count").style.color = "#0d6efd";
  }
};

const returnOutput = () => {
  const integerNumber = parseInt(document.getElementById("integer").value);
  const result = collatzConjectureAlgorithm(integerNumber);

  document.getElementById("chart").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("count").innerHTML = "";

  displayResult(result.sequenceItself);
  displayCount(result.countOfSteps);
  visualize(result.sequenceItself);

  document.getElementById(
    "finalResult"
  ).innerHTML = `⬇️<br>We Started With: ${integerNumber}.<br>
  The Maximum Number Was: ${Math.max(...result.sequenceItself)}.<br>
  And Ended With 1.<br>
  Soooo, How was your journey to reach Number 1?<br>
  Do you feel weary  or cheery? 🥴🆚😌.`;

  const specificDiv = document.getElementById("finalResult");
  const position = specificDiv.getBoundingClientRect().top;
  window.scrollTo({
    top: position * 2,
    behavior: "smooth",
  });

  return false;
};
