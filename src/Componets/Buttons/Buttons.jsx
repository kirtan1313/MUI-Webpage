import { Box, Link, Typography } from '@mui/material'
import React from 'react'

function Buttons() {

    const Allbtn = [
        {
            name: 'Blue diamond almonds'
        },
        {
            name: 'Angie’s Boomchickapop Corn'
        },
        {
            name: 'Salty kettle Corn'
        },
        {
            name: 'Chobani Greek Yogurt'
        },
        {
            name: 'Sweet Vanilla Yogurt'
        },
        {
            name: 'Foster Farms Takeout Crispy wings'
        },
        {
            name: 'Warrior Blend Organic'
        },
        {
            name: 'Chao Cheese Creamy'
        },
        {
            name: 'Chicken meatballs'
        },
        {
            name: 'Blue diamon almonds'
        },
        {
            name: 'Angie’s Boomchickapop Corn'
        },
        {
            name: 'Salty kettle Corn'
        }, {
            name: 'Chobani Greek Yogurt'
        },
        {
            name: 'Sweet Vanilla Yogurt'
        },
        {
            name: 'Foster Farms Takeout Crispy wings'
        },
        {
            name: 'Warrior Blend Organic'
        },
        {
            name: 'Chao Cheese Creamy'
        },
        {
            name: 'Chicken meatballs'
        },

    ]


    return (
        <>
            <Box sx={{ paddingTop: '120px',display: "flex", justifyContent: "space-between", alignItems: "center", pb: 5 }}>
                <Typography variant="h5" fontWeight="bold">
                    People are also looking for
                </Typography>
            </Box>
            <Box sx={{  display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {
                    Allbtn.map((items) => {
                        return (
                            <Link
                                href="#"
                                sx={{
                                    bgcolor: '#FCF7EB',
                                    p: 1,
                                    textDecoration: 'none',
                                    color: '#747474',
                                    borderRadius: 2,

                                    '&:hover': {
                                        bgcolor: '#FFECBE',
                                        color: 'black'
                                    }
                                }}
                            >
                                {items.name}
                            </Link>
                        )
                    })
                }
            </Box>
        </>
    )
}

export default Buttons
