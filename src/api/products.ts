import {z} from 'zod';

const API_URL: string = import.meta.env.VITE_API_URL;
const TENANT_ID: string = import.meta.env.VITE_TENANT_ID;

export const ProductSchema = z.object({
  id: z.coerce.number().int(),
  name: z.string().min(1, "Required"),
  slug: z.string().min(1, "Required").regex(/^[a-zA-Z0-9]+$/, "Slug must use only latin letters"),
  description: z.string().optional(),
  image: z.string().url("Must be a valid url").optional().or(z.literal("")),
  price: z.coerce.number().nonnegative("Must be greater thar 0"),
  isActive: z.boolean(),
  isFavorite: z.boolean(),
  sort: z.coerce.number().int().min(0, "Must greater thar 0"),
  category_id: z.number().int().min(1, "Category is required"),
})

export const productFormSchema = ProductSchema.omit({id: true});

export type ProductType = z.infer<typeof ProductSchema>


// export type Product = {
//   id: number,
//   name: string,
//   slug: string,
//   description: string,
//   image?: string,
//   price: number,
//   isActive: boolean,
//   isFavorite: boolean,
//   sort: number,
//   category_id?: number,
// }

export async function getProducts(): Promise<ProductType[]> {
  const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/`);
  if (!res.ok) throw new Error("Failed to get products");
  const data = await res.json();
  console.log(data);
  return data;
}

export async function getProduct(id: number): Promise<ProductType> {
  const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`);
  if (!res.ok) throw new Error("Failed to get product");
  return await res.json();
}

export async function updateProduct(
  id: number,
  data:{
    name: string;
    slug: string;
    description?: string | undefined;
    image?: string | undefined;
    price: number;
    isActive: boolean;
    isFavorite: boolean;
    sort: number;

}): Promise<ProductType> {
  const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update product");
  return await res.json();
}

export async function deleteProduct(id: number): Promise<void> {
  const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete products");
}