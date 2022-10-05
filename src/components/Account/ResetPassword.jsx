import React,{useContext,useEffect,useState} from 'react'
import { Formik, Form, Field } from "formik";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function ResetPassword () {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(false);
    const navigate = useNavigate();
    const [checkUser, setCheckUser] = useState(null);
    useEffect(()=>
    {
      var token=null;
      if(JSON.parse(localStorage.getItem("Client"))!=null){
        token=JSON.parse(localStorage.getItem("Client")).result
      }
      setCheckUser(token)
    },[])
    return (
    <div className='texts'>
      {checkUser &&  <Formik
    initialValues={{
    id:checkUser.id,
    oldpassword:"",
    password:"",
    confirmpassword:""
    }}
  onSubmit={(val) => {
    axios.put(process.env.REACT_APP_BASE_URL+"/Account/ResetPassword",{
      id: val.id,
      currentPassword:val.oldpassword,
      newPassword: val.password,
      confirmPassword: val.confirmpassword
    })
    navigate("/")
  }}
    >
  <Form className="login-frm m-auto w-50">
  <div className="field-div">
      <label htmlFor="oldpassword">Current Password</label>
      <Field className="form-control"  type="password" name="currentPassword" />
    </div>
    <div className="field-div">
      <label htmlFor="password">New Password</label>
      <Field className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password" name="newPassword" />
    </div>
    <div className="field-div">
      <label htmlFor="password">Confirm New Password</label>
      <Field className="form-control w-100 mt-3" type="password" name="confirmPassword"/>
    </div>
    <div className="field-div d-none">
      <Field className="form-control w-100 mt-3" value={checkUser.id} type="password" name="id"/>
    </div>
    <input
      onClick={handleOpen}
      className="btn btn-primary"
      type="submit"
      value="Update"
    />
    </Form>
      </Formik>}
   
  </div>
  )
}

export default ResetPassword