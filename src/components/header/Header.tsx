import { Email, GitHub, LinkedIn, X } from '@mui/icons-material';
import { AppBar, Toolbar, Button, Link, Box, useMediaQuery, IconButton } from '@mui/material';
import information from '../../utils/information.json'

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
      background: "linear-gradient(45deg, #4a403f, #4a403f00)",
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
        <Toolbar sx={isSmallScreen ? { textAlign: 'center', margin: 'auto', } : { display: 'flex', justifyContent: 'space-between' }}>
          {isSmallScreen ? null : (
            <Box sx={{ "& > *": { m: 0.5 } }}>
              <IconButton onClick={() => window.open('https://' + information.contact.linkedin, "_blank")}>
                <LinkedIn
                />
              </IconButton>
              <IconButton onClick={() => window.open('https://' + information.contact['twitter/X'], "_blank")} >
                <X
                />
              </IconButton>
              <IconButton onClick={() => window.open('https://' + information.contact.github, "_blank")} >
                <GitHub
                />
              </IconButton>
              <IconButton onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(information.contact.gmail), "_blank")} >
                <Email
                />
              </IconButton>
            </Box>
          )}
          <Box>
            <Link href="#about" sx={styles.link}>
              <Button color="inherit">About</Button>
            </Link>
            <Link href="#skills" sx={styles.link}>
              <Button color="inherit">Skills</Button>
            </Link>

            <Link href="#projects" sx={styles.link}>
              <Button color="inherit">Projects</Button>
            </Link>
            <Link href="#contact" sx={styles.link}>
              <Button color="inherit">Contact</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

    </Box>
  );
}

export default Header;
