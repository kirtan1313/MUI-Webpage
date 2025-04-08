import React from 'react';
import { Box, Button, IconButton, InputBase } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../../assets/Imges/logo.png';
import './Footer.css'


// Animation for hover effect
const slideInTop = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Card wrapper for social icons
const Card = styled(Box)({
    width: 'fit-content',
    height: 'fit-content',
    //   backgroundColor: 'rgb(238, 238, 238)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20px',
    gap: '20px',
    //   boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.055)',
});

// Social media icon buttons
const SocialButton = styled(IconButton)(({ color }) => ({
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    backgroundColor: '#EFEFEF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    transition: '0.3s',
    color: 'black',
    '&:hover': {
        backgroundColor: color,
        color: 'white',
        '& svg': {
            animation: `${slideInTop} 0.3s both`,
        },
    },
    '&:active': {
        transform: 'scale(0.9)',
    },
}));

// Newsletter input wrapper
const NewsletterBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    maxWidth: '300px',
});

// Styled input
const EmailInput = styled(InputBase)({
    flex: 1,
    padding: '10px 12px',
});





// Main Footer Component
function Footer() {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
                gap: 4,
                padding:{xs:'10px',md:'40px'},
                // backgroundColor: '#f5f5f5',
            }}
        >
            {/* Logo and Socials */}
            <Box>
                <Box
                    component="img"
                    src={logo}
                    alt="Logo"
                    sx={{ height: 50, mb: 2 }}
                />
                <Card>
                    <SocialButton color="#d62976">
                        <InstagramIcon sx={{ fontSize: 20 }} />
                    </SocialButton>
                    <SocialButton color="#00acee">
                        <TwitterIcon sx={{ fontSize: 20 }} />
                    </SocialButton>
                    <SocialButton color="#0072b1">
                        <LinkedInIcon sx={{ fontSize: 20 }} />
                    </SocialButton>
                    <SocialButton color="#128C7E">
                        <WhatsAppIcon sx={{ fontSize: 20 }} />
                    </SocialButton>
                </Card>
            </Box>

            {/* Footer Columns */}
            <Box>
                <h4>Ultras</h4>
                <p>About</p>
                <p>Conditions</p>
                <p>Our Journals</p>
                <p>Careers</p>
            </Box>

            {/* Column 2 */}
            <Box>
                <h4>Customer Service</h4>
                <p>Help Center</p>
                <p>Contact</p>
                <p>Private Policy</p>
                <p>FAQ</p>
            </Box>

            {/* Column 3 */}
            <Box>
                <h4>Legal</h4>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Delivery Information</p>
                <p>Terms of Use</p>
            </Box>

            {/* Column 4 - Newsletter */}
            <Box>
                <h4>Subscribe Us</h4>
                <p>Subscribe to our newsletter to get updates about our grand offers.</p>
                <NewsletterBox>
                    <EmailInput placeholder="Email Address" />
                    <Button variant="contained" sx={{ borderRadius: 0 }}>Subscribe</Button>
                </NewsletterBox>
            </Box>
        </Box>
    );
}

export default Footer;
