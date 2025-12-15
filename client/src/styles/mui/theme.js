import { createTheme } from "@mui/material"



const backgroundcolour = "#c6d4c2ff"
const primaryColour = "#b95b5bff"
const textcolour = "#898D49"
const secondarycolour = "#8D495B"
const highlightcolour = "#498D6D"
 
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
const primaryColourdark = "#914b4bff"
const textcolourdark = "#777a48ff"
const secondarycolourdark = "#6c434dff"
const highlightcolourdark = "#406855ff"
 



let darktheme =  createTheme({
    palette: {
        mode: "dark",
        background: {default: backgroundcolourdark},
        primary: {main: primaryColourdark},
        secondary: {main: secondarycolourdark},  
        tertiary: {main: highlightcolourdark},  
        icon : {main: textcolourdark},  
    }
});
 
export { lightTheme,darktheme };