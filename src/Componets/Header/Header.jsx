import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Divider,
    IconButton,
    InputBase,
    MenuItem,
    Select,
    Toolbar,
    Typography,
    Drawer,
    useTheme,
    useMediaQuery,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../../assets/Imges/logo.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom'; 
import './Header.css';


function Header({cartProducts,wislistProduct}) {
    const [category, setCategory] = useState('all');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerType, setDrawerType] = useState('');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleCategoryChange = (e) => setCategory(e.target.value);
    const toggleDrawer = (type = '') => {
        setDrawerType(type);
        setDrawerOpen(true);
    };

    return (
        <>
            <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 'none', p: 1 }}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    {/* Logo */}
                    <Box className="logo-img" sx={{ flex: isMobile ? '1 1 100%' : '0 0 auto' }}>
                        <img src={Logo} alt="Logo" className="responsive-logo" />
                    </Box>

                    {/* Search & Category (hide on xs-sm) */}
                    {!isMobile && (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: '#f5f5f5',
                                borderRadius: 3,
                                px: 2,
                                py: 1,
                                flexGrow: 1,
                                mx: 2,
                            }}
                        >
                            <Select
                                value={category}
                                onChange={handleCategoryChange}
                                variant="standard"
                                disableUnderline
                                sx={{ minWidth: 150, mr: 2 }}
                            >
                                <MenuItem value="all">All Categories</MenuItem>
                                <MenuItem value="food">Food</MenuItem>
                                <MenuItem value="drinks">Drinks</MenuItem>
                            </Select>
                            <InputBase
                                placeholder="Search for more than 20,000 products"
                                sx={{ flexGrow: 1 }}
                            />
                            <SearchIcon sx={{ ml: 1 }} />
                        </Box>
                    )}

                    {/* Contact + Icons */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            flexWrap: 'wrap',
                            justifyContent: isMobile ? 'space-around' : 'flex-end',
                            flex: isMobile ? '1 1 100%' : '0 0 auto',
                            alignItems:'center'
                        }}
                    >
                        {/* For Support */}
                        {!isMobile && (
                            <Box textAlign="right">
                                <Typography variant="body2" color="gray">
                                    For Support?
                                </Typography>
                                <Typography fontWeight="bold">+980-34984089</Typography>
                            </Box>
                        )}

                        <IconButton>
                            <AccountCircleIcon />
                        </IconButton>
                        <Link to='/whisiblit'>
                            <FavoriteBorderIcon sx={{color:'gray'}}/>
                        </Link>

                        {/* Cart and Search Icon (xs to md only) */}
                        {isMobile && (
                            <>
                                <IconButton onClick={() => toggleDrawer('cart')}>
                                    <ShoppingCartIcon />
                                </IconButton>
                                <IconButton onClick={() => toggleDrawer('search')}>
                                    <SearchIcon />
                                </IconButton>
                            </>
                        )}

                        {/* Cart Info (md and up) */}
                        {!isMobile && (
                            <Box textAlign="right" sx={{position:'relative'}}>
                                <Link to="/cart">
                                    <AddShoppingCartIcon sx={{color:'gray',
                                        cursor:'pointer'
                                        
                                    }}/>
                                   <Box component='span'
                                    sx={{
                                        backgroundColor:'red',
                                        color:'#E6F3FA',
                                        borderRadius:'50%',
                                        padding:'1px 6px',
                                        position:'absolute',
                                        top:0
                                    }}
                                   > {cartProducts.length}</Box>
                                </Link>
                            </Box>
                        )}
                    </Box>
                </Toolbar>
                <Divider />
            </AppBar>

            {/* Drawer Sidebar (Dynamic Content) */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box width={300} p={2}>
                    {drawerType === 'search' && (
                        <>
                            <Typography variant="h6" gutterBottom>Search Products</Typography>
                            <InputBase
                                fullWidth
                                placeholder="Search here..."
                                sx={{
                                    border: '1px solid #ccc',
                                    borderRadius: 2,
                                    px: 2,
                                    py: 1,
                                }}
                            />
                        </>
                    )}

                    {drawerType === 'cart' && (
                        <>
                            <Typography variant="h6" gutterBottom>Your Cart</Typography>
                            {/* Dummy Cart Content */}
                            <Box mt={2}>
                                <Typography>No items in cart.</Typography>
                            </Box>
                        </>
                    )}
                </Box>
            </Drawer>
        </>
    );
}

export default Header;
