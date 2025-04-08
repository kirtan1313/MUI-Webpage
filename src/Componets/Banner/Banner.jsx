import { Box, Typography, Button } from '@mui/material';
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
            {/* Left Banner */}
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: '#E6F3FA',
                    borderRadius: '12px',
                    padding: 4,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    height: { xs: 'auto', md: '600px' },
                    overflow: 'hidden',
                }}
            >
                {/* Text Content */}
                <Box
                    sx={{
                        maxWidth: { xs: '100%', md: '50%' },
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <Typography
                        sx={{
                            color: '#E8A31C',
                            fontSize: { xs: '24px', md: '36px' },
                        }}
                    >
                        100% Natural
                    </Typography>
                    <Typography
                        sx={{
                            color: '#222',
                            fontSize: { xs: '28px', md: '45px' },
                            lineHeight: 1.2,
                            pt: 2,
                        }}
                    >
                        Fresh Smoothie & Summer Juice
                    </Typography>
                    <Typography
                        sx={{
                            color: '#555',
                            fontSize: { xs: '14px', md: '16px' },
                            pt: 3,
                            lineHeight: 2,
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.
                    </Typography>
                    <Box sx={{ pt: { xs: 3, md: 5 } }}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#222',
                                color: '#222',
                                padding: { xs: '10px 20px', md: '15px' },
                                fontSize: '16px',
                                transition: 'all 0.3s',
                                '&:hover': {
                                    backgroundColor: '#000',
                                    color: '#fff',
                                    borderColor: '#000',
                                },
                            }}
                        >
                            SHOP NOW
                        </Button>
                    </Box>
                </Box>

                {/* Image */}
                <Box
                    component="img"
                    src={BannerImg1}
                    alt="Smoothie Juice"
                    sx={{
                        width: { xs: '100%', md: '299px' },
                        height: 'auto',
                        objectFit: 'contain',
                        mt: { xs: 3, md: 0 },
                        position: { md: 'absolute' },
                        right: { md: '10%' },
                        bottom: { md: '50%' },
                        transform: { md: 'translateY(50%)' },
                    }}
                />
            </Box>

            {/* Right Banners */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* First Right Banner */}
                <Box
                    sx={{
                        backgroundColor: '#eef5e5',
                        borderRadius: '12px',
                        height: { xs: 'auto', md: '50%' },
                        // padding: 3,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        overflow: 'hidden',
                    }}
                >
                    {/* Text Content */}
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' },padding:3 }}>
                        <Typography sx={{ fontSize: { xs: '24px', md: '36px' }, color: '#222' }}>
                            20% Off
                        </Typography>
                        <Typography
                            sx={{ fontSize: { xs: '12px', md: '16px' }, color: 'black', pt: 2 }}
                        >
                            SALE
                        </Typography>
                        <Typography
                            sx={{ fontSize: { xs: '20px', md: '30px' }, color: '#222', fontWeight: 600 }}
                        >
                            Fruits & Vegetables
                        </Typography>
                        <Typography sx={{ fontSize: '16px', color: '#777', mt: 1 }}>
                            Shop Collection →
                        </Typography>
                    </Box>

                    {/* Image */}
                    <Box
                        component="img"
                        src={BannerImg2}
                        alt="Fruits & Vegetables"
                        sx={{
                            width: { xs: '100%', md: '200px' },
                            height: 'auto',
                            objectFit: 'contain',
                            mt: { xs: 3, md: 0 },
                        }}
                    />
                </Box>

                {/* Second Right Banner */}
                <Box
                    sx={{
                        backgroundColor: '#F9EBE7',
                        borderRadius: '12px',
                        height: { xs: 'auto', md: '50%' },
                        // padding: 3,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        overflow: 'hidden',
                        alignItems:'end',
                        justifyContent:'space-between'
                    }}
                >
                    {/* Text Content */}
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } ,padding:3}}>
                        <Typography sx={{ fontSize: { xs: '24px', md: '36px' }, color: '#222' }}>
                            15% Off
                        </Typography>
                        <Typography
                            sx={{ fontSize: { xs: '12px', md: '16px' }, color: 'black', pt: 2 }}
                        >
                            SALE
                        </Typography>
                        <Typography
                            sx={{ fontSize: { xs: '20px', md: '30px' }, color: '#222', fontWeight: 500 }}
                        >
                            Baked Products
                        </Typography>
                        <Typography sx={{ fontSize: '16px', color: '#777', mt: 1 }}>
                            Shop Collection →
                        </Typography>
                    </Box>

                    {/* Image */}
                    <Box
                        component="img"
                        src={BannerImg3}
                        alt="Baked Products"
                        sx={{
                            width: { xs: '100%', md: '200px' },
                            height: 'auto',
                            objectFit: 'contain',
                            mt: { xs: 3, md: 0 },
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Banner;
