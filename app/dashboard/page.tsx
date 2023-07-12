'use client';
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem, GridCellParams, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { addNewProduct, deleteProduct, fetchProducts } from '@/utils';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product } from '@/types';
import AddForm from '@/components/AddForm';


const Dashboard = () => {


  const [products, setProducts] = useState<Product[]>([]);

  const filterProduct = (productArray: Product[], pro_id: number) => {
    setProducts(productArray.filter((product) => product.id !== pro_id));
  };

  const addProduct = async (prod:Product) => {
    try {
      const res = await addNewProduct(prod);
      setProducts(prev => ([...prev,res]))
    }
    catch (e){
      console.log(e);
    }
  }

  const columns: GridColDef[] = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 90 
    },
    {
      field: 'title',
      headerName: 'Product Name',
      flex:1,
    },
    {
      field: 'description',
      headerName: 'Product Description',
      flex:1,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      flex:1,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      type: 'number',
      flex:1,
    },
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: (params:any) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={
            async ()=> {
              filterProduct(products, params.id);
              const result = await deleteProduct(params.id);
              // if (result.isDeleted == true) {
              console.log(params.id)
              // }
            }
          }
        />,
      ]
    }
  ];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData.products);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(products)
  }, [products])
  

  return (
    <div className='flex min-w-full min-h-screen justify-center p-6 flex-col items-center'>
      <AddForm  addProduct = {addProduct}/>
      <Box sx={{ height: 600, width: '100%' , maxWidth: '1000px'}}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 30,
            },
          },
        }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  )
}

export default Dashboard