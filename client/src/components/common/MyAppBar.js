import Head from "next/head";
import { useState } from "react";

//MUi Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeProvider } from "@emotion/react";
import { darktheme, theme } from "@/styles/mui/theme";



export default function MyAppBar() {
  const[ visible,setVisible]=useState(false);
  const [currentTheme,setCurrentTheme]=useState("dark")
 
  return (
    <>
 <ThemeProvider theme={currentTheme === "dark" ? darktheme:theme}>
      <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
           <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>setCurrentTheme(currentTheme === "dark" ? "light":"dark")}
          >
            <DarkModeIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link href = "/blog">
          <Button  color="inherit">Blog</Button>

         </Link>
          <Button color="inherit">Login</Button>
         
            
        </Toolbar>
      </AppBar>
    </Box>
 
   
   
     
        </div>
      </ThemeProvider>
    </>
  );
}
