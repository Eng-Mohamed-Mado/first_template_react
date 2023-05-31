import React from 'react'
import { IconWrapper, Image, ImageWrapper, OurProgramsWrapper } from './style_programs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const OurPrograms = ({img,alt,time,roomNumber,title,name,description}) => {
  return (
    <OurProgramsWrapper>
      <ImageWrapper>
            <Image src={img} alt={alt}/>
      </ImageWrapper>
      <div>
      <IconWrapper>
         <div>
            <FontAwesomeIcon icon={faClock} /> {time}
        </div>
        <div>
             <FontAwesomeIcon icon={faLocationDot} /> {roomNumber} 
        </div>
      </IconWrapper>

      <h2>{title}</h2>
      <span>{name}</span>
      <p>{description}</p>
      </div>
    </OurProgramsWrapper>
  )
}

export default OurPrograms
