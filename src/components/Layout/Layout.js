import React from 'react'
import Header from '../Header/Header';
import Sidebar from "../Sidebar/Sidebar";
import { SContain, SLayout, SMain } from "./styles";
const Layout = ({children}) => {
  return (
    <SLayout>
        <Sidebar/>
        <SContain>
        <Header />
        <SMain>{children}</SMain>
        </SContain>
    </SLayout>
  )
}

export default Layout