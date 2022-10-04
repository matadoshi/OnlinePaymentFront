import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
 const History = () => {
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
      axios.get(`https://localhost:44319/Invoice/Invoices/${user.id}`)
      .then(res=>{
        setData(res.data)
      })
    }
  },[])
  return (
    <div className='recent component p-2 mb-3'>
    
    {(data.length==0)?<>
      <h2 className='section-header'>Recent transactions</h2>
    <p className='text-center'>You don't have transactions yet</p></>:
    <>
    <ul>
      {
        (data && data.map(e=>{
          return <li>
            <span>{e.date}</span>
            <div className='d-flex justify-content-between align-items-center'>
              <div className="left"><h2>{e.name}</h2></div>
              <div className="right">
                <h3>{e.transaction.amount} {e.transaction.currency}</h3>
                <h6>{e.date}</h6>
              </div>
            </div>
          </li>
        }))
      }
    </ul>
    </>
    }
    </div>
  )
}

export default History