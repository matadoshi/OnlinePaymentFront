import React, { useState,useEffect } from "react";
import "./styles.css"
import { Link } from "react-router-dom";
function Header(props) {
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
    <div className='header'>
      <ul className='d-flex p-0 m-0'>
        {
        (checkUser !== null && checkUser.token!==null )?
        <>
        <div className="d-flex profileBar">
        <p>{props.name}</p>
        <Link to='/profile' className="link"><div className="profile-info">
        <p className="profil-name m-0">{checkUser.fullName}</p>
        </div>
        </Link>
        </div>
        </>:
        <>
        <ul className="d-flex btns">
        <li className='me-3'>
        <Link to='/login' className="btn btn-light">Login</Link>
        </li>
        <li>
        <Link to='/register' className="btn-primary btn">Register</Link>

        </li>
        </ul>
        </>
        }
      </ul>

    </div>
  )
}

export default Header