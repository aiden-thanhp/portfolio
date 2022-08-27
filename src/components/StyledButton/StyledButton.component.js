import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors"

const StyledButton = styled(Button)(({ theme }) => ( {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[800],
    "&:hover": {
        backgroundColor: blue[900],
    },
    borderRadius: 0,
}));

export default StyledButton;