import React from 'react'
import { Description, IconWrapper, Image, ImageWrapper, Name, OurProgramsWrapper, Title } from './style_programs'
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

      <Title>{title}</Title>
      <Name>{name}</Name>
      <Description>{description}</Description>
      </div>
    </OurProgramsWrapper>
  )
}

export default OurPrograms
