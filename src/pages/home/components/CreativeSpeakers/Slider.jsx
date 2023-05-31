import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import DataSpeaker from 'design-system/components/CreativeSpeakers/DataSpeaker';
import CreativeSpeakers from 'design-system/components/CreativeSpeakers';

const Slider = () => {
  return (
    <Swiper 
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      
    loop={true}
    modules={[Autoplay]}
    spaceBetween={50} slidesPerView={4}>
    {DataSpeaker.map(item=>{
        return(
            <SwiperSlide>
                <CreativeSpeakers 
                key={item.id} 
                name={item.name} 
                image={item.image} 
                imgN={item.imgN} 
                job={item.job} />
            </SwiperSlide>
        )}
    )}
    </Swiper>
  );
};

export default Slider
