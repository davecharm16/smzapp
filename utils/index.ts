
export async function fetchProducts(){
  const url = "https://dummyjson.com/products?limit=50";

  const response = await fetch(url);

  if(!response.ok){
    throw new Error('Failed to fetch data');
  }
  
  return response.json();
}


export async function deleteProduct(id:number){
  const url = `https://dummyjson.com/products/${id}`
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