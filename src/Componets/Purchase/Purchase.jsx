import { Box, Button, Checkbox, TextField } from '@mui/material';
import React from 'react';
import PurchaseBg from '../../assets/Imges/bg-leaves-img-pattern.png';
import { orange } from '@mui/material/colors';

function Purchase() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${PurchaseBg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '400px',
                    width: '100%',
                    marginTop: '40px',
                    borderRadius: '10px',
                    backgroundColor: '#E6F3FA',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 2,
                    padding: 4,
                }}
            >
                {/* Left Column */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: 2,
                    }}
                >
                    <Box sx={{ fontSize: '48px', fontWeight: 'bold' }}>
                        Get{' '}
                        <Box component="span" sx={{ color: '#FFC43F' }}>
                            25% Discount
                        </Box>
                        <Box>on your first</Box>
                        <Box>purchase</Box>
                    </Box>

                    <Box sx={{ fontSize: '18px', color: '#555' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.
                    </Box>
                </Box>

                {/* Right Column */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            // backgroundColor: 'white',
                            padding: 3,
                            borderRadius: 2,
                            // boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                            width: '80%',
                        }}
                    >

                        <Box sx={{ fontSize: '14px', color: 'gray' }}>
                            <Box component='label' sx={{ display: 'flex', justifyContent: 'start', fontSize: '18px', paddingBottom: '10px' }}>Name</Box>
                            <Box
                                component="input"
                                placeholder="Name"
                                type='name'
                                sx={{
                                    outline: 'none',
                                    border: 'none',
                                    padding: '10px 16px',
                                    borderRadius: '8px',
                                    fontSize: '16px',
                                    width: '100%',

                                }}
                            />

                            <Box component='label' sx={{ paddingTop: '18px', display: 'flex', justifyContent: 'start', fontSize: '18px', paddingBottom: '10px' }}>Email</Box>
                            <Box
                                component="input"
                                placeholder="abc@gmail.com"
                                type='email'
                                sx={{
                                    outline: 'none',
                                    border: 'none',
                                    padding: '10px 16px',
                                    borderRadius: '8px',
                                    fontSize: '16px',
                                    width: '100%',

                                }}
                            />

                            <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px',paddingBottom:'15px' }}>
                                <Checkbox />
                                <Box component='span' sx={{ fontSize: '18px' }}>Subscribe to the newsletter</Box>
                            </Box>

                            <Button
                                sx={{
                                    width: '100%',
                                    backgroundColor: 'black',
                                    color: 'white',
                                    padding: '10px 0'
                                }}
                            >
                                Submit
                            </Button>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Purchase;
