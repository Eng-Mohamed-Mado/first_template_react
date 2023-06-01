import React from 'react'
import { DiscrSp, FirstWord, OurSponsorWrapper, ScoWord, Wrapper } from './style_sponsors'
 import OurSponsors from 'design-system/components/OurSponsors';
import DataOurSponsors from './Data_OurSponsors';
const OurSponsorsP = () => {
  return (
    <div className='container'>
           <Wrapper>            
                  <FirstWord>
                  OUR 
                  <ScoWord> SPONSORS</ScoWord>
                  </FirstWord>
                  <DiscrSp>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.</DiscrSp>
            </Wrapper>
            <OurSponsorWrapper>
              {DataOurSponsors.map((item)=>{
                return(
                  <OurSponsors key={item.id} img={item.img} alt={item.alt}/>
                )
              })}
            </OurSponsorWrapper>
        </div>

  )
}

export default OurSponsorsP
