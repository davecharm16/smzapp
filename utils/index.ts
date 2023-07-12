import { Product } from "@/types";

const host = "https://dummyjson.com"

export async function fetchProducts(){
  const url = host+ "/products?limit=8";

  const response = await fetch(url);

  if(!response.ok){
    throw new Error('Failed to fetch data');
  }
  
  return response.json();
}


export async function deleteProduct(id:number){
  const url = host+`/products/${id}`
  console.log(id);
  const response = await fetch(url, {
    method: 'DELETE',
    }
  );

  if(!response.ok) {
    throw new Error('Failed to Delete Data');
  }

  return response.json();
}

export async function addNewProduct(product:Product):Promise<Product>{
  const url = host+"/products/add";

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })

  if(!response.ok){
    throw new Error('Failed to Add Data');
  }

  return(response.json())
}