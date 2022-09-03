const numbersAndOperations = [
  {
    id: "clear",
    value: "AC",
  },
  {
    id: "del",
    value: "DEL",
  },
  {
    id: "divide",
    value: "/",
  },

  {
    id: "multiply",
    value: "×",
  },
  {
    id: "seven",
    value: 7,
  },
  {
    id: "eight",
    value: 8,
  },
  {
    id: "nine",
    value: 9,
  },
  {
    id: "subtract",
    value: "-",
  },
  {
    id: "four",
    value: 4,
  },
  {
    id: "five",
    value: 5,
  },
  {
    id: "six",
    value: 6,
  },
  {
    id: "add",
    value: "+",
  },
  {
    id: "one",
    value: 1,
  },
  {
    id: "two",
    value: 2,
  },
  {
    id: "three",
    value: 3,
  },
  {
    id: "equals",
    value: "=",
  },
  {
    id: "zero",
    value: 0,
  },
  {
    id: "decimal",
    value: ".",
  },
];

const App = () => {
  const [displayText, setDisplayText] = React.useState("0");
  const [isFlag, setFlag] = React.useState(false);
  const [isEqualToClicked, setIsEqualToClicked] = React.useState(false);

  function setActive(e) {
    e.target.classList.add("active");
    setTimeout(() => {
      e.target.classList.remove("active");
    }, 200);
  }

  const handleClick = (e) => {
    let lastCharOperation = displayText[displayText.length - 1];
    let lastTwoOperators = displayText.substring(displayText.length - 2);

    switch (e.target.innerText) {
      case "AC":
        setFlag(false);
        setDisplayText("0");
        setActive(e);
        break;
      case "":
        if (displayText == 0) {
          setDisplayText(displayText);
          setActive(e);
          break;
        }
        if (displayText.match(/[a-zA-Z]/gi)) {
          setDisplayText("0");
          break;
        }
        if (displayText != 0 && displayText.length > 1) {
          setDisplayText(displayText.slice(0, -1));
          setActive(e);
          break;
        }
        setDisplayText("0");
        setActive(e);

        break;
      case "0":
        if (isEqualToClicked) {
          setDisplayText("0");
          setIsEqualToClicked(false);
          return;
        }
        if (displayText == "0") setDisplayText(displayText);
        else setDisplayText(displayText + e.target.innerText);
        setActive(e);
        break;
      case "1":
        if (isEqualToClicked) {
          setDisplayText("1");
          setIsEqualToClicked(false);
          return;
        }
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          setActive(e);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "2":
        if (isEqualToClicked) {
          setDisplayText("2");
          setIsEqualToClicked(false);
          return;
        }
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          setActive(e);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "3":
        if (isEqualToClicked) {
          setDisplayText("3");
          setIsEqualToClicked(false);
          return;
        }
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          setActive(e);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "4":
        if (isEqualToClicked) {
          setDisplayText("4");
          setIsEqualToClicked(false);
          return;
        }
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          setActive(e);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "5":
        if (isEqualToClicked) {
          setDisplayText("5");
          setIsEqualToClicked(false);
          return;
        }
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          setActive(e);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "6":
        if (isEqualToClicked) {
          setDisplayText("6");
          setIsEqualToClicked(false);
          return;
        }
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          setActive(e);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "7":
        if (isEqualToClicked) {
          setDisplayText("7");
          setIsEqualToClicked(false);
          return;
        }
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          setActive(e);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "8":
        if (isEqualToClicked) {
          setDisplayText("8");
          setIsEqualToClicked(false);
          return;
        }
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          setActive(e);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "9":
        if (isEqualToClicked) {
          setDisplayText("9");
          setIsEqualToClicked(false);
          return;
        }
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          setActive(e);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "+":
        setFlag(false);
        setIsEqualToClicked(false);
        // let lastCharOperation = displayText[displayText.length - 1];
        if (
          lastCharOperation == "*" ||
          lastCharOperation == "/" ||
          lastCharOperation == "+"
        ) {
          let v = displayText.slice(0, -1);
          setDisplayText(v.concat("+"));
          setActive(e);
          return;
        }
        if (
          lastTwoOperators == "/-" ||
          lastTwoOperators == "*-" ||
          lastTwoOperators == "+-"
        ) {
          let v = displayText.slice(0, -2);
          setDisplayText(v.concat("+"));
          setActive(e);
          return;
        }
        // handleExtraOperator("*", "/", "+", "+");
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "-":
        setFlag(false);
        setIsEqualToClicked(false);
        if (lastCharOperation == "-") {
          setDisplayText(displayText);
          setActive(e);
          return;
        }
        if (
          lastTwoOperators == "-/" ||
          lastTwoOperators == "-*" ||
          lastTwoOperators == "-+"
        ) {
          let v = displayText.slice(0, -2);
          setDisplayText(v.concat("-"));
          setActive(e);
          return;
        }

        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "×":
        setFlag(false);
        setIsEqualToClicked(false);

        if (
          lastTwoOperators == "/-" ||
          lastTwoOperators == "*-" ||
          lastTwoOperators == "+-" ||
          lastTwoOperators == "-+"
        ) {
          let v = displayText.slice(0, -2);
          setDisplayText(v.concat("*"));
          setActive(e);
          return;
        }

        if (
          lastCharOperation == "*" ||
          lastCharOperation == "/" ||
          lastCharOperation == "-" ||
          lastCharOperation == "+"
        ) {
          let v = displayText.slice(0, -1);
          setDisplayText(v.concat("*"));
          setActive(e);
          return;
        }

        setDisplayText(displayText + "*");
        setActive(e);

        break;
      case "/":
        setFlag(false);
        setIsEqualToClicked(false);

        if (
          lastTwoOperators == "/-" ||
          lastTwoOperators == "*-" ||
          lastTwoOperators == "+-" ||
          lastTwoOperators == "-+"
        ) {
          let v = displayText.slice(0, -2);
          setDisplayText(v.concat("/"));
          setActive(e);
          return;
        }

        if (
          lastCharOperation == "*" ||
          lastCharOperation == "/" ||
          lastCharOperation == "-" ||
          lastCharOperation == "+"
        ) {
          let v = displayText.slice(0, -1);
          setDisplayText(v.concat("/"));
          setActive(e);
          return;
        }

        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case ".":
        if (!isFlag) {
          setDisplayText(displayText + e.target.innerText);
          setFlag(true);
          setActive(e);
          return;
        }
        if (isFlag) {
          setDisplayText(displayText);
        }
        setActive(e);
        break;
      case "=":
        try {
          setIsEqualToClicked(true);
          setDisplayText(eval(displayText) + "");
          setActive(e);
        } catch (error) {
          setDisplayText("Invalid Input");
        }
        break;
      default:
        console.log("I am default");
        return;
    }
  };

  return (
    <div id="calculator">
      <div id="display">{displayText}</div>
      {numbersAndOperations.map((nAndO) => (
        <Button
          key={nAndO.id}
          text={nAndO.value}
          id={nAndO.id}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

const Button = ({ text, id, handleClick }) => {
  return (
    <button id={id} onClick={handleClick}>
      {text == "DEL" ? <i class="fa-solid fa-delete-left"></i> : text}
    </button>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
