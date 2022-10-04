import React, { useState,useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import '../css/Cards.css'
const Cards = () => {
  const [data,setData] = useState([])
  const navigate=useNavigate();
  const [checkUser, setCheckUser] = useState("");
  useEffect(()=>
  {
    var user=null;
    if(JSON.parse(localStorage.getItem("Client"))!=null){
      user=JSON.parse(localStorage.getItem("Client")).result
    }
     setCheckUser(user)
    if(user!==null){
      axios.get(`https://localhost:44319/Card/MyCards/${user.id}`)
      .then(res=>{
        setData(res.data)
      })
      console.log(data)
    }
  },[])
  return (
    <div className="component">
      {(checkUser!==null)?
      <>
      {
      (data.length!==0)?
      <>
      <ul className="p-0">
      {
        (data && data.map(e=>{
        console.log(e)

          return <li className="mycard">
            <div className='d-flex justify-content-between align-items-center'>
              <div className="left"><span>{e.name}</span> <span>{e.number} {e.expirationDate}</span></div>
              <img className="att-logo" src={e.image} alt="" />
            </div>
          </li>
        }))
      }
    </ul></>
      :
      <>
      <h1 className='component text-center p-3'>No Data</h1></>}
      </>:
      <>
       <h1 className='component text-center p-3'>
          Please,previously login or register
        </h1>
      </>
      }
    </div>
  )
}

export default Cards