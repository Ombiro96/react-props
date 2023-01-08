import { useState } from "react";
export default function Counter(){
    const [testNumber, setResult] = useState(0);
    function handleClick() {
        setResult(0);
      }
      function addNumber() {
        setResult(function (oldValue) {
          //this is best practice when needing to use previous state to determine new state
          return oldValue + 1;
        });
        // testNumber++ is wrong because you never want to change the state
      }
      function minusNumber() {
        setResult(testNumber - 1);
      }
    return(
        <>
        {/* used in practicing state */}
      <div className="add-minus">
      <button className="minus" onClick={minusNumber}>
        Minus
      </button>
      <div className="number">{testNumber}</div>
      <button className="add" onClick={addNumber}>
        Add
      </button>
    </div>

    <button className="state" onClick={handleClick}>
      Reset
    </button>
    </>
    )
}