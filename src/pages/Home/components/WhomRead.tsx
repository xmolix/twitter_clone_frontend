import React from 'react';
import {TweeterActualTheme} from "../theme";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import AddPersonIcon from "@mui/icons-material/PersonAddAlt";
import {styled} from "@mui/styles";
import {useSelector} from "react-redux";
import {selectWhomReadItems} from "../../../store/ducks/whomRead/selectors";

const WhomReadBlock = styled(ListItem)({
    display: "flex",
    height: 90,
    "& div": {
        marginTop: 0,
    }
})

const WhomReadName = styled(ListItemText)({
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
})

export const WhomRead = () => {
    const whomRead = useSelector(selectWhomReadItems)

    return (
        <TweeterActualTheme component={"div"}>
            <Typography component={"div"}>
                Кого читать
            </Typography>
            <Divider component={"hr"} />
            <List>
                <WhomReadBlock>
                    <ListItemAvatar>
                        <Avatar alt={"Someone"}
                                src={"https://avatars.steamstatic.com/195bb3c555c5e18ba6e83f84316db941e6912825_full.jpg"}
                        />
                    </ListItemAvatar>
                    <Typography component={"div"}>
                        <WhomReadName primary={"The art of communication"}
                                      secondary={
                                          <Typography component={"span"} variant={"body2"}>
                                              @TheArtOfCommunication
                                          </Typography>
                                      }
                        />
                    </Typography>
                    <IconButton>
                        <AddPersonIcon />
                    </IconButton>
                </WhomReadBlock>
                <WhomReadBlock>
                    <ListItemAvatar>
                        <Avatar alt={"Someone"}
                                src={"https://avatars.steamstatic.com/195bb3c555c5e18ba6e83f84316db941e6912825_full.jpg"}
                        />
                    </ListItemAvatar>
                    <WhomReadName primary={"The art of communication"}
                                  secondary={
                                      <Typography component={"span"} variant={"body2"}>
                                          @TheArtOfCommunication
                                      </Typography>
                                  }
                    />
                    <IconButton>
                        <AddPersonIcon />
                    </IconButton>
                </WhomReadBlock>
                <Divider component={"hr"} />
            </List>
        </TweeterActualTheme>
    )
}