import React,{useContext,useState} from 'react'
import { Formik, Form, Field } from "formik";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function ResetPassword () {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(false);
    const navigate = useNavigate();
    return (
    <div className='texts'>
    <Formik
    initialValues={{
    oldpassword:"",
    password:"",
    confirmpassword:""
    }}
  onSubmit={(val) => {
    axios.put("https://localhost:44319/Account/ResetPassword",{
      id:val.id,
      currentPassword:val.oldpassword,
      newPassword: val.password,
      confirmPassword: val.confirmpassword
    })
  }}
    >
  <Form className="login-frm">
  <div className="field-div">
      <label htmlFor="oldpassword">Current Password</label>
      <Field type="password" name="currentPassword" />
    </div>
    <div className="field-div">
      <label htmlFor="password">New Password</label>
      <Field type="password" name="newPassword" />
    </div>
    <div className="field-div">
      <label htmlFor="password">Confirm New Password</label>
      <Field
        type="password"
        name="confirmPassword"
      />
    </div>
    <input
      onClick={handleOpen}
      type="submit"
      value="Update"
    />
    </Form>
</Formik>
  </div>
  )
}

export default ResetPassword