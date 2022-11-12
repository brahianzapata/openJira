import { Box, Drawer, List, ListItemIcon, ListItemText, Typography } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import { ListItemButton } from "@mui/material";
import { Divider } from "@mui/material";
import { UIContext } from "../../context/ui";
import { useContext } from "react";

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu } = useContext( UIContext );

    return (
      <Drawer
          anchor='left'
          open={ sidemenuOpen }
          onClose= { closeSideMenu }
      >
          <Box sx={{ padding: '5px 10px' }}>

          </Box>
          <Box sx={{ padding: '5px 10px' }}>
              <Typography variant="h4">Menú</Typography>

          </Box>
          <List>
              {
                menuItems.map( (text, index) => (
                  <ListItemButton key={ text }>
                    <ListItemIcon>
                        { index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                ))
              }
          </List>

          <Divider />

          <List>
              {
                menuItems.map( (text, index) => (
                  <ListItemButton key={ text }>
                    <ListItemIcon>
                        { index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                ))
              }
          </List>

      </Drawer>
    )
}
