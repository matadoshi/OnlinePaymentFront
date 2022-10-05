import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import Routes from "./Routes/BaseRoute";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import './App.css'

export const ThemeContext = React.createContext(null);

const App = () => {
    console.log("salam")
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;
    const [checkUser, setCheckUser] = useState("");
    useEffect(()=>
    {
      var token=null;
      if(JSON.parse(localStorage.getItem("Client"))!=null){
        token=JSON.parse(localStorage.getItem("Client")).result
      }
      setCheckUser(token)
    },[])
    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>hesab.az</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <>
                <Layout>
                    <Routes/>
                </Layout>
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default App;