import React, { useState } from 'react'
import { Line, TabsSpan, Wrapper } from './style_ourprograms'
import { tab1,tab2,tab3 } from 'design-system/components/OurPrograms/DataOurPrograms';
import OurPrograms from 'design-system/components/OurPrograms';
import theme from 'design-system/config';

const Tabs = () => {
    // Create State 
    const [tab,setTab] =useState('tab1');

    // Create Function SwitchTAb
    const switchTab = (tab) => {
        setTab(tab);
    }
  return (
    <>
        <Wrapper>
            <TabsSpan style={{color: tab ==="tab1" ? theme.primaary: "", borderBottom: tab ==="tab1"? `1px solid ${theme.primaary}`:""}} onClick={()=> switchTab("tab1")}>First Day</TabsSpan>
            <TabsSpan style={{color: tab ==="tab2" ? theme.primaary: "", borderBottom: tab ==="tab2"? `1px solid ${theme.primaary}`:""}} onClick={()=> switchTab("tab2")}>Second Day</TabsSpan>
            <TabsSpan style={{color: tab ==="tab3" ? theme.primaary: "", borderBottom: tab ==="tab3"? `1px solid ${theme.primaary}`:""}} onClick={()=> switchTab("tab3")}>Third Day</TabsSpan>
        </Wrapper> 
        <Line/>
        <div>
        {tab === "tab2" ? 
        tab2.map((item)=>{
            return(
                <OurPrograms name={item.name} title={item.title} img={item.img} alt={item.alt} time={item.time} roomNumber={item.roomNumber} description={item.description} key={item.id}/>
            )
        })
            : tab === "tab3" ? 
            tab3.map((item) => {
                return(
                    <OurPrograms name={item.name} title={item.title} img={item.img} alt={item.alt} time={item.time} roomNumber={item.roomNumber} description={item.description} key={item.id}/>
                )
            }) : 
            tab1.map((item)=> {
                return(
                    <OurPrograms name={item.name} title={item.title} img={item.img} alt={item.alt} time={item.time} roomNumber={item.roomNumber} description={item.description} key={item.id}/>
                )
            })
        }
        </div>
    </>
  )
}

export default Tabs
