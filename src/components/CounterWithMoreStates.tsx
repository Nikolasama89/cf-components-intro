import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const CounterWithMoreState =  () => {

  const [count, setCount] = useState(0);

  const [lastAction, setLastAction] = useState("");
  const [time, setTime] = useState("");

  const getCurrentTime = () => new Date().toLocaleTimeString();

  const increaseCount = () => {
    setCount(count + 1);
    setLastAction("Increase");
    setTime(getCurrentTime());
  }

  const resetCount = () => {
    setCount(0);
    setLastAction("Reset");
    setTime(getCurrentTime());
  }

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setLastAction("Decrease");
      setTime(getCurrentTime());
    }
  }

    return (
      <>
        <div className="space-y-4 text-2xl pt-12">
          <h1 className="text-center">Count is {count}</h1>
          <div className="text-center space-x-4">
\
            <CounterButton onClick={increaseCount} label={"Increase"}/>
            <CounterButton onClick={resetCount} disabled={count === 0} label={"Reset"} addClass="bg-red-400"/>
            <CounterButton onClick={decreaseCount} disabled={count === 0} label={"Decrease"}/>
          </div>
        </div>

        <p className="text-center pt-4">Last change: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong></p>
      </>
    )

}
export default CounterWithMoreState;