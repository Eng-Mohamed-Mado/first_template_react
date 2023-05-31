import React from 'react'
import { Names, Jobs, SpeakerWrapper } from './style_speaker'

const CreativeSpeakers = ({image,imgN,name,job}) => {
  return (
    <SpeakerWrapper>
      <img src={image} alt={imgN} width='90%'/>
      <Names>{name}</Names>
      <Jobs>{job}</Jobs>
    </SpeakerWrapper>
  )
}

export default CreativeSpeakers
