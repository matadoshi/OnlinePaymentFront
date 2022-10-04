import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Customer = () => {
    const [customers,setCustomer] = useState([])

  useEffect(()=>
    {
      axios.get(process.env.REACT_APP_BASE_URL+"/Home/GetCustomers")
      .then(resp=>setCustomer(resp.data))
    },[])
  return (
    <div>
        <ul className='d-flex row justify-content-between align-items-center text-center'>
        {customers&&customers.map(e=>{
          return(
              <li className='customer component'>
                <h2 className='customer-name'>{e.name}</h2>
                <p>{e.comments}</p>
                <span>{e.createdAt}</span>
              </li>
          )
        })
        }
        </ul>



    </div>
  )
}

export default Customer