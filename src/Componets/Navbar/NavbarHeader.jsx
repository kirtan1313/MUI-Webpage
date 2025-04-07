import { Box, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import './NavbarHeader.css'

function NavbarHeader() {

    const [nav, setNav] = useState(1);

    const handleChangeNav = (event) => {
        setNav(event.target.value);
    };

    return (
        <>
            <Box sx={{ paddingTop: '100px' }}>
                <Box sx={{ padding: 1, display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Select value={nav} onChange={handleChangeNav}
                            sx={{
                                width: 200,
                                '& fieldset': {
                                    border: 'none',
                                }
                            }}
                        >
                            <MenuItem value={1} className='menu-pad' >Shop by Departments</MenuItem>
                            <MenuItem value={2}>Groceries</MenuItem>
                            <MenuItem value={3}>Drinks</MenuItem>
                            <MenuItem value={4}>Chocolates</MenuItem>
                        </Select>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            paddingLeft: '20px',
                            gap: '25px',
                            cursor: 'pointer',
                        }}
                    >
                        {['Women', 'Men', 'Kids', 'Accessories', 'Pages', 'Brand', 'Sales', 'Blog'].map((item, index) => (
                            <Typography
                                key={index}
                                sx={{
                                    color: 'gray',
                                    transition: '0.3s',
                                    '&:hover': {
                                        color: 'black',
                                    },
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default NavbarHeader
