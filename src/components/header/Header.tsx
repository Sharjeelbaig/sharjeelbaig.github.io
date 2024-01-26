import { AppBar, Toolbar, Typography, Button, Link, Box, useMediaQuery } from '@mui/material';

function Header() {
  const styles = {
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1,
      backdropFilter: 'blur(8px)', // Add blurry effect
      //backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add transparency for better effect
      background:"linear-gradient(45deg, #4a403f, #4a403f00)",
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: 'black',
      textDecoration: 'none',
    },
  };

  // Use MUI's useMediaQuery hook to determine screen size
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={styles.root}>
        <AppBar position="static" elevation={0}>
          <Toolbar sx={isSmallScreen ? {textAlign: 'center', margin: 'auto'} : {}}>
          {isSmallScreen ? null : (
            <Typography variant="h6" sx={styles.title}>
              Sharjeel Baig's Portfolio
            </Typography>
          )}
            <Link href="#" sx={styles.link}>
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="#about" sx={styles.link}>
              <Button color="inherit">About</Button>
            </Link>
            <Link href="#contact" sx={styles.link}>
              <Button color="inherit">Contact</Button>
            </Link>
          </Toolbar>
        </AppBar>
      
    </Box>
  );
}

export default Header;
