import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

export const metadata = {
  title: "My chat",
  description: "The chat made by Next.js + Material UI",
};

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Settings", href: "/settings", icon: SettingsIcon },
  { text: "Logout", href: "/logout", icon: LogoutIcon },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {/*<AppBar position="fixed" sx={{ zIndex: 2000 }}>*/}
          {/*  <Toolbar sx={{ backgroundColor: "background.paper" }}>*/}
          {/*    <ChatIcon*/}
          {/*      sx={{*/}
          {/*        color: "#444",*/}
          {/*        mr: 2,*/}
          {/*        transform: "translateY(-2px)",*/}
          {/*      }}*/}
          {/*    />*/}
          {/*    <Typography variant="h6" noWrap component="div" color="black">*/}
          {/*      My chat*/}
          {/*    </Typography>*/}
          {/*  </Toolbar>*/}
          {/*</AppBar>*/}
          <Drawer
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: DRAWER_WIDTH,
                boxSizing: "border-box",
                // top: ["48px", "56px", "64px"],
                height: "auto",
                bottom: 0,
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Divider sx={{ mt: "auto" }} />
            <List>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={href} disablePadding>
                  <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              ml: `${DRAWER_WIDTH}px`,
              // mt: ["48px", "56px", "64px"],
              // p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
