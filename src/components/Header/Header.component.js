import React from "react";
import Logo from "../../assets/Logo.png";
import headerLaptop from "../../assets/header-laptop.png";
import headerCoffee from "../../assets/header-coffee.png";
import headerPencil from "../../assets/header-pencil.png";
import headerClock from "../../assets/header-clock.png";
import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import StyledButton from "../StyledButton/StyledButton.component";
import theme from "../Theme/theme.component"

const useMove = () => {
    const [state, setState] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = e => {
        e.persist();
        setState(state => ({
            ...state,
            x: e.clientX,
            y: e.clientY
        }))
    }
    return {
        x: state.x,
        y: state.y,
        handleMouseMove
    }
}

export default function Header({ backgroundImg, headline, buttonName }) {
    const headerStyle = {
        height: "100vh",
        backgroundImage: `url("${backgroundImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    const gradientLayer = {
        height: "100vh",
        width: "100vw",
        backgroundColor: "rpg(2,0,36)",
        background: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(15,7,237,1) 72%, rgba(0,141,255,1) 100%)"
    }

    const { x, y, handleMouseMove } = useMove();

    return (
        <div onMouseMove={handleMouseMove} >
            <Box 
                style={headerStyle}
                sx={{
                    opacity: 0.9,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative"
                }}
            >
                <Box
                    style={gradientLayer}
                    sx={{
                        position: "absolute",
                        opacity: 0.5,
                        zIndex: -1
                    }}
                />
                <Box 
                    component="img"
                    sx={{
                        width: "35vw",
                        maxWidth: 250
                    }}
                    alt="Logo of Aiden Phan Portfolio."
                    src={Logo}
                />
                <Box 
                    component="img"
                    sx={{
                        width: "80vw",
                        maxWidth: 800,
                        position: "absolute",
                        zIndex: -3,
                        display: { xs: 'none', sm: 'inline-block' },
                        opacity: 0.8,
                        right: `${-10+x/10}px`,
                        bottom: `${-20+y/10}px`
                    }}
                    alt="laptop"
                    src={headerLaptop}
                />
                <Box 
                    component="img"
                    sx={{
                        width: "30vw",
                        maxWidth: 600,
                        position: "absolute",
                        zIndex: -2,
                        display: { xs: 'none', md: 'inline-block' },
                        opacity: 0.8,
                        left: `${20-x/20}px`,
                        bottom: `${100-y/12}px`
                    }}
                    alt="coffee mug"
                    src={headerCoffee}
                />
                <Box 
                    component="img"
                    sx={{
                        width: "50vw",
                        maxWidth: 1000,
                        position: "absolute",
                        zIndex: -3,
                        display: { xs: 'none', md: 'inline-block' },
                        opacity: 0.8,
                        left: `${300-x/20}px`,
                        top: `${-y/20}px`
                    }}
                    alt="pencil"
                    src={headerPencil}
                />
                <Box 
                    component="img"
                    sx={{
                        width: "40vw",
                        maxWidth: 600,
                        position: "absolute",
                        zIndex: -4,
                        display: { xs: 'none', lg: 'inline-block' },
                        opacity: 0.8,
                        left: `${150+x/35}px`,
                        top: `${-100-y/15}px`
                    }}
                    alt="clock"
                    src={headerClock}
                />
                <TypeAnimation
                    sequence={[
                        `${headline}.`  
                    ]}
                    wrapper="div"
                    cursor={true}
                    style={{ 
                        fontSize: "min(4vw, 27px)",
                        color: "white",
                        fontFamily: "serif",
                        fontWeight: "600",
                    }}
                />
                <StyledButton 
                    variant="contained"
                    sx={{
                        mt: 1.5,
                        fontSize: 16,
                        fontFamily: theme.fontFamily.join(','),
                        letterSpacing: 4,
                        py: 1.2,
                        px: 3
                    }}
                >
                    {buttonName}
                </StyledButton>
            </Box>
        </div>
    )
}
