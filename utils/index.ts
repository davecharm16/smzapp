export async function fetchProducts(){
  const url = "https://dummyjson.com/products";


  const response = await fetch(url)

  if(!response.ok){
    throw new Error('Failed to fetch data')
  }

  return response.json();

}