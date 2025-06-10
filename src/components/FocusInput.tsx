import {useRef} from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  }
  
  
  return (
    <>
      <div className="text-center space-x-4 mt-4">
        <input ref={inputRef} type="text" className="border px-4 py-2 rounded"/>
        <button className="bg-gray-600 text-white px-4 py-2 rounded" onClick={handleClick}>Focus Input</button>
      </div>
    </>
  )
}

export default FocusInput;