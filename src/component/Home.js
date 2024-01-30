import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
    const images=[
        "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
        "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
        "https://wowslider.com/sliders/demo-18/data1/images/new_york.jpg",
        
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div name="home" className="flex h-screen w-full bg-gradient-to-b from-black to-gray-800 z-1">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                           
        <div style={{width:"1200px"}}>
        <Slider {...settings}>
          {
            images.map((imgs, id)=>{
                return (
                    <div key={id}>
                        <img src={imgs} alt={id} width={"100%"}/>
                    </div>
                )
            })
          }
        </Slider>
      </div>
        </div>
    </div>

  )
}

export default Home;
