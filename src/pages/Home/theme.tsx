import {styled} from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import {grey} from "@mui/material/colors";
import Typography from "@mui/material/Typography";

export const MainContainer = styled(Container)({
    maxWidth: 1400,
})

export const TweetsWrapper = styled(Paper)({
    borderRadius: 0,
    borderTop: "none",
    borderBottom: "none",
    height: "100%",
    width: "100%",
})

export const TweetHeader = styled(Paper)({
    background: "rgb(255,255,255, .65)",
    backdropFilter: "blur(12px)",
    padding: "10px 15px",
    height: 53,
    position: "relative",

    "& button": {
        position: "absolute",
        top: 7,
        left: 7,
    },

    "& h6": {
        fontWeight: "bold",
    },

    "& svg path": {
        fill: grey[900],
    },
})

export const TwitterSearch = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        borderRadius: 30,
        backgroundColor: "#E6ECF0",
        padding: "0 0 0 15px",

        "&:hover": {
            "& fieldset": {
                borderColor: "transparent",
            },
        },
        "& fieldset": {
            borderColor: "transparent",
            borderWidth: 1,
        },
    },
    "& .Mui-focused": {
        backgroundColor: "#fff",
        "&:hover": {
            "& fieldset": {
                borderColor: "rgb(29, 161, 242)",
            },
        },
        "& fieldset": {
            borderWidth: 1,
            borderColor: "blue",
        },
        "& svg path": {
            fill: "rgb(29, 161, 242)",
        },
    },
    "& .MuiOutlinedInput-input": {
        padding: "12px 14px 14px 5px",
    },
})

export const TweeterActualTheme = styled(Typography)(() => ({
    backgroundColor: "#E6ECF0",
    borderRadius: 30,
    marginTop: 20,

    "& div": {
        padding: "12px 20px",
        fontSize: 18,
        fontWeight: "bold",
    },
    "& ul": {
        paddingTop: 0,
        paddingBottom: 30,
    },
    "& li": {
        cursor: "pointer",
        padding: "4px 20px 24px",
        ":hover": {
            background: "#d5dade",
            transition: "all .3s ease",

        },
        "& div": {
            padding: 0,
            "& :first-of-type": {
                color: "black",
                position: "relative",
                fontSize: 16,
                fontWeight: "bold",
            },
            "& span": {
                color: "grey",
                fontSize: 12,
                position: "absolute",
            },
        },
    },
    "& a": {
        textDecoration: "none",
    }
})) as typeof Typography

export const classesTweet = {
    borderRadius: 0,
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
}

export const classesSticky = {
    zIndex: 1,
    position: "sticky",
    top: 0,
}

export const classTweetHeader = {...classesTweet, ...classesSticky}
export const classTweetTextField = {...classesTweet, ...{ borderBottom: `10px solid ${grey["200"]}` }}

export const classesAvatar = {
    width: 50,
    height: 50,
}

export type ClassesTweetType = typeof classesTweet
export type ClassesAvatarType = typeof classesAvatar