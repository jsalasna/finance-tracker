import * as React from 'react';
import TextField from '@mui/material/TextField';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import {IconButton} from "@mui/material";
import Menu from './Menu';


export default function TopBar(props) {
    const [title, setTitle] = React.useState("Overview");
    const [anchor, setAnchor] = React.useState(false);


    let topBarProps = {
        menuAnchor: "left",
        anchor: anchor
    }

    const toggleDrawer = (open) => (event) => {
        setAnchor(open);
    };

    const changeTitle = (name) => {
        setTitle(name);
    }

    return (
        <div className="top-bar">
            <div className="header">
                <IconButton onClick={toggleDrawer(true)}>
                    <ListRoundedIcon fontSize="large"/>
                </IconButton>
                <h1>{ title }</h1>
            </div>
            <Menu topBarProps={ topBarProps } toggleDrawer={ toggleDrawer } changeTitle={ changeTitle }/>
            <div className="top-bar-data">
                <TextField id="outlined-basic" label="remaining money" variant="outlined"></TextField>
                <TextField id="outlined-basic" label="credit card 1" variant="outlined"></TextField>
                <TextField id="outlined-basic" label="credit card 2" variant="outlined"></TextField>
            </div>
        </div>
    )
}