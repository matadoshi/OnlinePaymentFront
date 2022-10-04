import React,{useEffect,useState,useContext} from 'react'
import {Formik,Form,Field} from 'formik'
import {Link, useHistory, useNavigate } from 'react-router-dom'
import '../css/Profile.css'
import { useJwt,isExpired,decodeToken } from "react-jwt";
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {setToken} from '../redux/loginSlice'
import LogoutIcon from '@mui/icons-material/Logout';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ResetPassword from '../components/Account/ResetPassword';
function Settings() {
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [checkUser, setCheckUser] = useState("");
    useEffect(()=>
    {
        setCheckUser(decodeToken(JSON.parse(localStorage.getItem("Client"))))
    },[])
    useEffect(()=>
    {
      var token=null;
      if(JSON.parse(localStorage.getItem("Client"))!=null){
        token=JSON.parse(localStorage.getItem("Client")).result
      }
      setCheckUser(token)
    },[])
    const handleLogOut = ()=>
    {
        localStorage.removeItem("Client")
        navigate('/');
        navigate(0)
    }
    return (
        <>
        {
          (checkUser!==null)?
        <>
        
          <div className='container component'>
            <div>
                <Formik
                enableReinitialize={true}
                onSubmit={(e)=>
                    {
                      axios.post("https://localhost:44319/Account/EditProfile",e)
                      .then(resp=>
                        {

                          if(resp.status===200)
                          {
                              localStorage.setItem("Client",JSON.stringify(resp.data))
                              dispatch(setToken(JSON.parse(localStorage.getItem("Client"))))
                          }
                        })
                    }}
                
                >
                </Formik>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="view-item text-center">
                          {checkUser.image==null?<p>No Data</p>:<img className="rounded-circle profil-photo" src={checkUser.image}/>}
                        </div>
                        <div className="">
                        <Link className='d-block btn' to={{
                          pathname:'/profile/security'
                        }}><RestartAltIcon/>Security</Link>
                        <Link onClick={handleLogOut} className='mt-3 btn d-block'><LogoutIcon />Log out</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 profile-main-title p-3">
                        <h3>Personal Information</h3>
                        <div className="view-item">
                            <div className="view-title">Fullname</div>
                            <div className='view-data'>{checkUser.fullName}</div>
                            <div className="view-title">Birth date</div>
                            <div className="view-data">{checkUser.birthday}</div>
                            <div className="view-title">Gender</div>
                            <div className="view-data">{checkUser.gender}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>:
        <>
        <h1 className='component text-center p-3'>
          Please,previously login or register
        </h1>
        </>
        }
        </>
    )
}

export default Settings