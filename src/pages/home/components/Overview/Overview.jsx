import React from 'react'
import { OverviewContainer, OverviewWrapper } from './style_overview'
import overviewData from 'design-system/components/Overview/DataOverview'
import OverviewComponent from 'design-system/components/Overview';

const Overview = () => {
  return (
    <OverviewWrapper>
      <div className='container'>
            <OverviewContainer>
            {overviewData.map(item =>(
                <OverviewComponent key={item.id} icon={item.icon} title={item.title}  description={item.description} />
            ))}
            </OverviewContainer>
      </div>
    </OverviewWrapper>
  )
}

export default Overview
