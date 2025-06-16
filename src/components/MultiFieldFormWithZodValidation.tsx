import React, {useState} from "react";
import {z} from "zod";

const formSchema = z.object({
  name: z.string().trim().nonempty("Name is required."),
  email: z.string().trim().nonempty("Email is required.").email("Email is invalid."),
  message: z.string().trim().nonempty("Message is required").min(5, "Must be at least 5 characters").max(255, "Message must be at most 255 characters"),
})

type FormValues = z.infer<typeof formSchema>;

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
}

const initialValues = {
  name: '',
  email: '',
  message: '',
}

const MultiFieldFormWithZodValidation = () => {

  const [values, setValues] = useState<FormValues>(initialValues);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [errors, setErrors] = useState<FormErrors | null>(null);

  const validateForm = () => {
    const result = formSchema.safeParse(values);
    // ΑΝ ΕΙΝΑΙ TRUE ΘΑ ΕΧΟΥΜΕ ΤΑ DATA ΑΛΛΙΩΣ ΘΑ ΕΧΟΥΜΕ ΤΑ ERRORS
    //{success: true, data: validatedData}
    //{success: false, errors: errors};
    if (!result.success) {
      const newErrors: FormErrors = {}

      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof FormErrors;
        newErrors[fieldName] = issue.message;
      })
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(
      (prev) => ({
        ...prev,
        [name]: value,
      })
    );
    setErrors(
      prev => ({
        ...prev,
        [name]: undefined
      })
    )
  }

  const handleClear = () => {
    setValues(initialValues);
    setErrors({})
    setSubmittedData(null);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      setSubmittedData(values);
      setValues(initialValues);
    }
  };

  return (
    <>
      <div className="flex text-center max-w-sm mx-auto mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input autoComplete="off" value={values.name} type="text" name="name" placeholder="Name" className="w-full px-4 py-2 border rounded" onChange={handleChange} />
            {errors?.name &&(
              <p className="bg-red-900">{errors.name}</p>
            )}
          </div>
          <div>
            <input autoComplete="off" value={values.email} type="text" name="email" placeholder="Email" className="w-full px-4 py-2 border rounded" onChange={handleChange} />
            {errors?.email &&(
              <p className="bg-red-900">{errors.email}</p>
            )}
          </div>
          <div>
            <textarea autoComplete="off" minLength={5} value={values.message} name="message" placeholder="Type your message" className="w-full px-4 py-2 border rounded" onChange={handleChange}></textarea>
            {errors?.message && (
              <p className="bg-red-900">{errors.message}</p>
            )}
          </div>
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

export default MultiFieldFormWithZodValidation;