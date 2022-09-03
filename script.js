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
  // const [theme, setTheme] = React.useState("light");
  // const [isChecked, setIsChecked] = React.useState(false);
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
          break;
        }
        if (displayText != 0 && displayText.length > 1) {
          setDisplayText(displayText.slice(0, -1));
          break;
        }
        setDisplayText("0");
        setActive(e);

        break;
      case "0":
        if (displayText == "0") setDisplayText(displayText);
        else setDisplayText(displayText + e.target.innerText);
        setActive(e);
        break;
      case "1":
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "2":
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "3":
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "4":
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "5":
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "6":
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "7":
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "8":
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "9":
        if (displayText == "0") {
          setDisplayText(e.target.innerText);
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "+":
        setFlag(false);
        // let lastCharOperation = displayText[displayText.length - 1];
        if (
          lastCharOperation == "*" ||
          lastCharOperation == "/" ||
          lastCharOperation == "+"
        ) {
          let v = displayText.slice(0, -1);
          setDisplayText(v.concat("+"));
          return;
        }
        if (
          lastTwoOperators == "/-" ||
          lastTwoOperators == "*-" ||
          lastTwoOperators == "+-"
        ) {
          let v = displayText.slice(0, -2);
          setDisplayText(v.concat("+"));
          return;
        }
        // handleExtraOperator("*", "/", "+", "+");
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "-":
        setFlag(false);
        if (lastCharOperation == "-") {
          setDisplayText(displayText);
          return;
        }
        if (
          lastTwoOperators == "-/" ||
          lastTwoOperators == "-*" ||
          lastTwoOperators == "-+"
        ) {
          let v = displayText.slice(0, -2);
          setDisplayText(v.concat("-"));
          return;
        }

        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case "×":
        setFlag(false);

        // let lastCharOperation = displayText[displayText.length - 1];
        if (
          lastCharOperation == "*" ||
          lastCharOperation == "/" ||
          lastCharOperation == "-" ||
          lastCharOperation == "+"
        ) {
          let v = displayText.slice(0, -1);
          setDisplayText(v.concat("*"));
          return;
        }
        if (
          lastTwoOperators == "/-" ||
          lastTwoOperators == "*-" ||
          lastTwoOperators == "+-"
        ) {
          let v = displayText.slice(0, -2);
          setDisplayText(v.concat("*"));
          return;
        }
        setDisplayText(displayText + "*");
        setActive(e);

        break;
      case "/":
        setFlag(false);

        if (
          lastCharOperation == "*" ||
          lastCharOperation == "/" ||
          lastCharOperation == "-" ||
          lastCharOperation == "+"
        ) {
          let v = displayText.slice(0, -1);
          setDisplayText(v.concat("/"));
          return;
        }
        if (
          lastTwoOperators == "/-" ||
          lastTwoOperators == "*-" ||
          lastTwoOperators == "+-"
        ) {
          let v = displayText.slice(0, -2);
          setDisplayText(v.concat("/"));
          return;
        }
        setDisplayText(displayText + e.target.innerText);
        setActive(e);

        break;
      case ".":
        if (!isFlag) {
          setDisplayText(displayText + e.target.innerText);
          setFlag(true);
          return;
        }
        if (isFlag) {
          setDisplayText(displayText);
        }
        setActive(e);
        break;
      case "=":
        setDisplayText(eval(displayText) + "");
        setActive(e);
        break;
      default:
        console.log("I am default");
        return;
    }
  };

  // const handleOnChange = () => {
  //   setIsChecked(!isChecked);
  // };
  // const themeChange = () => {
  //   isChecked ? setTheme("dark") : setTheme("light");
  // };
  return (
    <div id="calculator">
      {/* <div id="switch">
        <label class="switch">
          <input
            type="checkbox"
            value={theme}
            checked={isChecked}
            onChange={handleOnChange}
          />
          <span class="slider round"></span>
        </label>
      </div> */}
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
