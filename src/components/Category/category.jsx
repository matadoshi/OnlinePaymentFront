import React,{useState,useEffect} from "react";
import axios from 'axios'
import "./category.css"
import { Link ,useNavigate }from "react-router-dom";

function Category() {
  const [ctg,setCtg] = useState([])
  const navigate=useNavigate();
  useEffect(()=>
    {
      axios.get("https://localhost:44319/Home/GetCategory")
      .then(resp=>setCtg(resp.data))
    },[])

    const handleClick = (e) => {
      e.preventDefault();
      const params = { id: e.target.getAttribute("data-id") };
      navigate(`pay?id=${e.target.getAttribute("data-id")}`)
  };

  return (
    <>
    <div className='category component p-2 mb-3'>
        <h2 className='section-header'>Categories</h2>
          <ul className='d-flex row justify-content-between text-center p-0'>
        {ctg&&ctg.map(e=>{
          return(
              <li className='att col-lg-2 col-6' data-id={e.id}>
              <Link to={`pay/${e.id}`} onClick={handleClick} data-id={e.id}>
               <img className="m-auto att-image d-block" src={`${e.image}`} data-id={e.id}  alt="" />
            </Link>
                <span className="att-title">{`${e.name}`}</span>
            </li>
          )
        })
      }
        </ul>
    </div>
    </>
  )
}

export default Category