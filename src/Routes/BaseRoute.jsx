import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Cards from "../Pages/Cards";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Register from '../Pages/Register'
import Customer from "../Pages/Customer";
import History from "../Pages/History";
import ResetPassword from "../components/Account/ResetPassword";
import ProfileEdit from "../components/Account/ProfileEdit";
import Pay from "../components/pay/Pay";
import Paynext from "../components/pay/Paynext";
import Chats from "../Pages/Chats";
const BaseRoute = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} /> 
            <Route path="/cards" element={<Cards/>}/>
            <Route exact path="/history" element={<History/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
            <Route path='/pay/' element={<Pay/>}/>
            <Route path='/chat' element={<Chats/>}/>
            <Route path='/pay/next/' element={<Paynext/>}/>
            <Route path="/profile/edit" element={<ProfileEdit/>} />
            <Route path="/profile/security" element={<ResetPassword/>} />
            <Route exact path="/customers" element={<Customer/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
        </Routes>
    );
};

export default BaseRoute;