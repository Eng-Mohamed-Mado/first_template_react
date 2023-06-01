import React from 'react'

const OurSponsors = ({img,alt}) => {
  return (
    <div style={{cursor: "pointer"}}>
      <img width={'100%'}  src={img} alt={alt}/>
    </div>
  )
}

export default OurSponsors
