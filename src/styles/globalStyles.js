import {createGlobalStyle} from "styled-components"
export const GlobalStyle=createGlobalStyle`
*,*::,*::after{
    margin:0;
    box-sizing:border-box;
}
body{
    background:$(({theme})=>theme.bg2);
    color:${({theme})=>theme.text}
    letter-spacing:.6px
}
.component{
    background-color: white;
    bottom: -20px;
    left:100px;
    transform: translateX(50% 50%);
    border-radius: 8px;
}
`;