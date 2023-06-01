import React from 'react'
import { Wrapper,FirstWord,ScoWord,Discr } from './style_accordion';
import AccordionContent from './AccordionContent/AccordionContent'
const Accordion = () => {
  return (
    <div className='container'>
           <Wrapper>            
                  <FirstWord>
                  DO YOU HAVE
                  <ScoWord> QUESTIONS</ScoWord>?
                  </FirstWord>
                  <Discr>Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.
                </Discr>
            </Wrapper>
          <AccordionContent/>
        </div>

  )
}

export default Accordion
