import { Box } from '@mui/material'
import React from 'react'
import Appimg from '../../assets/Imges/phone.png'
import Appstore from '../../assets/Imges/app-store.jpg'
import Googlestore from '../../assets/Imges/google-play.jpg'


function Application() {
    return (
        <>
            <Box sx={{
                bgcolor: '#FFF9EB',
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                borderRadius: '10px',
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box component='img' src={Appimg} sx={{ marginTop: '-80px', marginBottom: '-80px' }}></Box>
                </Box>
                <Box sx={{ padding: '20px', display: 'flex',alignItems:'center' }}>
                    <Box>
                        <Box component='div' sx={{
                            fontSize: '28px',
                            fontWeight: 700,
                           paddingBottom:'30px'

                        }}>Shop faster with foodmart App</Box>
                        <Box component='p'
                            sx={{
                                fontSize: '17px',
                                paddingBottom:'30px',
                                lineHeight:'30px',
                                color:'gray'
                            }}
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus
                            nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing
                            fames semper erat ac in suspendisse iaculis. Amet blandit tortor praesent
                            ante vitae. A, enim pretiummi senectus magna. Sagittis sed ptibus liberolectus
                            non et psryroin.
                        </Box>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            <Box component='img' src={Appstore}></Box>
                            <Box component='img' src={Googlestore}></Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Application
