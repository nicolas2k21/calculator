import {useState} from "react";
import "./App.css";

function App() {
  const [ans, setAns] = useState("");

  return (
    <div className="App">
      <div className="calculator_box">
        <button onClick={() => setAns("")} className="back_clear_calculate">
          {" "}
          C
        </button>
        <button
          onClick={() => setAns(ans.toString().slice(0, -1))}
          className="back_clear_calculate">
          {" "}
          B
        </button>

        <button
          onClick={() => setAns(eval(ans))}
          className="back_clear_calculate">
          {" "}
          =
        </button>

        <h1 className="calculation_output">{ans}</h1>

        <button onClick={() => setAns(ans + "1")} className="numbers">
          {" "}
          1
        </button>
        <button onClick={() => setAns(ans + "2")} className="numbers">
          {" "}
          2
        </button>
        <button onClick={() => setAns(ans + "3")} className="numbers">
          {" "}
          3
        </button>
        <button onClick={() => setAns(ans + "4")} className="numbers">
          {" "}
          4
        </button>
        <button onClick={() => setAns(ans + "5")} className="numbers">
          {" "}
          5
        </button>
        <button onClick={() => setAns(ans + "6")} className="numbers">
          {" "}
          6
        </button>
        <button onClick={() => setAns(ans + "7")} className="numbers">
          {" "}
          7
        </button>
        <button onClick={() => setAns(ans + "8")} className="numbers">
          {" "}
          8
        </button>
        <button onClick={() => setAns(ans + "9")} className="numbers">
          {" "}
          9
        </button>
        <button onClick={() => setAns(ans + "-")} className="numbers">
          {" "}
          -
        </button>
        <button onClick={() => setAns(ans + "+")} className="numbers">
          {" "}
          +
        </button>
        <button onClick={() => setAns(ans + "0")} className="numbers">
          {" "}
          0
        </button>
        <button onClick={() => setAns(ans + "/")} className="numbers">
          {" "}
          :
        </button>
        <button onClick={() => setAns(ans + "*")} className="numbers">
          {" "}
          *
        </button>
        <button onClick={() => setAns(ans + ".")} className="numbers">
          {" "}
          ,
        </button>
        <button onClick={() => setAns(ans + "(")} className="numbers">
          {" "}
          (
        </button>
        <button onClick={() => setAns(ans + ")")} className="numbers">
          {" "}
          )
        </button>
        <button onClick={() => setAns(ans + "%")} className="numbers">
          {" "}
          %
        </button>
      </div>
    </div>
  );
}

export default App;
