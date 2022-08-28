import { 
    AppBar,
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Slide, 
    SwipeableDrawer, 
    Toolbar, 
    Typography, 
} from "@mui/material";
import React from "react";
import Logo from "../../assets/Logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import theme from "../Theme/theme.component"

export default function Menu(props) {
    const pages = ["Home", "Resume", "Portfolio", "About"]

    const [scrollPosition, setScrollPosition] = React.useState(0);
    const [state, setState] = React.useState(false);

    const navigate = useNavigate();

    React.useLayoutEffect(() => {
        function updatePosition() {
            setScrollPosition(window.pageYOffset); 
        };
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition)
    }, []);

    const toggleDrawer = (open) => (event) => {
        if (
            event && 
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState(open)
    };

    return (
        <Slide
            direction="down" 
            in={scrollPosition > 600}
        >
            <AppBar
                sx={{
                    backgroundColor: "#201918",
                    boxShadow: 0,
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <Box 
                        component="img"
                        sx={{
                            width: "50px"
                        }}
                        alt="Logo of Aiden Phan Portfolio."
                        src={Logo}
                    />
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="menu"
                        sx={{ 
                            display:  { xs: 'block', sm: 'none' }
                        }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <React.Fragment key='left'>
                        <SwipeableDrawer
                            anchor='right'
                            open={state}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                        >
                            <Box
                                sx={{ width: 250 }}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    <Typography
                                        variant="h7"
                                        noWrap
                                        component="p"
                                        href=""
                                        sx={{
                                            pt: 1,
                                            pl: 2,
                                            pb: 1,
                                            fontFamily: "sans-serif",
                                            fontWeight: 700,
                                            color: "inherit",
                                            textDecoration: "none"
                                        }}
                                    >
                                        MENU
                                    </Typography>
                                    <Divider />
                                    {pages.map((text) => (
                                        <ListItem key={text} disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    { 
                                                        text === 'Home'
                                                        ? <HomeIcon />
                                                        : text === 'Resume'
                                                        ? <ContactPageIcon />
                                                        : text === 'Portfolio'
                                                        ? <AutoStoriesIcon />
                                                        : <InfoIcon />
                                                    }
                                                </ListItemIcon>
                                                <ListItemText 
                                                    primary={text} 
                                                    onClick={() => {
                                                        text === 'Home'
                                                        ? navigate("/")
                                                        : text === 'Resume'
                                                        ? navigate("/resume")
                                                        : text === 'Portfolio'
                                                        ? navigate("/portfolio")
                                                        : navigate("/about")
                                                    }}
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </SwipeableDrawer>
                    </React.Fragment>
                    <Box
                        sx={{ 
                            display:  { xs: 'none', sm: 'flex' },
                        }}
                    >            
                        {pages.map((text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemText 
                                        primary={text}
                                        sx={{
                                            fontFamily: theme.fontFamily.join(','),
                                        }} 
                                        onClick={() => {
                                            text === 'Home'
                                            ? navigate("/")
                                            : text === 'Resume'
                                            ? navigate("/resume")
                                            : text === 'Portfolio'
                                            ? navigate("/portfolio")
                                            : navigate("/about")
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Slide>
        
    )
}