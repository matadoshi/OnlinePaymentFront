
import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import './slider.css'
import axios from 'axios'

function SliderCarousel() {

  const [sld,setSld] = useState([])

  useEffect(()=>
    {
      axios.get(process.env.REACT_APP_BASE_URL+"/Home/GetSlider")
      .then(resp=> setSld(resp.data))
    },[])

    
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true, 
  };

  return (
    <>
      <Slider {...settings}>
      {
        sld&&sld.map(e=>
          {
            return(
        <div key={e.id} className="slider-item">
            <img src={`${e.image}`} alt=""/>
            <div className="container">
            <h5 className="main-title">{`${e.mainTitle}`}</h5>
            <p className="sub-title">{`${e.subTitle}`}</p>
            </div>
        </div>
            )
          })
      }
      </Slider>
    </>
  );
}

export default SliderCarousel;