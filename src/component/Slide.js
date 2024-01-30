import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MySlider = () => {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {
        images.map((imgs,id)=>{
            return (
                <div key={id}>
                    
                    <img src={imgs}  alt={id}/>
                </div>
            )
        })
      }
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default MySlider;
