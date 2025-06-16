import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Button } from "./ui/button";

const formSchema = z.object({
  name: z.string().trim().nonempty("Name is required."),
  email: z.string().trim().nonempty("Email is required.").email("Email is invalid."),
  message: z.string().trim().nonempty("Message is required").min(5, "Must be at least 5 characters").max(255, "Message must be at most 255 characters"),
})

type FormValues = z.infer<typeof formSchema>;

const initialValues = {
  name: '',
  email: '',
  message: '',
}

const MultiFieldFormWithReactHook = () => {

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  })


  const onSubmit = (data: FormValues) => {
    console.log('Submitting data: ', data);
    reset();
  }

  const onClear = () => {
    reset();
  }

  const watchedValues = watch();

  return (
    <>
      <div className="flex text-center max-w-sm mx-auto mt-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input {...register("name")} autoComplete="off" type="text" name="name" placeholder="Name" className="w-full px-4 py-2 border rounded"/>
            {errors?.name &&(
              <p className="bg-red-900">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input {...register("email")} autoComplete="off" type="text" name="email" placeholder="Email" className="w-full px-4 py-2 border rounded"/>
            {errors?.email &&(
              <p className="bg-red-900">{errors.email.message}</p>
            )}
          </div>
          <div>
            <textarea {...register("message")} autoComplete="off" minLength={5} name="message" placeholder="Type your message" className="w-full px-4 py-2 border rounded"></textarea>
            {errors?.message && (
              <p className="bg-red-900">{errors.message.message}</p>
            )}
          </div>
          <div className="flex gap-4">
            <button type="submit" className="bg-red-800 text-white px-4 py-2 rounded">
              Submit
            </button>
            <button onClick={onClear} type="button" className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
              Clear
            </button>
            <Button>Click me</Button>
          </div>
            <div className="mt-6 border-t pt-4 space-y-2">
              <h2 className="font-bold">Live Data</h2>
              <p><strong>Name: </strong>{watchedValues.name}</p>
              <p><strong>Email: </strong>{watchedValues.email}</p>
              <p><strong>Text: </strong>{watchedValues.message}</p>
            </div>
        </form>
      </div>
    </>
  )
}

export default MultiFieldFormWithReactHook;