import { Box, Typography, Button, Divider } from '@mui/material';
import React from 'react';
import BannerImg1 from '../../assets/Imges/product-thumb-1.png';
import BannerImg2 from '../../assets/Imges/ad-image-1.png';
import BannerImg3 from '../../assets/Imges/ad-image-2.png';
import '@fontsource/nunito-sans';
import './Banner.css'


function Banner() {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1.5fr 1fr' },
                gap: 3,
                padding: 3,
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: '#E6F3FA',
                    borderRadius: '12px',
                    padding: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: { xs: '300px', md: '600px' },
                    overflow: 'hidden',
                }}
            >
                {/* Text Content */}
                <Box sx={{ maxWidth: '50%', fontFamily: 'Nunito Sans, sans-serif' }}>
                    <Typography sx={{ color: '#E8A31C', fontSize: '36px' }}>
                        100% Natural
                    </Typography>
                    <Typography sx={{ color: '#222', fontSize: '45px', lineHeight: 1.2, paddingTop: '20px' }}>
                        Fresh Smoothie & Summer Juice
                    </Typography>
                    <Typography sx={{ color: '#555', fontSize: '16px', pt: 3, lineHeight: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.
                    </Typography>
                    <Box sx={{ pt: 5 }}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#222', color: '#222', padding: '15px',
                                fontSize: '16px', transition: 'all 0.3s'
                                , '&:hover': {
                                    backgroundColor: '#000',
                                    color: '#fff',
                                    borderColor: '#000'
                                }
                            }}
                        >
                            SHOP NOW
                        </Button>
                    </Box>
                </Box>

                {/* Product Image */}
                <Box
                    component="img"
                    src={BannerImg1}
                    alt="Smoothie Juice"
                    sx={{
                        width: { xs: '180px', md: '300px' },
                        height: 'auto',
                        objectFit: 'contain',
                        position: 'absolute',
                        right: '20%',
                        transform: 'translateX(50%)',
                        bottom: '50%',
                        translate: '0 50%',
                    }}
                />
            </Box>


            {/* Right Side - Discount Banners */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Fruits & Vegetables Banner */}
                <Box
                    sx={{
                        backgroundColor: '#eef5e5',
                        borderRadius: '12px',
                        height: { xs: '180px', md: '50%' },
                        padding: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Left Text */}
                    <Box sx={{ zIndex: 2 }}>
                        <Typography sx={{ fontSize: '36px', color: '#222' }}>
                            20% Off
                        </Typography>
                        <Typography sx={{ fontSize: '12px', color: 'black',pt:2,pb:2 }}>
                           
                            ----------  SALE
                        </Typography>
                        <Typography sx={{ fontSize: '30px',  fontWeight:600, color: '#222' }}>
                            Fruits & 
                            <Box>Vegetables</Box>
                        </Typography>
                        <Typography sx={{ fontSize: '16px', color: '#777', mt: 1 }}>
                            Shop Collection →
                        </Typography>
                    </Box>

                    {/* Right Image */}
                    <Box
                        component="img"
                        src={BannerImg2}
                        alt="Fruits & Vegetables"
                        sx={{
                            position: 'absolute',
                            right: '53px',
                            bottom: 0,
                            height: '100%',
                            maxHeight: '230px',
                            objectFit: 'contain',
                            transform: 'translateX(20%)',
                            zIndex: 1,
                        }}
                    />
                </Box>

                {/* Baked Products Banner */}
                <Box
                    sx={{
                        backgroundColor: '#F9EBE7',
                        borderRadius: '12px',
                        height: { xs: '180px', md: '50%' },
                        padding: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Left Text */}
                    <Box sx={{ zIndex: 2 }}>
                        <Typography sx={{ fontSize: '36px', color: '#222' }}>
                            15% Off
                        </Typography>
                        <Typography sx={{ fontSize: '12px', color: 'black',pt:2,pb:2  }}>
                            ------- SALE
                            </Typography>
                        <Typography sx={{ fontSize: '30px', fontWeight:500, color: '#222' }}>
                            Baked Products
                        </Typography>
                        <Typography sx={{ fontSize: '16px', color: '#777', mt: 1 }}>
                            Shop Collection →
                        </Typography>
                    </Box>

                    {/* Right Image */}
                    <Box
                        component="img"
                        src={BannerImg3}
                        alt="Baked Products"
                        sx={{
                            position: 'absolute',
                            right: '53px',
                            bottom: 0,
                            height: '100%',
                            maxHeight: '230px',
                            objectFit: 'contain',
                            transform: 'translateX(20%)',
                            zIndex: 1,
                        }}
                    />
                </Box>
            </Box>


        </Box>
    );
}

export default Banner;
