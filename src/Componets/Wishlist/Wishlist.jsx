import React from 'react';
import { Box, Typography, IconButton, Button, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
// import products from '../../../data'; 

function Wishlist({ wislistProduct, setwislistProduct }) {
    console.log('myWislist', wislistProduct);


    const handleRemoveFromWishlist = (id) => {
        const wislistDelete = wislistProduct.filter((item) => {
            return item.id !== id
        })
        setwislistProduct(wislistDelete)
    };


    if (wislistProduct.length === 0) {
        return (

            <Typography variant="h6" textAlign="center" sx={{ mt: 5 }}>
                Your cart is empty.
            </Typography>

        );
    }

    return (
        <Box sx={{ padding: '16px' }}>
            <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">
                My Wishlist
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', position: 'relative' }}>
                {wislistProduct.map((product) => (
                    <Paper
                        key={product.id}
                        elevation={3}
                        sx={{
                            width: 300,
                            borderRadius: 3,
                            padding: 2,
                            position: 'relative',
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
                                display: 'block',
                                height: 180,
                                width: '100%',
                                objectFit: 'contain',
                                margin: '0 auto 16px',
                            }}
                        />

                        <Typography variant="subtitle1" fontWeight={600} textAlign="center">
                            {product.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" textAlign="center" mt={0.5}>
                            {product.unit}
                        </Typography>

                        <Typography variant="h6" fontWeight="bold" mt={1} textAlign="center">
                            ${product.price}
                        </Typography>

                        <Box display="flex" justifyContent="center" mt={2}>
                            

                            <IconButton
                                onClick={() => handleRemoveFromWishlist(product.id)}
                                color="error"
                                aria-label="Remove from wishlist"

                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
}

export default Wishlist;
