import React, {useState} from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
}

const initialValues = {
  name: '',
  email: '',
  message: '',
}

const MultiFieldForm = () => {

  const [values, setValues] = useState<FormValues>(initialValues);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(
      (prev) => ({
        ...prev,
        [name]: value,
      })
    );
  }

  const handleClear = () => {
    setValues(initialValues);
    setSubmittedData(null);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(values);
    console.log(values);
    setValues(initialValues);
  }

  return (
    <>
      <div className="flex text-center max-w-sm mx-auto mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={values.name} type="text" name="name" placeholder="Name" className="w-full px-4 py-2 border rounded" onChange={handleChange} required/>
          <input value={values.email} type="text" name="email" placeholder="Email" className="w-full px-4 py-2 border rounded" onChange={handleChange} required/>
          <textarea minLength={5} value={values.message} name="message" placeholder="Type your message" className="w-full px-4 py-2 border rounded" onChange={handleChange} required></textarea>
          <div className="flex gap-4">
            <button type="submit" className="bg-red-800 text-white px-4 py-2 rounded">
              Submit
            </button>
            <button onClick={handleClear} type="button" className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
              Clear
            </button>
          </div>

          { submittedData && (
            <div className="mt-6 border-t pt-4 space-y-2">
              <h2 className="font-bold">Submitted Data</h2>
              <p><strong>Name: </strong>{submittedData.name}</p>
              <p><strong>Email: </strong>{submittedData.email}</p>
              <p><strong>Text: </strong>{submittedData.message}</p>
            </div>
            )}
        </form>
      </div>
    </>
  )
}

export default MultiFieldForm;