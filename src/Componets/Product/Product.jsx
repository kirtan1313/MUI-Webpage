import React, { useState } from 'react';
import { Box, Typography, IconButton, Button, Paper } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

// Sample product images
import bananas from '../../assets/Imges/thumb-bananas.png';
import biscuits from '../../assets/Imges/thumb-biscuits.png';
import cucumber from '../../assets/Imges/thumb-cucumber.png';
import milk from '../../assets/Imges/thumb-milk.png';
import './Product.css'

function ProductList() {
    const initialQuantities = Array(10).fill(0);
    const [quantities, setQuantities] = useState(initialQuantities);

    const products = [
        { img: bananas, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
        { img: biscuits, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
        { img: cucumber, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
        { img: milk, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
        { img: bananas, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
        { img: biscuits, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
        { img: cucumber, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
        { img: milk, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
        { img: bananas, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
        { img: biscuits, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
    ];

    const handleIncrement = (index) => {
        const updated = [...quantities];
        updated[index] += 1;
        setQuantities(updated);
    };

    const handleDecrement = (index) => {
        const updated = [...quantities];
        if (updated[index] > 0) updated[index] -= 1;
        setQuantities(updated);
    };

    return (
        <>
            <Box sx={{ display: "flex", paddingLeft: '16px', justifyContent: "space-between", alignItems: "center", pb: 5 }}>
                <Typography variant="h5" fontWeight="bold">
                    Newly Arrived Brands
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, p: 3, justifyContent: 'center' }}>
                {products.map((product, index) => (
                    <Paper
                        key={index}
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

                        <IconButton sx={{ position: 'absolute', top: 10, right: 10, border: '1px solid #eee', borderRadius: '50%', backgroundColor: 'white', '&:hover': { backgroundColor: 'orange', color: 'white' } }}>
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
                            {product.price}
                        </Typography>

                        <Box display="flex" justifyContent="center" alignItems="center" mt={1.5} px={1}>
                            <Box display="flex" alignItems="center" gap={1}>
                                <Button variant="outlined" size="small" sx={{ minWidth: '28px', height: '28px' }} onClick={() => handleDecrement(index)}>
                                    <RemoveIcon fontSize="small" />
                                </Button>
                                <Typography>{quantities[index]}</Typography>
                                <Button variant="outlined" size="small" sx={{ minWidth: '28px', height: '28px' }} onClick={() => handleIncrement(index)}>
                                    <AddIcon fontSize="small" />
                                </Button>
                            </Box>
                        </Box>

                        <Button fullWidth variant="contained" color="primary" sx={{ mt: 1 }}>
                            Add to Cart
                        </Button>
                    </Paper>
                ))}
            </Box>
        </>
    );
}

export default ProductList;