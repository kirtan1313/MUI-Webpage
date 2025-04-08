import { Box, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StoreIcon from '@mui/icons-material/Store';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedeemIcon from '@mui/icons-material/Redeem';
import './Methods.css'

function Methods() {
    const data = [
        {
            icon: ShoppingCartIcon,
            name: 'Free delivery',
            disc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
        },
        {
            icon: AdminPanelSettingsIcon,
            name: '100% secure payment',
            disc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
        },
        {
            icon: StoreIcon,
            name: 'Quality guarantee',
            disc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
        },
        {
            icon: FavoriteBorderIcon,
            name: 'Guaranteed savings',
            disc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
        },
        {
            icon: RedeemIcon,
            name: 'Daily offers',
            disc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
        },
    ];

    return (
        <Box 
            className="method-wrap"
        sx={{
            display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 3, p: 3, paddingTop: '60px',
        }}>
            {data.map((item, index) => {
                const Icon = item.icon;
                return (
                    <Box key={index} textAlign="center">
                        <Icon sx={{ fontSize: 40, color: 'orange' }} />
                        <Typography variant="h5" mt={1}>{item.name}</Typography>
                        <Typography variant="body1" pt={1} color="text.secondary">{item.disc}</Typography>
                    </Box>
                );
            })}
        </Box>
    );
}

export default Methods;
