import React from 'react'
import { CrSpeakerWrapper, Creative, Discr, SliderWrapper, Speakers } from './style_speakers'
import Slider from './Slider'

const CreativeSpeakers = () => {
  return (
    <CrSpeakerWrapper>
        <div className='container'>
            <div>
                <Creative>Creative</Creative>
                <Speakers>Speakers</Speakers>
                <Discr>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.</Discr>
            </div>
            <SliderWrapper>
              <Slider/>
            </SliderWrapper>
        </div>
    </CrSpeakerWrapper>
  )
}

export default CreativeSpeakers
