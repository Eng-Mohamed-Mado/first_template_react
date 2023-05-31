import React from 'react'
import { SpeakerWrapper } from './style_speaker'

const CreativeSpeakers = ({image,imgN,name,job}) => {
  return (
    <SpeakerWrapper>
      <img src={image} alt={imgN} width='90%'/>
      <h2>{name}</h2>
      <span>{job}</span>
    </SpeakerWrapper>
  )
}

export default CreativeSpeakers
