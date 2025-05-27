import CounterButton from "./CounterButton.tsx";
// import {useCounter} from "../hooks/useCounter.ts";
import { useCounterWithReducer} from "../hooks/useCounterWithReducer.ts";

const CounterWithReducer = () => {

  // Custom hook function
  // const {count, increase, decrease, reset} = useCounter()
  const {count, lastAction, time, increase, decrease, reset} =  useCounterWithReducer();

  return (
    <>
      <div className="space-y-4 text-2xl pt-12">
        <h1 className="text-center">Count is {count}</h1>
        <div className="text-center space-x-4">
          <CounterButton onClick={increase} label={"Increase"}/>
          <CounterButton onClick={reset} disabled={count === 0} label={"Reset"} addClass="bg-red-400"/>
          <CounterButton onClick={decrease} disabled={count === 0} label={"Decrease"}/>
        </div>
      </div>
      <p className="text-center pt-4">Last change: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong></p>
    </>
  )
}

export default CounterWithReducer;