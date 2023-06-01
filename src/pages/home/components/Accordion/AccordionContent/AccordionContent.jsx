import React, { useState } from 'react'
import { AccordionWrapper, Content, H2, Item, P, Title ,Wrapper} from './style_AccordionContent'
import { DataAccordion } from './Data_Accordion'

 const AccordionContent  = () => {
    const [active,setActive] = useState(null)

    // Function Toggle Accordion
    const toggle = (idx)=>{
        if(active=== idx){
            return(
                setActive(null)
            )
        }setActive(idx)
    } 
  return (
    <Wrapper>
        <AccordionWrapper>
           {DataAccordion.map((item,idx)=>(
            <Item key={idx} onClick={()=>toggle(idx)}>
            <Title>
                <H2>{item.question}</H2>
                <span>{active === idx ? "-":"+"}</span>
            </Title>
            <Content className={active === idx ? "show" : ""}>
                <P>{item.answerOne}</P>
                <P>{item.answerTwo}</P>
            </Content>
        </Item>
           ))}
        </AccordionWrapper>
    </Wrapper>
  )
}
export default AccordionContent
