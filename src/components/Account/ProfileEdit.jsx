import React,{useContext,useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Formik, Form, Field } from "formik";

function ProfileEdit () {
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
    fullName:checkUser.fullName,
    gender:checkUser.gender,
    phone:checkUser.phone,
    image:checkUser.image,
    birthday:checkUser.birthday
    }}
  onSubmit={(val) => {
    axios.put(process.env.REACT_APP_BASE_URL+"/Account/ProfileEdit",{
        id:val.id,
        fullName:val.fullName,
        gender:val.gender,
        phone:val.phone,
        image:val.image,
        birthday:val.birthday
    })
    console.log(val.id)
  }}
    >
  <Form className="login-frm m-auto w-50">
    <h1 className='text-center'>Update Your Profile Information</h1>
  <div className="field-div">
      <label htmlFor="fullName">Fullname</label>
      <Field className="form-control w-100" type="text" name="fullName" />
    </div>
    <div className="field-div">
      <label htmlFor="gender">Gender</label>
      <Field className="form-control w-100" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="text" name="gender" />
    </div>
    <div className="field-div">
      <label htmlFor="phone">Phone</label>
      <Field className="form-control w-100" type="text" name="phone"/>
    </div>
    <div className="field-div">
      <label htmlFor="image">Image</label>
      <Field className="form-control w-100" type="text" name="image"/>
    </div>
    <div className="field-div">
      <label htmlFor="birthday">Birthday</label>
      <Field className="form-control w-100" type="date" name="birthday"/>
    </div>
    <div className="field-div d-none">
      <Field value={checkUser.id} type="password" name="id"/>
    </div>
    <input
      onClick={handleOpen}
      className="btn btn-primary w-100 mt-3"
      type="submit"
      value="Update"
    />
    </Form>
      </Formik>}
   
  </div>
  )
}


export default ProfileEdit