import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import eventBus from '../services/eventBus';

export default function Menu(props) {
    const menuButtons = [["Expenses", <AttachMoneyIcon/>], ["Income", <AccountBalanceWalletIcon/>],
        ["Accounts", <AccountBalanceIcon/>], ["Account History", <HistoryIcon/>],
        ["Budget", <MenuBookIcon/>]];

    const selectMenuItem = (newTitle) => (event) => {
        // update title on the top bar
        props.changeTitle(newTitle);
        eventBus.dispatch("updateMain", {message: newTitle});
    }

    const list = () => (
        <Box
            sx={{
                width: 250,
                flexShrink: 0
            }}
            role="presentation"
            onClick={ props.toggleDrawer(false) }
        >
            <List>
                {menuButtons.map((arr) => (
                    // add additional onClick event to update main when menu item is selected
                    <ListItem button key={ arr[0] } onClick={ selectMenuItem(arr[0]) }>
                        <ListItemIcon style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                            { arr[1] }
                            <ListItemText primary={arr[0]} />
                        </ListItemIcon>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <Drawer
            anchor={ props.topBarProps.menuAnchor }
            open={ props.topBarProps.anchor }
            onClose={ props.toggleDrawer(false)}
        >
            { list(props.menuAnchor) }
        </Drawer>
    );
}
