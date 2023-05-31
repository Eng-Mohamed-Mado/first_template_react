import React from 'react'

// Import Font-Awesome
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Description, OverviewWrapper, Title } from './style_overview'
const Overview = ({icon,title,description}) => {
    
    
    return (
    <OverviewWrapper >
    
        <div>
            <FontAwesomeIcon size='2xl' color="#f2545f" icon={icon}/>
        </div>
            <Title>{title}</Title>
            <Description>{description}</Description>
        
    </OverviewWrapper>
  )
}

export default Overview
