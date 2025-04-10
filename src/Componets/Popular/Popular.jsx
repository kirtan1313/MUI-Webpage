import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Box,
    Typography,
    IconButton,
    Button,
    Paper
} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Sample product images
import bananas from '../../assets/Imges/thumb-bananas.png';
import biscuits from '../../assets/Imges/thumb-biscuits.png';
import cucumber from '../../assets/Imges/thumb-cucumber.png';
import milk from '../../assets/Imges/thumb-milk.png';

const products = [
    { img: bananas, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
    { img: biscuits, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
    { img: cucumber, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
    { img: milk, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
    { img: bananas, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
    { img: biscuits, title: 'Sunstar Fresh Melon Juice', unit: '1 Unit', rate: '4.5', price: '$18.00' },
];

const NextArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: 'absolute',
            right: -20,
            top: '40%',
            backgroundColor: '#fff',
            zIndex: 1,
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            '&:hover': { backgroundColor: 'orange', color: 'white' },
        }}
    >
        <KeyboardArrowRightIcon />
    </IconButton>
);

const PrevArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: 'absolute',
            left: -20,
            top: '40%',
            backgroundColor: '#fff',
            zIndex: 1,
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            '&:hover': { backgroundColor: 'orange', color: 'white' },
        }}
    >
        <KeyboardArrowLeftIcon />
    </IconButton>
);

function Popular() {
    // const [quantities, setQuantities] = useState(Array(products.length).fill(0));

    // const handleIncrement = (index) => {
    //     const updated = [...quantities];
    //     updated[index] += 1;
    //     setQuantities(updated);
    // };

    // const handleDecrement = (index) => {
    //     const updated = [...quantities];
    //     if (updated[index] > 0) updated[index] -= 1;
    //     setQuantities(updated);
    // };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 900, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <Box sx={{ px: 4, py: 6, position: 'relative' }}>
            <Typography variant="h5" fontWeight="bold" mb={3}>
                Popular Products
            </Typography>
            <Slider {...settings}>
                {products.map((product, index) => (
                    <Box key={index} px={1}>
                        <Paper
                            elevation={3}
                            sx={{
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

                            {/* <Box display="flex" justifyContent="center" alignItems="center" mt={1.5} px={1}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <Button variant="outlined" size="small" sx={{ minWidth: '28px', height: '28px' }} onClick={() => handleDecrement(index)}>
                                        <RemoveIcon fontSize="small" />
                                    </Button>
                                    <Typography>{quantities[index]}</Typography>
                                    <Button variant="outlined" size="small" sx={{ minWidth: '28px', height: '28px' }} onClick={() => handleIncrement(index)}>
                                        <AddIcon fontSize="small" />
                                    </Button>
                                </Box>
                            </Box> */}

                            <Button fullWidth variant="contained" color="primary" sx={{ mt: 1 }}>
                                Add to Cart
                            </Button>
                        </Paper>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default Popular;
