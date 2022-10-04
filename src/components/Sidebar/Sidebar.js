import React, { useEffect, useRef, useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SLogo,
    SSearch,
    SSearchIcon,
    SSidebar,
} from "./styles";
import { useJwt,isExpired,decodeToken } from "react-jwt";

import { logoSVG } from "../../assets";

import {
    AiOutlineApartment,
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

import { ThemeContext } from "./../../App";
import { useLocation,useHistory,Link, useNavigate} from "react-router-dom";

const Sidebar = () => {
    const searchRef = useRef(null);
    const { pathname } = useLocation();
    const navigate=useNavigate();
    const handleLogOut = ()=>
    {
        localStorage.removeItem("Client")
        navigate('/');
        navigate(0);
    }
    const [checkUser, setCheckUser] = useState("");
        
    useEffect(()=>
    {
        setCheckUser(decodeToken(JSON.parse(localStorage.getItem("Client"))))
    },[])
    return (
        <SSidebar >
            <SLogo>
                <SLink to='/'><img src={logoSVG} alt="logo" /></SLink>
            </SLogo>
            <SSearch
            >
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input
                    ref={searchRef}
                    placeholder="Search"
                />
            </SSearch>
            <SDivider />
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {(
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {/* if notifications are at 0 or null, do not display */}
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            {secondaryLinksArray.map(({ icon, label }) => (
                <SLinkContainer key={label}>
                    <SLink to="/" onClick={handleLogOut} >
                        <SLinkIcon>{icon}</SLinkIcon>
                        {<SLinkLabel>{label}</SLinkLabel>}
                    </SLink>
                </SLinkContainer>
            ))}
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Dashboard",
        icon: <AiOutlineHome />,
        to: "/",
        notification: 0,
    },
    {
        label: "Cards",
        icon: <MdOutlineAnalytics />,
        to: "/cards",
        notification: 0,
    },
    {
        label: "Customers",
        icon: <BsPeople />,
        to: "/customers",
        notification: 0,
    },
    {
        label: "History",
        icon: <AiOutlineApartment />,
        to: "/history",
        notification: 0,
    },
    {
        label: "Profile",
        icon: <AiOutlineSetting />,
        to: "/profile",
        notification: 0
    }
];

const secondaryLinksArray = [
   
    {
        label: "Logout",
        icon: <MdLogout />,
    }
];

export default Sidebar;