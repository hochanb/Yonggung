import Header from "components/Header";
import { TeamDetails, TeamHeader } from "components/TeamContents";
import {WaveTop2, WaveTop1} from "components/Wave";
import TopButton from "components/TopButton";
import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";


export default function TeamPage(){
  const location=useLocation();
  const [index, setIndex] = useState(location.state?.index || 0)
  const ref= useRef(null)

  return (
    
    <div 
    ref={ref}
    style={{
      width: '100vw',
      height: '100vh',
      overflow: 'scroll',
      background: 'var(--unnamed, linear-gradient(135deg, #4DEDED 0%, #A9C1FF 72.40%, #8B91FF 100%))',
    }}>
      
      
      <Header>
        <h1 className="text-2xl text-center font-coralblue">창작집단: 새벽</h1>
      </Header>

      <div className="relative">
        <WaveTop1 color="white" className="absolute top-0 w-full"/>
        <WaveTop2 className="absolute top-0"/>
      </div>

      <div style={{
      background: 'var(--unnamed, linear-gradient(135deg, #4DEDED 0%, #A9C1FF 72.40%, #8B91FF 100%))',
      }}>
      <TeamHeader index={index} setIndex={setIndex} />
      
      <TeamDetails index={index} setIndex={setIndex} />
      </div>
      <TopButton pageRef={ref}/>


    </div>
  )

}