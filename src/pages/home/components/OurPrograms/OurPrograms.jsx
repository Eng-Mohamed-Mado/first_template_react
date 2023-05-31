import React from 'react'
import { Discr, Our, OurProgramsWrpper, Programs, TabsWrapper } from './style_ourprograms'
import Tabs from './Tabs'

const OurPrograms = () => {
  return (
    <div className='container'>
    <OurProgramsWrpper>
                <div>
                <Our>Our</Our>
                <Programs>Programs</Programs>
                <Discr>Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.
               </Discr>
            </div>

            <TabsWrapper>
                <Tabs/>
            </TabsWrapper>
            </OurProgramsWrpper>
        </div>
  )
}

export default OurPrograms
