import { useRef } from "react"
import { WaveBottom, WaveTop } from "./Wave"
import TopButton from "./TopButton";
import { useState } from "react";
import { BookIconPath, HexagonPath, ProfileIconPath, SegmentedCirclePath } from "svgpaths"

function HeaderItem({iconPath, selected=false, onClick, text="none"}){
  return(
    <div style={{
      width: '80px',
      transform: selected?'translateY(-4px)':'translateY(0)',
      transitionProperty: 'transform',
      transitionDuration: '0.1s',
    }}
    className='flex flex-col items-center justify-center'
    onClick={onClick}
    >
    <div className='w-[60px] h-[60px] relative' 
    > 
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 90 90" fill="none" className='absolute top-0'
      >
        <HexagonPath color={selected?'#F5EEB9':'rgba(255,255,255,0.33)'} strokeWidth={2} s={0.95} x={-7} y={-3}/>
      </svg>
      < svg xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 90 90" fill="none" className='absolute top-0'
          style={selected?{
            filter: `drop-shadow(0px 0px 2px rgba(0,0,0,0.2))`,
          }:null}
      >
        {{...iconPath, props:{...iconPath.props, strokeWidth: 1.5, color: selected?'white':'rgba(255,255,255,0.7)'}}}
        
      </svg>
    </div>
    <div style={{
      marginTop: '0.1rem',
      fontSize: '14px',
      color: 'white',
      fontWeight: 500,
      
    }}>
      {text}
    </div>
    </div>
  )
}

export function MusicalHeader({section=0, setSection}){



  return (

    <div className="w-full h-[180px] absolute top-0 z-10"
    style={{
      background: 'linear-gradient(180deg, #6EDEF4 0%, rgba(114, 220, 245, 0.87) 61.98%, rgba(118, 218, 245, 0.00) 100%)'
    }}>
          
      <div className="relative">
        <WaveTop color="white" className="absolute top-0 w-full"/>
        <WaveBottom className="absolute top-0"/>
      </div>
      <div className="w-full flex flex-row justify-evenly items-center">
        <HeaderItem 
          selected={section===0}
          onClick={()=>setSection(0)}
          text="시놉시스"
          iconPath={
            <BookIconPath color={'white'} strokeWidth={5} x={24} y={26} s={1.3}/>
          }/>
        <HeaderItem 
          selected={section===1}
          onClick={()=>setSection(1)}
          text="연출의도"
          iconPath={
            <SegmentedCirclePath color={'white'} strokeWidth={1} x={21} y={22}/>
        }/>
        <HeaderItem 
          selected={section===2}
          onClick={()=>setSection(2)}
          text="인물 관계도"
          iconPath={
            <ProfileIconPath color={'white'} s={1.3} x={23} y={24}/>
        }/>
      </div>
    </div>
  )
}

const Content1=({pageRef})=>{
  return(

    <div ref={pageRef} className="w-full pt-[280px] text-white" style={{
      filter:'drop-shadow(0 0 6px rgba(0,0,0,0.3))'
    }}>
      <h1 className="pr-8 text-lg">"현실보다 더 달콤하고,</h1>
      <h1 className="pl-8 text-lg">현실보다 더 진짜같지"</h1>
      <h1 className="pt-12 text-sm text-center" >
        2032년, 한국의 게임 회사 XPS는<br/> 최초로 게임 속에 사람과 구별할 수 없는<br/> 
        인공지능을 구현해 내는데 성공한다.<br/><br/> 
        프로젝트 게임 {"<용궁>"}의 주축은<br/> 
        윤지운, 도은세 그리고 이현서.<br/><br/> 
        그러나 얼마 지나지 않아, 윤지운의 자살 사건과<br/> 
        도은세의 실종 사건이 연달아 발생한다.<br/> 
        이로 인해 프로젝트 게임 {"<용궁>"}은 잠정 중단된다.
      </h1>

      <h1 className="text-lg pt-16">
        "당신이 알아야 할 진실이 여기 있습니다"
      </h1>
      <h1 className="pt-12 text-sm text-center">
        몇 년 후, 윤지운의 동생 재이에게 <br/>
        의문의 메일과 {"<용궁>"} 게임 세트가 전달된다. <br/>
        메일에는 오빠의 죽음이 궁금하다면, <br/>
        게임을 플레이 해보라는 말만 남겨져 있다.
      </h1>
      
      <h1 className="text-lg pt-16" style={{
        lineHeight:1
      }}>
        베일에 싸인 오빠의 죽음.
      </h1>
      <h1 className="text-lg pt-0" style={{
        transform: 'scale(1,-1)',
        color: 'rgba(97, 129, 247, 1)',
        lineHeight:1,
        WebkitMaskImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.2)), color-stop(0.6, rgba(0,0,0,0.8)), to(rgba(0,0,0,1)))'
      }}>
        베일에 싸인 오빠의 죽음.
      </h1>

      <h1 className="pt-12 text-sm text-center">
        재이는 게임 {"<용궁>"}이 오빠의 죽음을 밝혀낼 <br/>
        유일한 단서라고 생각한다. <br/>
        고민 끝에 미지의 용궁 속으로 뛰어든 재이, <br/>
      </h1>
      <h1 className="pt-6 text-lg text-center">
        그 끝에는 누가 서 있을까.
      </h1>
    </div>
  )
}

const Content2=({pageRef})=>{
  return(
    
    <div ref={pageRef} className="pt-[280px] pr-6 pl-6 text-white text-justify text-sm">
      <h1>
      창작집단 새벽의 첫 창작 뮤지컬 {"<용궁: 낙원의 미스테리>"}
      (이하 용궁)는 밤에서 새벽으로 가는 과정을 그리듯, 아직 
      확실하지 않지만 어렴풋이 보이는 근미래를 배경으로 한다.
      <br/>
      <br/>
      {"<용궁>"}은 현실과 구분하기 어려운 가상의 경험을 제공하는 VR게임을 소재로 하여, 극장이라는 또 다른 가상의 공간에 혼합현실을 형성한다. 게임 안과 밖, 과거와 현재를 오가는 미래의 용궁은 중층적인 시공간을 지속적으로 구현하고, 
      이때 인물을 따라가며 겹쳐진 세계를 오가는 관객은 동등한 플레이어이자 탐험가가 된다.
      <br/>
      <br/>

      배우와 관객이 모두 모험하는 게임 속 낙원은 익숙하고 친근하면서도 알 수 없는 신비를 품고 있다. 
      {"<용궁>"}은 미지의 세계의 접근하는 여정을 미스터리 장르로 풀어내면서, 
      그 속에서 선명하게 꿈틀거리는 인간의 감정과 욕망에 주목한다.배우와 관객이 모두 모험하는 게임 속 낙원은 익숙하고 친근하면서도 알 수 없는 신비를 품고 있다. 
      {"<용궁>"}은 미지의 세계의 접근하는 여정을 미스터리 장르로 풀어내면서, 그 속에서 선명하게 꿈틀거리는 인간의 감정과 욕망에 주목한다.
      배우와 관객이 모두 모험하는 게임 속 낙원은 익숙하고 친근배우와 관객이 모두 모험하는 게임 속 낙원은 익숙하고 친근하면서도 알 수 없는 신비를 품고 있다.
      <br/>

      </h1>
    </div>
  )
}

const Content3=({pageRef})=>{
  const [toggle, setToggle]=useState(true);

  return(
    <div ref={pageRef} className="w-full min-h-full pt-[240px] flex flex-col items-center jusify-top  text-white min-h-[60vh]"
    >
      <div className='relative m-16 bg-[rgba(255,255,255,0.2)] w-[180px] h-[48px] rounded-full flex justify-evenly items-center'
      onClick={()=>setToggle(!toggle)}
      >
        <div className={`absolute w-[88px] h-[40px] rounded-full transition-all ${toggle?'left-1 bg-[#F5EEB9]':'left-[88px] bg-[#60E4F1]'} `}style={{
          filter:'drop-shadow(0 1px 3px rgba(0,0,0,0.1))',
        }}/>
        <div className='w-[80px] h-[40px] flex justify-center items-center z-[1]'style={{
          filter:'drop-shadow(0 0 6px rgba(0,0,0,0.4))',
        }}>
          현실 ver
        </div>
        <div className='w-[80px] h-[40px] flex justify-center items-center z-[1] 'style={{
          filter:'drop-shadow(0 0 6px rgba(0,0,0,0.4))'
        }}>
          용궁 ver
        </div>
      </div>

      {toggle?
      <div className="w-full h-[400px] bg-yellow-100">

      </div>
      :
      <div className="w-full h-[400px] bg-green-100">
      </div>
      } 
    </div>
  )
}

export function MusicalContainer({pageRef, ref1, ref2, ref3}){

  return (
    <div className="w-full relative overflow-scroll" ref={pageRef} style={{
      background:`linear-gradient(135deg, #4DEDED 0%, #A9C1FF 72.40%, #8B91FF 100%), url(${process.env.PUBLIC_URL}/images/etc/codes.png) no-repeat`,
      backgroundBlendMode:'exclusion',
  }}>

    <Content1 pageRef={ref1}/>
    <Content2 pageRef={ref2}/>
    <Content3 pageRef={ref3}/>

    <TopButton pageRef={pageRef}/>
  </div>
  )
}