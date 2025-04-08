import * as React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Box,
} from '@mui/material';

import Blog1 from '../../assets/Imges/post-thumb-1.jpg';
import Blog2 from '../../assets/Imges/post-thumb-2.jpg';
import Blog3 from '../../assets/Imges/post-thumb-3.jpg';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderIcon from '@mui/icons-material/Folder';
import './Blog.css';

const blogData = [
    {
        img: Blog1,
        title: 'Top 10 casual look ideas to dress up your kids',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...',
    },
    {
        img: Blog2,
        title: 'Latest trends of wearing street wears supremely',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...',
    },
    {
        img: Blog3,
        title: '10 Different Types of comfortable clothes ideas for women',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...',
    },
];

export default function Blog() {
    return (
        <Box sx={{ px: { xs: 2, md: 4 }, pt: 6, pb:20 }}>
            <Typography
                variant="h5"
                fontWeight="bold"
                mb={4}
                textAlign="start"
                sx={{ fontSize: { xs: '24px', md: '32px' } }}
            >
                Latest Blog Posts
            </Typography>

            <Grid
                container
                spacing={4}
                sx={{
                    display: { xs: 'grid', md: 'flex' },
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: { md: 2 }, // Adds spacing between cards in flex layout
                }}
            >
                {blogData.map((item, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        sx={{
                            flex: { md: '1 0 calc(33.333% - 16px)' }, // Adjusts card width in flex layout
                        }}
                    >
                        <Card
                            sx={{
                                height: '100%',
                                borderRadius: 3,
                                boxShadow: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                overflow: 'hidden',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={item.img}
                                alt={item.title}
                                sx={{
                                    height: { xs: 200, md: 300 },
                                    width: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            <CardContent>
                                <Typography
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        flexWrap: 'wrap',
                                        fontSize: '14px',
                                        color: 'text.secondary',
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <CalendarMonthIcon sx={{ fontSize: '18px' }} />
                                        <Box component="span" sx={{ pl: 1 }}>
                                            22 Aug 2021
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 2 }}>
                                        <FolderIcon sx={{ fontSize: '18px' }} />
                                        <Box component="span" sx={{ pl: 1 }}>
                                            tips & tricks
                                        </Box>
                                    </Box>
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    sx={{ pt: 2, fontWeight: 700, fontSize: { xs: '16px', md: '18px' } }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        pt: 2,
                                        fontSize: { xs: '14px', md: '16px' },
                                        textAlign: 'justify',
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
