import Header from "components/Header";
import {IntroDawn, IntroGreeting} from "components/IntroContents";
import IntroHeaderTab from "components/IntroHeaderTab";
import {WaveTop2, WaveTop1} from "components/Wave";
import { useEffect, useState } from "react";
import { OrganizationChart } from "components/IntroContents";


const MakingProcess =()=>{
  const [index, setIndex]=useState(0);
  function Button({name, toggled, onClick}){
    return(
      <div onClick={onClick} className='w-[70px] h-[33px] flex justify-center items-center z-[1]'style={{
      color: 'white',
      borderRadius: '20px',
      background: toggled?'#F5EEB9':'rgba(255, 255, 255, 0.23)',
      filter:'drop-shadow(0 1px 3px rgba(0,0,0,0.1))',
    }}>
      <span style={{
        filter: toggled?'drop-shadow(0 0 6px rgba(0,0,0,0.4))':'',
        
      }}>
      {name}

      </span>
      </div>
    )
  }
  return(
    <div className="w-full flex flex-row items-center justify-evenly relative mt-14">
      <Button name="소품" toggled={index===0} onClick={()=>setIndex(0)}/>
      <Button name="의상" toggled={index===1} onClick={()=>setIndex(1)}/>
      <Button name="조명" toggled={index===2} onClick={()=>setIndex(2)}/>
      <Button name="무대" toggled={index===3} onClick={()=>setIndex(3)}/>
    </div>
  )
}


export default function BehindPage() {
  const [toggle, setToggle]=useState(true);

  return (
    <div 
    style={{
      width: '100vw',
      height: '100vh',
      overflow: 'scroll',
      background: 'var(--unnamed, linear-gradient(135deg, #4DEDED 0%, #A9C1FF 72.40%, #8B91FF 100%))',
      position: 'relative',
    }}>
      <Header>
        <h1 className="text-2xl text-center font-coralblue">용궁 비하인드</h1>
      </Header>
      <div className="relative">
        <div className="absolute top-0 z-10">
          <WaveTop1 color="white" className="absolute top-0 w-full"/>
          <WaveTop2 className="absolute top-0"/>
        </div>

        <div className="relative flex flex-col items-center justify-center w-full">
        <div className='relative mt-16 bg-[rgba(255,255,255,1)] w-[180px] h-[48px] rounded-full flex justify-evenly items-center'
      onClick={()=>setToggle(!toggle)}
      >
        <div className={`absolute w-[88px] h-[40px] rounded-full transition-all ${toggle?'left-1 bg-[#F5EEB9]':'left-[88px] bg-[#F5EEB9]'} `}style={{
          filter:'drop-shadow(0 1px 3px rgba(0,0,0,0.1))',
        }}/>
        <div className='w-[80px] h-[40px] flex justify-center items-center z-[1]'style={{
          color: toggle?'#fff':'#A3A3A3',
          filter: toggle?'drop-shadow(0 0 6px rgba(0,0,0,0.4))':'',
        }}>
          제작 과정
        </div>
        <div className='w-[80px] h-[40px] flex justify-center items-center z-[1] 'style={{
          color: !toggle?'#fff':'#A3A3A3',
          filter: !toggle?'drop-shadow(0 0 6px rgba(0,0,0,0.4))':'',
        }}>
          연습 과정
        </div>
      </div>
      </div>
        <MakingProcess/>
      </div>
    </div>
  );
}