import React, { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart({ cartProducts, setCartProducts }) {
    const initialQuantities = Array(cartProducts.length).fill(1);
    const [quantities, setQuantities] = useState(initialQuantities);

    const handleIncrement = (index) => {
        const updated = [...quantities];
        updated[index] += 1;
        setQuantities(updated);
    };

    const handleDecrement = (index) => {
        const updated = [...quantities];
        if (updated[index] > 1) updated[index] -= 1;
        setQuantities(updated);
    };

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter((item) => item.id !== id);
        setCartProducts(filteredProducts);
    };

    const subTotalPrice = () => {
        return cartProducts.reduce((total, product, id) => {
            return total + product.price * (quantities[id] || 0);
        }, 0);
    };

    

    if (cartProducts.length === 0) {
        return (
            <Typography variant="h6" textAlign="center" sx={{ mt: 5 }}>
                Your cart is empty.
            </Typography>
        );
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, p: 3, justifyContent: 'start' }}>
                {cartProducts.map((product, index) => (
                    <Paper
                        key={product.id}
                        elevation={3}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: 464,
                            borderRadius: 3,
                            padding: 2,
                            overflow: 'hidden',
                            '&:hover': {
                                boxShadow: '0px 2px 10px rgba(0,0,0,0.5)',
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={product.img}
                            alt={product.title}
                            sx={{
                                width: 150,
                                height: 150,
                                objectFit: 'contain',
                                marginRight: 2,
                            }}
                        />

                        <Box sx={{ flex: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    {product.title}
                                </Typography>
                                <Button onClick={() => handleDelete(product.id)}>
                                    <DeleteIcon sx={{ color: 'red', cursor: 'pointer' }} />
                                </Button>
                            </Box>

                            <Typography variant="h6" fontWeight="bold" mt={1}>
                                ${product.price}
                            </Typography>

                            <Box display="flex" alignItems="center" gap={1} mt={1.5}>
                                <Button variant="outlined" size="small" onClick={() => handleDecrement(index)}>
                                    -
                                </Button>
                                <Typography>{quantities[index]}</Typography>
                                <Button variant="outlined" size="small" onClick={() => handleIncrement(index)}>
                                    +
                                </Button>
                            </Box>
                            
                        </Box>
                    </Paper>
                ))}
            </Box>

            <Box
                sx={{
                    bgcolor: 'blue',
                    color: 'white',
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: 2,
                    mt: 3,
                }}
            >
                <Typography variant="h6" fontWeight="bold">
                    Total Price:
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                    ${subTotalPrice().toFixed(2)}
                </Typography>
            </Box>
        </>
    );
}

export default Cart;
