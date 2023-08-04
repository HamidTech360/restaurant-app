
import React from 'react'
//@ts-ignore
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper  } from "swiper/react";




import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "swiper/css";


const AppSwiper = ({slides=[]}:any) => {
     

  return (
    <div className="flex">

   
     <div  style={{overflow:'hidden'}}>
        <Swiper
        style={{height:'fit-content'}}
            breakpoints={{
                320:{
                width:320,
                slidesPerView:1.05,
                spaceBetween:10,
                

                
                },
                640: {
                    width: 640,
                    slidesPerView: 1.05,
                    spaceBetween:10,
                

                },
                
                768: {
                    width: 900,
                    slidesPerView: 2,
                    spaceBetween:30,
                

                },
            }}
            navigation
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={2}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            speed={1000}
            initialSlide={1}  
        > 
        {slides?.map((item:any, i:any)=>
            <SwiperSlide>
                {item}
            </SwiperSlide>
        )}
            
        
        </Swiper>
     </div>
  

     
    </div>
  );
};

export default AppSwiper;
