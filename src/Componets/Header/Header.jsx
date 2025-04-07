import {
    AppBar,
    Box,
    Divider,
    IconButton,
    MenuItem,
    Select,
    Toolbar,
} from '@mui/material';
import React, { useState } from 'react';
import Logo from '../../assets/Imges/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Header.css';
// import Navbar from '../Navbar/Navbar';

function Header() {
    const [category, setCategory] = useState('all');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <>
            <AppBar sx={{ bgcolor: 'white', boxShadow: 'none', padding: 1 }}>
                {/* GRID Layout for Toolbar */}
                <Toolbar
                    sx={{
                        display: 'grid',
                        gridTemplateAreas: `
                            "logo search support icons"
                        `,
                        gridTemplateColumns: '2fr 6fr 2fr 2fr',
                        alignItems: 'center',
                        gap: 2,
                        paddingBottom:'20px'
                    }}
                >
                    {/* Logo Area */}
                    <Box sx={{ gridArea: 'logo' }}>
                        <img src={Logo} alt="logo.png" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>

                    {/* Search Area with Category */}
                    <Box
                        size={{xs:'none'}}
                        sx={{
                            gridArea: 'search',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingLeft:'20px',
                            // gap: 1,
                        }}
                    >
                        <Select
                            value={category}
                            onChange={handleChange}
                            variant="outlined"
                            sx={{
                                bgcolor: '#f0f0f0',
                                width: 180,
                                height: 45,
                                 padding:'0 8px',
                                borderRadius: '8px 0 0 8px',

                                '& fieldset': {
                                    border: 'none',

                                },
                            }}
                        >
                            <MenuItem value="all">All Categories</MenuItem>
                            <MenuItem value="food">Food</MenuItem>
                            <MenuItem value="drinks">Drinks</MenuItem>
                        </Select>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: '#f0f0f0',
                                px: 1,
                                borderRadius: '0 8px 8px 0',
                                height: 45,
                                width: '100%',
                               
                            }}
                        >
                            <input
                                type="search"
                                placeholder="Search For More Than 20,000 Products"
                                className="header-input"
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    background: 'transparent',
                                    flex: 1,
                                    fontSize:'16px'
                                }}
                            />
                            <SearchIcon sx={{ color: 'black' }} />
                        </Box>
                    </Box>

                    {/* Support Section */}
                    <Box sx={{ gridArea: 'support', color: 'black', }}>
                        <p style={{ margin: 0, fontSize:'17px',paddingBottom:'5px', display: 'flex', justifyContent: 'end',color:'gray' }}>For Support</p>
                        <Box sx={{ display: 'flex', justifyContent: 'end',fontSize:'20px',fontWeight:700 }}>+1800-010-0011</Box>
                    </Box>

                    {/* Icons */}
                    <Box sx={{ gridArea: 'icons', display: 'flex', justifyContent: 'center', }}>
                        <IconButton >
                            <AccountCircleIcon  sx={{fontSize:'35px',color:'black'}}/>
                        </IconButton>
                        <IconButton >
                            <FavoriteBorderIcon sx={{fontSize:'35px',color:'black'}} />
                        </IconButton>
                    </Box>
                </Toolbar>
                <Divider sx={{ border: '1px solid gray', opacity: 0.2, }} />
            </AppBar>
            {/* <Navbar /> */}
        </>
    );
}

export default Header;

