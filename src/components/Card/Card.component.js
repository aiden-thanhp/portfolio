import { 
    Card, 
    CardHeader, 
    IconButton,
    Avatar,
    CardMedia,
    CardContent,
    Typography,
    CardActions,    
    Button,
    Collapse
} from "@mui/material";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />
})(({ expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    
}))

export default function PortfolioCard(
    {
        label,
        title,
        subheader,
        imageLink,
        imgAlt,
        description,
        githubLink,
        siteLink,
        detail
    }
) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Card sx={{ width: "100%" }} >
            <CardHeader 
                avatar={
                    <Avatar
                        sx={{
                            backgroundColor: red[500]
                        }}
                        aria-label="portfolio-card"
                    >
                        {label}
                    </Avatar>
                }
                title={title}
                subheader={subheader}
            />
            <CardMedia 
                component="img"
                height="194"
                image={imageLink}
                alt={imgAlt}
            />
            <CardContent>
                <Typography variant="body2" color="#000">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small"
                    href={githubLink}
                >
                    GITHUB
                </Button>
                <Button 
                    size="small"
                    href={siteLink}
                >
                    VISIT SITE
                </Button>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {detail}
                </CardContent>
            </Collapse>
        </Card>
    )
}