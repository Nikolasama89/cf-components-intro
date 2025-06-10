import React, {useState} from "react";

const ControlledInput = () => {
  const [name, setName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <>
      <div className="text-center">
        <input value={name} onChange={handleChange} type="text" className="border rounded px-4 py-2"/>
      </div>
    </>
  )
}

export default ControlledInput;