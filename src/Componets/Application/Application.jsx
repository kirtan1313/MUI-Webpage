import { Box } from '@mui/material';
import React from 'react';
import Appimg from '../../assets/Imges/phone.png';
import Appstore from '../../assets/Imges/app-store.jpg';
import Googlestore from '../../assets/Imges/google-play.jpg';

function Application() {
    return (
        <>
            <Box
                sx={{
                    bgcolor: '#FFF9EB',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
                    borderRadius: '10px',
                    alignItems: 'center',
                    gap: { xs: 2, md: 0 },
                    p: { xs: 2, md: 4 },
                }}
            >
                {/* Left Section: Image */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component="img"
                        src={Appimg}
                        sx={{
                            maxWidth: { xs: '80%', md: '100%' },
                            marginTop: { xs: '-40px', md: '-80px' },
                            marginBottom: { xs: '-40px', md: '-80px' },
                        }}
                    />
                </Box>

                {/* Right Section: Text and Store Links */}
                <Box
                    sx={{
                        p: { xs: 2, md: 4 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'start' },
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <Box
                        component="div"
                        sx={{
                            fontSize: { xs: '20px', md: '28px' },
                            fontWeight: 700,
                            pb: 3,
                        }}
                    >
                        Shop faster with foodmart App
                    </Box>
                    <Box
                        component="p"
                        sx={{
                            fontSize: { xs: '14px', md: '17px' },
                            lineHeight: { xs: '24px', md: '30px' },
                            color: 'gray',
                            pb: 3,
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus
                        libero lectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna.
                        Adipiscing fames semper erat ac in suspendisse iaculis. Amet blandit tortor
                        praesent ante vitae. A, enim pretium senectus magna. Sagittis sed ptibus libero
                        lectus non et psryroin.
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'start' } }}>
                        <Box component="img" src={Appstore} sx={{ maxWidth: '120px' }} />
                        <Box component="img" src={Googlestore} sx={{ maxWidth: '120px' }} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Application;
