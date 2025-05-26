import CounterButton from "./CounterButton.tsx";
import {useState} from "react";

type CounterState = {
  count: number;
  lastAction: string;
  time: string;
}

const CounterAdvanced = () => {

  const [state, setState] = useState<CounterState>({
    count: 0,
    lastAction: "-",
    time: "-",
  });

  const getCurrentTime = () => new Date().toLocaleTimeString();

  const increaseCount = () => {
    setState({
      count: state.count + 1,
      lastAction: "Increase",
      time: getCurrentTime(),
    })
  }

  const decreaseCount = () => {

    if (state.count > 0) {
      setState({
        count: state.count - 1,
        lastAction: "Decrease",
        time: getCurrentTime(),
      })
    }
  }

  const resetCount = () => {
    setState({
      count: 0,
      lastAction: "Reset",
      time: getCurrentTime(),
    })
  }

  return (
    <>
      <div className="space-y-4 text-2xl pt-12">
        <h1 className="text-center">Count is {state.count}</h1>
        <div className="text-center space-x-4">
          <CounterButton onClick={increaseCount} label={"Increase"}/>
          <CounterButton onClick={resetCount} disabled={state.count === 0} label={"Reset"} addClass="bg-red-400"/>
          <CounterButton onClick={decreaseCount} disabled={state.count === 0} label={"Decrease"}/>
        </div>
      </div>
      <p className="text-center pt-4">Last change: <strong>{state.lastAction || "-"}</strong> at <strong>{state.time || "-"}</strong></p>
    </>

  )
}

export default CounterAdvanced;