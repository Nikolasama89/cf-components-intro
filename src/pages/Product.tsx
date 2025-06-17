import {useParams} from "react-router";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import { ProductSchema }  from "@/api/products"

const Product = () => {
  const { productId } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting},
    reset,
  } = useForm( {
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      image: "",
      price: 0,
      sort: 0,
      isActive: false,
      isFavorite: false,
      category_id: 1, // default to 1

    }
  });

  return (
    <>

    </>
  )
}

export default Product;