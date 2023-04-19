import React, {FC} from 'react';
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import {ImagesPropsType} from "./TweetTextFieldForm";
import {styled} from "@mui/material";

const Images = (styled)(Typography)({
    display: "flex",
    flexBasis: "100%",
    flexShrink: 0,
    gap: 5,
    flexWrap: "wrap",
    marginBottom: 6,
    "& div": {
        display: "flex",
        width: "100%",
        height: 285,
        borderRadius: 20,
        position: "relative",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "cover",
    },
    "& button": {
        position: "absolute",
        top: 5,
        left: 5,
        color: "white",
        backgroundColor: "rgba(15, 20, 25, 0.75)",
        backdropFilter: "blur(4px)",
        transition: "all ease .3s",
        "&:hover": {
            backgroundColor: "rgba(39, 44, 48, 0.75)",
        },
        "&:active": {
            backgroundColor: "rgba(63, 67, 71, 0.75)",
        }
    },
})

export const ImagesList: FC<ImagesPropsType> = ({ images, setImages }) => {
    const removeImage = (url: string) => {
        setImages(prev => prev.filter(obj => obj.url !== url))
    }

    return (
        <>
            { images[0] && <>
                <Images>
                    {images.map((obj) => (
                        <>
                            <Typography key={obj.url}
                                        component={"div"}
                                        style={{ backgroundImage: `url(${obj.url})`}}>
                                <IconButton onClick={(): void => removeImage(obj.url)}>
                                    <CloseIcon />
                                </IconButton>
                            </Typography>
                        </>
                    ))}
                </Images>
                <Divider sx={{ width: "100%" }} />
            </> }
        </>
    )
}