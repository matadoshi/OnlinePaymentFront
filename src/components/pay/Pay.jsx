import React,{useEffect} from 'react'
import { useState } from 'react';
import {Link,useNavigate,useSearchParams} from "react-router-dom";
import './styles.css'
const Pay = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data,setData]=useState([]);
  const navigate=useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    const params = { id: e.target.getAttribute("data-id") };
    navigate(`/pay/next?id=${e.target.getAttribute("data-id")}`)
};

  useEffect(() => { 
    fetch(
      `https://localhost:44319/Home/pay/${searchParams.get("id")}`,
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
        setData(data.attributes);
      })
      .catch((error) => {
          console.error("Error:", error);
      })
    },[]);
  return (
    <div>
          <ul className='att-list'>
        {data&&data.map(e=>{
          return(
            <li className='align-items-center text-center p-3 component'>
              <Link onClick={handleClick} data-id={e.name}>
              <img className="m-auto d-block att-logo" src={`${e.image}`} data-id={e.id}  alt="" />
              </Link>
              <div>{e.name}</div>
            </li>
          )
        })
      }
        </ul>
    </div>
  )
  }

export default Pay