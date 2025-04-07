import * as React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid,
    Box
} from '@mui/material';

import Blog1 from '../../assets/Imges/post-thumb-1.jpg';
import Blog2 from '../../assets/Imges/post-thumb-2.jpg';
import Blog3 from '../../assets/Imges/post-thumb-3.jpg';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderIcon from '@mui/icons-material/Folder';



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
        <Box sx={{ px: 4, pt: 6,paddingBottom:'120px' }}>
            <Typography variant="h5" fontWeight="bold" mb={4}>
                Latest Blog Posts
            </Typography>

            <Grid container spacing={3} >
                {blogData.map((item, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Card
                            sx={{
                                height: 'auto',
                                borderRadius: 3,
                                boxShadow: 3,
                                width: '458px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={item.img}
                                alt={item.title}
                                sx={{
                                    height: 320,
                                    width: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            <CardContent>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box>
                                        <CalendarMonthIcon sx={{ fontSize: '18px', }} /><Box component='span' sx={{ paddingLeft: '10px' }}>22 Aug 2021</Box>
                                    </Box>
                                    <Box sx={{ paddingLeft: '14px' }}>
                                        <FolderIcon sx={{ fontSize: '18px', }} /><Box component='span' sx={{ paddingLeft: '10px' }}>tips & tricks</Box>
                                    </Box>
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div" sx={{paddingTop:'15px',fontWeight:700}}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{paddingTop:'12px'}}>
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
