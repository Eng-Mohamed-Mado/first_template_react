import React from 'react'
// import DataOurPrograms from './design-system/components/OurSponsors/Data_OurSponsors';
// import OurSponsors from './design-system/components/OurSponsors/OurSponsors';
//import OurPrograms from './design-system/components/OurPrograms';


// Import Components
// import Overview from './design-system/components/Overview';
// import overviewData from './design-system/components/Overview/Data';
// import CreativeSpeakers from './design-system/components/CreativeSpeakers';

// import DataSpeaker from './design-system/components/CreativeSpeakers/DataSpeaker'
// import DataOurPrograms from './design-system/components/OurPrograms/DataOurPrograms';
import Home from './pages/home';
import  'design-system/main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes> 
     {/**  <div style={{display:'flex'}}>
          {overviewData.map( item => (
          <Overview key={item.id} icon={item.icon} title={item.title} description={item.description} />
          ))} 
          {DataSpeaker.map(item=>(
            <CreativeSpeakers key={item.id} image={item.image} imgN={item.imgN} name={item.name} job={item.job}/>
          ))}
      </div>*/}
      {/** {DataOurPrograms.map(item=>{
        return(
          <OurPrograms img={item.img} alt={item.alt} time={item.time} roomNumber={item.roomNumber} title={item.title} name={item.name}  description={item.description} />
        )
      })}*/}
      {/**<div style={{display:'flex',gap:'10px'}}>
        {DataOurPrograms.map(item=>{
          return(
            <OurSponsors img={item.img} alt={item.alt} />
          )
        })}
      </div>*/}
         <Route path='/' element={<Home/>} />
      </Routes> 
    </BrowserRouter>  
  );
}

export default App;
