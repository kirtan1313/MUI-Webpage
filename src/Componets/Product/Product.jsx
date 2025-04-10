import React, { useState } from 'react';
import { Box, Typography, IconButton, Button, Paper } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import products from '../../../data';
import toast, { Toaster } from 'react-hot-toast';

import './Product.css'

function ProductList({setProductsId,setWislistId}) {
   
    const handleWisiblit =(id)=>{
        setWislistId(id)
        toast.success('Product Wisiblit Is Succesfully...');

    }


    const handleAddToCart = (id) => {
        setProductsId(id);
        toast.success('Product Cart Is Succesfully...');
    }


    return (
        <>
            <Box sx={{ display: "flex", paddingLeft: '16px', justifyContent: "space-between", alignItems: "center", pb: 5 }}>
                <Typography variant="h5" fontWeight="bold">
                    Best Products
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, p: 3, justifyContent: 'center' }}>
            <Toaster />
                {products.map((product, index) => (
                    <Paper

                        key={product.id}
                        elevation={3}
                        sx={{
                            width: 260,
                            borderRadius: 3,
                            padding: 2,
                            position: 'relative',
                            overflow: 'hidden',
                            '&:hover': {
                                boxShadow: '0px 2px 10px rgba(0,0,0,0.5)',
                            },
                        }}
                    >
                        <Box sx={{ position: 'absolute', top: 10, left: 10, backgroundColor: '#85cc61', color: 'white', fontSize: 12, padding: '2px 8px', borderRadius: '6px', fontWeight: 600 }}>
                            -30%
                        </Box>

                        <IconButton onClick={()=>handleWisiblit(product.id)}  sx={{ position: 'absolute', top: 10, right: 10, border: '1px solid #eee', borderRadius: '50%', backgroundColor: 'white', '&:hover': { backgroundColor: 'orange', color: 'white' } }}>
                            <FavoriteBorderIcon />
                        </IconButton>

                        <Box component="img" src={product.img} alt={product.title} sx={{ display: 'block', height: 200, width: 200, objectFit: 'contain', margin: '40px auto 20px auto' }} />

                        <Typography variant="subtitle1" fontWeight={600} textAlign="center">
                            {product.title}
                        </Typography>

                        <Box display="flex" justifyContent="center" alignItems="center" gap={1} mt={0.5}>
                            <Typography variant="body2" color="text.secondary">
                                {product.unit}
                            </Typography>
                            <StarIcon sx={{ fontSize: 16, color: '#FBBF24' }} />
                            <Typography variant="body2" color="text.secondary">
                                {product.rate}
                            </Typography>
                        </Box>

                        <Typography variant="h6" fontWeight="bold" mt={1} textAlign="center">
                            ${product.price}
                        </Typography>

                        <Button fullWidth variant="contained" color="primary" sx={{ mt: 1 }} onClick={()=>handleAddToCart(product.id)}>
                            Add to Cart
                        </Button>
                    </Paper>
                ))}
            </Box>
        </>
    );
}

export default ProductList;