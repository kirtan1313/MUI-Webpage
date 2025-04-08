import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Typography, Paper } from "@mui/material";

// Import category icons
import icon1 from "../../assets/Imges/new-1.jpg";
import icon2 from "../../assets/Imges/new-2.jpg";
import icon3 from "../../assets/Imges/new-3.jpg";
import icon4 from "../../assets/Imges/new-4.jpg";
import './Newly.css'



function Newly() {
    const categoryData = [
        { id: 1, name: "Amber Bar", icon: icon1, dec: "Honey Best Nectar You Wish To Get" },
        { id: 2, name: "Amber Bar", icon: icon2, dec: "Honey Best Nectar You Wish To Get" },
        { id: 3, name: "Amber Bar", icon: icon3, dec: "Honey Best Nectar You Wish To Get" },
        { id: 4, name: "Amber Bar", icon: icon4, dec: "Honey Best Nectar You Wish To Get" },
        { id: 5, name: "Amber Bar", icon: icon1, dec: "Honey Best Nectar You Wish To Get" },
        { id: 6, name: "Amber Bar", icon: icon2, dec: "Honey Best Nectar You Wish To Get" },
        { id: 7, name: "Amber Bar", icon: icon3, dec: "Honey Best Nectar You Wish To Get" },
        { id: 8, name: "Amber Bar", icon: icon4, dec: "Honey Best Nectar You Wish To Get" },
    ];

    const NextArrow = ({ onClick }) => (
        <Box className="arrow next" onClick={onClick}>
            <KeyboardArrowRightIcon />
        </Box>
    );

    const PrevArrow = ({ onClick }) => (
        <Box className="arrow prev" onClick={onClick}>
            <KeyboardArrowLeftIcon />
        </Box>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <Box sx={{ px: 2, py: 5 }}>
            {/* Header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pb: 5 }}>
                <Typography variant="h5" fontWeight="bold">
                    Newly Arrived Brands
                </Typography>
            </Box>

            {/* Slider */}
            <Slider {...settings}>
                {categoryData.map((item) => (
                    <Box key={item.id} px={1}>
                        <Paper
                            elevation={3}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "12px",
                                px: 2,
                                py: 2,
                                width: '100%',
                                height: '150px',
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px) scale(1.02)",
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={item.icon}
                                alt={item.name}
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: "8px",
                                    objectFit: "cover",
                                    mr: 2,
                                }}
                            />
                            <Box>
                                <Typography variant="subtitle1" fontWeight="bold" color="text.primary" gutterBottom>
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.dec}
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                ))}
            </Slider>

            {/* Arrow styles */}
            <style>
                {`
                .arrow {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: #fff;
                    border-radius: 50%;
                    box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
                    cursor: pointer;
                    padding: 10px;
                    z-index: 10;
                }
                .next {
                    right: -25px !important;
                }
                .prev {
                    left: -25px;
                }
                `}
            </style>
        </Box>
    );
}

export default Newly;
