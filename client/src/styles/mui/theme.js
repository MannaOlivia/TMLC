import { createTheme } from "@mui/material"



const backgroundcolour = "#b8f0dbff"
const primaryColour = "#33a495ff"
const textcolour = "#000000ff"
const secondarycolour = "#d55073ff"
const highlightcolour = "#71d9a9ff"
 
let lightTheme =  createTheme({
    palette: {
        mode: "light",
        background: {default: backgroundcolour},
        primary: {main: primaryColour},
        secondary: {main: secondarycolour},  
        tertiary: {main: highlightcolour},  
        icon : {main: textcolour},  
    }
});
 
const backgroundcolourdark = "#080808ff"
const primaryColourdark = "#ffffffff"
const textcolourdark = "#ffffffff"
const secondarycolourdark = "#de0982ff"
const highlightcolourdark = "#aab331ff"
 



let darkTheme =  createTheme({
    palette: {
        mode: "dark",
        background: {default: backgroundcolourdark},
        primary: {main: primaryColourdark},
        secondary: {main: secondarycolourdark},  
        tertiary: {main: highlightcolourdark},  
        icon : {main: textcolourdark},  
    }
});
 
export { lightTheme,darkTheme };