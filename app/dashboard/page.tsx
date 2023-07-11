'use client';
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem, GridCellParams, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { deleteProduct, fetchProducts } from '@/utils';
// import DeleteCell from '@/components/DeleteCell';
import DeleteIcon from '@mui/icons-material/Delete';



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
          ()=> {
            deleteProduct(params.id)
        }
      }
      />,
    ]
  }
];



const Dashboard = () => {

  const [products, setProducts] = useState([]);

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
      {/* <DeleteCell/> */}
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