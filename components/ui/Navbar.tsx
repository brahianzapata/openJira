import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FC, useContext } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from '../../context/ui/UIContext';
import NextLink from 'next/link';


export const Navbar: FC = () => {

    const { openSideMenu } = useContext(UIContext);

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    onClick={ openSideMenu }
                >
                    <MenuOutlinedIcon />
                </IconButton>

                <NextLink href="/" passHref>
                    <Typography variant='h6' color="white">Open Jira</Typography>
                </NextLink>

            </Toolbar>
        </AppBar>
    )
}
