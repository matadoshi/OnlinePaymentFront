import React, { useState } from "react";
import "../css/Login.css";
import { Formik, Form, Field } from "formik";
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {useHistory,Link, useNavigate} from 'react-router-dom'
import {setToken} from '../redux/loginSlice'
import {logoSVG} from  "../assets"
function Login() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="login m-auto component">
      <div className=" align-items-center p-3">
          <Link to='/' className='login-back col-lg-3'>Go Back</Link>
          <div className='col-lg-12 text-center'>
          <img src={logoSVG} alt="logo" className="m-auto" />
        </div>
      </div>
      <p className="text-center">Login to your account</p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(e)=>
          {
            axios.post("https://localhost:44319/Account/Login",e)
            .then(resp=>
              {
                if(resp.status===200)
                {
                    localStorage.setItem("Client",JSON.stringify(resp.data))
                    dispatch(setToken(JSON.parse(localStorage.getItem("Client"))))
                    navigate("/")   
                    navigate(0)           
                }
              })
            
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-log container">
              <div className="form-div">
                <label className="ms-4" htmlFor="log-usr">
                  E-mail
                </label>
                <Field
                  name="email"
                  id="log-usr"
                  className={`form-input input w-100 mb-2${username}`}
                  placeholder="Enter your e-mail"
                />
                {errors.email&&touched.email?setUsername("err-log"):setUsername("")}
              </div>
              <div className="form-div psw-log">
                <label className="ms-4" htmlFor="log-psw">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  id="log-psw"
                  className={`form-input input w-100 ${password}`}
                  placeholder="Enter your password"
                />
                {errors.password&&touched.password?setPassword("err-log"):setPassword("")}
              </div>
              <input className="submit w-100 mt-3 mb-3 p-2" type="submit" value="LOGIN" />
              <div className='text-center'>
              <span className="d-block text-center">Don’t have an account?</span>
              <Link to='/register' className='m-auto'>Create New Account</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
  );
}

export default Login;