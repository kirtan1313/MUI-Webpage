import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ads1 from '../../assets/Imges/ad-image-3.png';
import ads2 from '../../assets/Imges/ad-image-4.png';

function Ads() {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, // Single column on small, two on medium and above
                gap: 3,
                pt: 4,
                overflow: 'hidden', // Prevent content overflow
            }}
        >
            {/* Left Ad */}
            <Box
                sx={{
                    backgroundColor: '#F9EBE7',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 3,
                    height: { xs: 'auto', md: '300px' },
                }}
            >
                {/* Text Section */}
                <Box
                    sx={{
                        textAlign: { xs: 'center', md: 'left' },
                        mb: { xs: 2, md: 0 },
                        width: { xs: '100%', md: '50%' },
                        overflow: 'hidden',
                    }}
                >
                    <Typography variant="h4" sx={{ color: 'orange' }} pb={2}>
                        Upto 25% Off
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" pb={2}>
                        Luxa Dark Chocolate
                    </Typography>
                    <Typography variant="body1" color="text.secondary" pt={1}>
                        Very tasty & creamy vanilla flavour creamy muffins.
                    </Typography>
                    <Box pt={2}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#222',
                                color: '#222',
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

                {/* Image Section */}
                <Box
                    component="img"
                    src={ads1}
                    alt="Chocolate Muffins"
                    sx={{
                        height: { xs: 'auto', md: '100%' },
                        maxWidth: '50%',
                        objectFit: 'contain',
                        mx: { xs: 'auto', md: 0 },
                    }}
                />
            </Box>

            {/* Right Ad */}
            <Box
                sx={{
                    backgroundColor: '#E6F3FA',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 3,
                    height: { xs: 'auto', md: '300px' },
                }}
            >
                {/* Text Section */}
                <Box
                    sx={{
                        textAlign: { xs: 'center', md: 'left' },
                        mb: { xs: 2, md: 0 },
                        width: { xs: '100%', md: '50%' },
                        overflow: 'hidden',
                    }}
                >
                    <Typography variant="h4" sx={{ color: 'orange' }} pb={2}>
                        Upto 25% Off
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" pb={2}>
                        Creamy Muffins
                    </Typography>
                    <Typography variant="body1" color="text.secondary" pt={1}>
                        Very tasty & creamy vanilla flavour creamy muffins.
                    </Typography>
                    <Box pt={2}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#222',
                                color: '#222',
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

                {/* Image Section */}
                <Box
                    component="img"
                    src={ads2}
                    alt="Muffins Variety"
                    sx={{
                        height: { xs: 'auto', md: '100%' },
                        maxWidth: '50%',
                        objectFit: 'contain',
                        mx: { xs: 'auto', md: 0 },
                    }}
                />
            </Box>
        </Box>
    );
}

export default Ads;
