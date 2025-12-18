import { createTheme } from "@mui/material"



const backgroundcolour = "#c2cebfff"
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
const primaryColourdark = "#ffffffff"
const textcolourdark = "#07331cff"
const secondarycolourdark = "#3d112aff"
const highlightcolourdark = "#383c01ff"
 



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