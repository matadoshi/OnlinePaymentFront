import React, { useState ,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field } from "formik";
import {useHistory,Link, useNavigate} from 'react-router-dom'
import "../css/Register.css";
import axios from 'axios';
import {logoSVG} from  "../assets"

function Register() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    return (
      <div className="login m-auto col-lg-5">
        <div className=" align-items-center p-3">
            <Link to='/' className='login-back col-lg-3'>Go Back</Link>
            <div className='col-lg-12 text-center'>
            <img src={logoSVG} alt="logo" className="m-auto" />
          </div>
        </div>
        <p className="text-center">Get started</p>
        <Formik
          initialValues={{
            fullName: "",
            age: "",
            email: "",
            password: "",
            confirmPassword: "",
            phoneNumber:""
          }}
          onSubmit={(val) => {
            let newUser = {
              name: val.F,
              surname: val.surname,
              email: val.email,
              password: val.password,
              phoneNumber:val.phoneNumber
            };

            axios.post(process.env.REACT_APP_BASE_URL+"/Account/Register",val)
            .then(resp=>
              {
                if(resp.status===200)
                {
                    navigate("/")              
                }
              })
          }}
        >
          <Form className="login-frm container">
            <div className="field-div">
              <label htmlFor="fullName">Name</label>
              <Field className="input-register w-100" type="text" name="fullName" />
            </div>
            <div className="field-div">
              <label htmlFor="email">E-mail</label>
              <Field className="input-register w-100" name="email" />
            </div>
            <div className="field-div">
              <label htmlFor="password">Password</label>
              <Field className="input-register w-100" type="password" name="password" />
            </div>
            <div className="field-div">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                className="input-register w-100"
                type="password"
                name="confirmPassword"
              />
            </div>
            <div className="field-div">
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field
                className="input-register w-100"
                type="text"
                name="phoneNumber"
              />
            </div>
            <input
              onClick={handleOpen}
              className="input-button w-100 mb-3 mt-3"
              type="submit"
              value="Register"
            />
            <input
              onClick={()=>navigate("/login")}
              className="input-button w-100"
              type="submit"
              value="Login"
            />
          </Form>
        </Formik>
        </div>
    );
}
export default Register;
  