import React, { useState } from 'react';
import {
  Box,
  MenuItem,
  Select,
  Typography,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavbarHeader.css';

function NavbarHeader() {
  const [nav, setNav] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Responsive check for xs-md

  const handleChangeNav = (event) => setNav(event.target.value);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const navItems = [
    { label: 'Home', path: '/' }, // Add a route path for Home
    { label: 'Women', path: '/women' },
    { label: 'Men', path: '/men' },
    { label: 'Kids', path: '/kids' },
    { label: 'Accessories', path: '/accessories' },
    { label: 'Pages', path: '/pages' },
    { label: 'Brand', path: '/brand' },
    { label: 'Sales', path: '/sales' },
    { label: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <Box>
        <Box
          sx={{
            padding: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Department Select */}
          <Box>
            <Select
              value={nav}
              onChange={handleChangeNav}
              sx={{
                width: 200,
                '& fieldset': {
                  border: 'none',
                },
              }}
            >
              <MenuItem value={1} className="menu-pad">
                Shop by Departments
              </MenuItem>
              <MenuItem value={2}>Groceries</MenuItem>
              <MenuItem value={3}>Drinks</MenuItem>
              <MenuItem value={4}>Chocolates</MenuItem>
            </Select>
          </Box>

          {/* Navigation Items */}
          {isMobile ? (
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              sx={{
                display: 'flex',
                paddingLeft: '20px',
                gap: '25px',
                cursor: 'pointer',
              }}
            >
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  component={Link} // Use Link for navigation
                  to={item.path} // Specify the route
                  sx={{
                    textDecoration: 'none', // Remove underline
                    color: 'gray',
                    transition: '0.3s',
                    '&:hover': {
                      color: 'black',
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      </Box>

      {/* Drawer for Mobile View */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            <Select
              value={nav}
              onChange={handleChangeNav}
              sx={{
                width: '100%',
                '& fieldset': {
                  border: 'none',
                },
              }}
            >
              <MenuItem value={1}>Shop by Departments</MenuItem>
              <MenuItem value={2}>Groceries</MenuItem>
              <MenuItem value={3}>Drinks</MenuItem>
              <MenuItem value={4}>Chocolates</MenuItem>
            </Select>
          </Box>
          {navItems.map((item, index) => (
            <Typography
              key={index}
              component={Link} // Use Link for navigation
              to={item.path} // Specify the route
              sx={{
                textDecoration: 'none', // Remove underline
                color: 'gray',
                transition: '0.3s',
                '&:hover': {
                  color: 'black',
                },
                cursor: 'pointer',
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>
      </Drawer>
    </>
  );
}

export default NavbarHeader;
