import {useNavigate, useParams} from "react-router";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {getProduct, updateProduct, productFormSchema, type ProductType, createProduct} from "../api/products"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Switch} from "@/components/ui/switch.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useEffect} from "react";
import {toast} from "sonner";

type ProductModeProps = {
  mode?: "edit" | "create";
}


const ProductEdit = ({mode}:ProductModeProps) => {
  const { productId } = useParams<{productId: string}>();
  const navigate = useNavigate();
  const isEdit = mode === "edit" || (!productId && mode === "create");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting},
    reset,
  } = useForm<Omit<ProductType, "id">>( {
    resolver: zodResolver(productFormSchema),
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

    },
  });

  useEffect(() => {
    if (productId) {
      getProduct(Number(productId))
        .then((data) => {
          // setValue("name", data.name ?? "");
          const values = {
            name: data.name ?? "",
            slug: data.slug ?? "",
            description: data.description ?? "",
            image: data.image ?? "",
            price: data.price ?? "",
            sort: data.sort ?? "",
            isActive: data.isActive ?? false,
            isFavorite: data.isFavorite ?? false,
            category_id: 1
          }
          reset(values);
        })
        .catch((err) => console.error(err));
    }
  }, [productId, reset]);

  const onSubmit = async (data: Omit<ProductType, "id">) => {
    try {
      if (isEdit && productId) {
        await updateProduct(Number(productId), data);
        toast.success("Product updated!");
        navigate("/products");
      } else {
        await createProduct(data);
        toast.success("Product created!");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong!");
    }
  }



  return (
    <>
      <form className="max-w-xl mx-auto mt-12 p-8 border rounded-lg space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl font-bold">{isEdit ? "Edit Product" : "Create new Product"}</h1>
        <div>
          <Label htmlFor="name">
            Name
          </Label>
          <Input id="name" {...register("name")}/>
          {errors.name && (
            <div className="text-red-800 tex-sm">{errors.name.message}</div>
          )}
        </div>

        <div>
          <Label htmlFor="slug">
            Slug
          </Label>
          <Input id="slug" {...register("slug")}/>
          {errors.slug && (
            <div className="text-red-800 tex-sm">{errors.slug.message}</div>
          )}
        </div>

        <div>
          <Label htmlFor="description">
            Description
          </Label>
          <Textarea id="description" {...register("description")}/>
          {errors.description && (
            <div className="text-red-800 tex-sm">{errors.description.message}</div>
          )}
        </div>

        <div>
          <Label htmlFor="image">
            Image
          </Label>
          <Input id="image" {...register("image")}/>
          {errors.image && (
            <div className="text-red-800 tex-sm">{errors.image.message}</div>
          )}
        </div>

        <div>
          <Label className="mb-1" htmlFor="price">
            Price
          </Label>
          <Input id="price" {...register("price")}/>
          {errors.price && (
            <div className="text-red-800 tex-sm">{errors.price.message}</div>
          )}
        </div>

        <div>
          <Label className="mb-1" htmlFor="sort">
            Sort
          </Label>
          <Input id="sort" {...register("sort")}/>
          {errors.sort && (
            <div className="text-red-800 tex-sm">{errors.sort.message}</div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="isActive" checked={watch("isActive")} onCheckedChange={(v) => setValue("isActive", v)} />
          <Label htmlFor="isActive">Active</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="isFavorite" checked={watch("isFavorite")} onCheckedChange={(v) => setValue("isFavorite", v)}/>
          <Label htmlFor="isFavorite">Favourite</Label>
        </div>

        <Button variant={"default"} type="submit" className="w-full" disabled={isSubmitting}
        >{isSubmitting ? "Submitting..." : "Submit"}</Button>

      </form>
    </>
  )
}

export default ProductEdit;