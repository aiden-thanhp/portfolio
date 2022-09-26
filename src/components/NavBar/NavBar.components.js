import { 
    Avatar, 
    Box, 
    Divider, 
    Drawer, 
    IconButton, 
    Link, 
    Typography
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProfilePicture from "../../assets/profile-picture.JPG"
import MenuIcon from '@mui/icons-material/Menu';

const navigationBar = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Contact", link: "/" }
];

export default function NavBar() {
    const navigate = useNavigate();
    
    const [open, setOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open)
    }

    const drawer = (
        <Box 
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle} 
            sx={{ width: 'auto', position: "relative" }}
            role="presentation"
        >
            {navigationBar.map((navLink) => {
                const link = navLink.link;
                const name = navLink.name;
                return (
                    <Box>
                        <Divider />
                        <Link
                            component="button"
                            variant="h6"
                            underline="hover"
                            sx={{
                                marginLeft: "10px",
                                fontFamily: "'Source Sans Pro', sans-serif",
                                fontWeight: 900,
                                textTransform: "uppercase",
                                fontSize: "15px",
                                letterSpacing: 1.5,
                                marginRight: "5px",
                                color: "#000",
                                height: "70px"
                            }}
                            onClick={() => navigate(link)}
                        >{name}</Link>
                    </Box>
                )
            })}
        </Box>
    )   

    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                boxShadow: 3,
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100vw"
            }}
            position="fixed"
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar alt="Aiden Phan" src={ProfilePicture} />
                <Typography
                    component="h6"
                    variant="h6"
                    sx={{
                        marginLeft: "10px",
                        fontFamily: "'Source Sans Pro', sans-serif",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        fontSize: "17px",
                        letterSpacing: 1.5
                    }}
                >Aiden Phan</Typography>
            </Box>
            <Box
                sx={{ display: { xs: "none", sm: "flex" } }}
            >
                {navigationBar.map((navLink) => {
                    const link = navLink.link;
                    const name = navLink.name;
                    return (
                        <Link
                            component="button"
                            variant="h6"
                            underline="hover"
                            sx={{
                                marginLeft: "10px",
                                fontFamily: "'Source Sans Pro', sans-serif",
                                fontWeight: 900,
                                textTransform: "uppercase",
                                fontSize: "15px",
                                letterSpacing: 1.5,
                                marginRight: "5px",
                                color: "#000"
                            }}
                            onClick={() => navigate(link)}
                        >{name}</Link>
                    )
                })}
            </Box>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="top"
                open={open}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' }
                }}
            >{drawer}</Drawer>
        </Box>
    )
}