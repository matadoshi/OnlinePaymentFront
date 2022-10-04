import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from 'react-axios'
import { Formik, Form, Field } from "formik";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';


const Paynext = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data,setData]=useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => { 
        fetch(
          `https://localhost:44319/Home/pay/next/${searchParams.get("id")}`,
          {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
              },
          }
          )
          .then((response) => {
              return response.json();
          })
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
              console.error("Error:", error);
          })
        },[]);
  return (
    <div>
         <Formik
          initialValues={{
            phoneNumber:''
          }}
          onSubmit={(e) => {
            let payment = {
              phoneNumber:e.phoneNumber
            }}}
            >
            <Form className="form-log container">
              <div className="form-div">
                <Field
                    type="text"
                    name="phoneNumber"
                  className={`form-input input w-100`}
                  placeholder="Xahiş edirik, mobil nömrənizi daxil edin"
                />
              </div>
              <input className="submit w-100 mt-3 mb-3 p-2" type="submit" value="Continue" />
            </Form>
            </Formik>
    </div>
  )
}

export default Paynext