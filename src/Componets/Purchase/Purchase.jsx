import { Box, Button, Checkbox, Typography } from '@mui/material';
import React, { useState } from 'react';
import PurchaseBg from '../../assets/Imges/bg-leaves-img-pattern.png';

function Purchase() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleSubmit = () => {
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setEmailError(true);
            return;
        }
        setEmailError(false);
        console.log('Form submitted:', { name , email });

        

    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${PurchaseBg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '400px',
                width: '100%',
                marginTop: '40px',
                borderRadius: '10px',
                backgroundColor: '#E6F3FA',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 4,
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
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >
                <Box sx={{ fontSize: { xs: '32px', md: '48px' }, fontWeight: 'bold' }}>
                    Get{' '}
                    <Box component="span" sx={{ color: '#FFC43F' }}>
                        25% Discount
                    </Box>
                    <Box>on your first</Box>
                    <Box>purchase</Box>
                </Box>

                <Box sx={{ fontSize: '16px', color: '#555' }}>
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
                        padding: 3,
                        borderRadius: 2,
                        textAlign: 'center',
                        width: '100%',
                        maxWidth: '400px',
                    }}
                >
                    <Box sx={{ fontSize: '14px', color: 'gray' }}>
                        {/* Name Field */}
                        <Box
                            component="label"
                            sx={{
                                display: 'flex',
                                justifyContent: 'start',
                                fontSize: '18px',
                                paddingBottom: '10px',
                            }}
                        >
                            Name
                        </Box>
                        <Box
                            component="input"
                            placeholder="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{
                                outline: 'none',
                                border: '1px solid #ccc',
                                padding: '10px 16px',
                                borderRadius: '8px',
                                fontSize: '16px',
                                width: '100%',
                            }}
                        />

                        {/* Email Field */}
                        <Box
                            component="label"
                            required
                            sx={{
                                paddingTop: '18px',
                                display: 'flex',
                                justifyContent: 'start',
                                fontSize: '18px',
                                paddingBottom: '10px',
                            }}
                        >
                            Email
                        </Box>
                        <Box
                            component="input"
                            placeholder="abc@gmail.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                outline: 'none',
                                border: '1px solid #ccc',
                                padding: '10px 16px',
                                borderRadius: '8px',
                                fontSize: '16px',
                                width: '100%',
                                borderColor: emailError ? 'red' : '#ccc',
                            }}
                        />
                        {emailError && (
                            <Typography
                                sx={{
                                    color: 'red',
                                    fontSize: '12px',
                                    marginTop: '4px',
                                    textAlign: 'left',
                                }}
                            >
                                Please enter a valid email address.
                            </Typography>
                        )}

                        {/* Newsletter Checkbox */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                paddingTop: '10px',
                                paddingBottom: '15px',
                            }}
                        >
                            <Checkbox />
                            <Box component="span" sx={{ fontSize: '16px' }}>
                                Subscribe to the newsletter
                            </Box>
                        </Box>

                        {/* Submit Button */}
                        <Button
                            sx={{
                                width: '100%',
                                backgroundColor: 'black',
                                color: 'white',
                                padding: '10px 0',
                                fontSize: '16px',
                                '&:hover': {
                                    backgroundColor: '#333',
                                },
                            }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Purchase;
