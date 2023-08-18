import { CashbagIconPath, HexagonPath, MusicIconPath, SegmentedCirclePath, SpannerIconPath, StarIconPath, TriangleIconPath, WandIconPath } from "svgpaths"
import { useState } from "react"
import 'css/custom.css'
import {TeamsData} from 'MemberInfo'
import { useEffect } from "react"

const TeamButton=({selected, onClick, iconPath})=>{
  return(
    <div style={{
      width: '40px',
      height: '40px',
      transform: selected?'translateY(-4px)':'translateY(0)',
      transitionProperty: 'transform',
      transitionDuration: '0.1s',
    }}
    onClick={onClick}
    >
    <div className='w-full h-full absolute' > 
      <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 90 90" fill="none" className='absolute top-0'
      >
        <HexagonPath color={selected?'#F5EEB9':'rgba(255,255,255,0.33)'} strokeWidth={2} s={0.95} x={-7} y={-3}/>
      </svg>
      < svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 90 90" fill="none" className='absolute top-0'
          style={selected?{
            filter: `drop-shadow(0px 0px 3px rgba(0,0,0,0.25))`,
          }:null}
      >
        {{...iconPath, props:{...iconPath.props, strokeWidth: 1.5, color: selected?'white':'rgba(255,255,255,0.7)'}}}
        
      </svg>
    </div>
    <div style={{
      marginTop: '0.3rem',
      fontSize: '18px',
      color: 'white',
      fontWeight: 700,
    }}>
    </div>
    </div>
  )
}


export const TeamHeader=({index=0,setIndex})=>{
  return(
    <div className="w-full h-[48px] relative flex justify-evenly pl-2 pr-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="40" viewBox="0 0 14 22" fill="none">
          <path d="M13.2123 20.661C14.1449 19.8795 14.1457 18.4453 13.2139 17.6628L6.93418 12.3887C5.98253 11.5894 5.98253 10.1249 6.93418 9.32563L13.2139 4.05148C14.1457 3.26895 14.1449 1.83483 13.2123 1.05329C12.4852 0.44394 11.4257 0.44394 10.6986 1.05329L0.82915 9.32425C-0.124693 10.1236 -0.124694 11.5907 0.829149 12.39L10.6986 20.661C11.4257 21.2703 12.4852 21.2703 13.2123 20.661Z" fill="white"/>
      </svg>  
      <TeamButton iconPath={
        <StarIconPath color={'white'} strokeWidth={1} s={1.2} x={25} y={24} />}
        selected={index===0}
        onClick={()=>setIndex(0)}
      />
      <TeamButton iconPath={
        <SpannerIconPath color={'white'} strokeWidth={1} s={1.2} x={27} y={27}/>}
        selected={index===1}
        onClick={()=>setIndex(1)}
      />
      <TeamButton iconPath={
        <SegmentedCirclePath color={'white'} strokeWidth={1} s={1.2} x={16} y={16} />}
        selected={index===2}
        onClick={()=>setIndex(2)}
      />
      <TeamButton iconPath={
        <MusicIconPath color={'white'} strokeWidth={1} s={1.2} x={23} y={24} />}
        selected={index===3}
        onClick={()=>setIndex(3)}
      />
      <TeamButton iconPath={
        <CashbagIconPath color={'white'} strokeWidth={1} s={1.2} x={23} y={22} />}
        selected={index===4}
        onClick={()=>setIndex(4)}
      />
      <TeamButton iconPath={
        <WandIconPath color={'white'} strokeWidth={1} s={1.2} x={25} y={25} />}
        selected={index===5}
        onClick={()=>setIndex(5)}
      />
      <TeamButton iconPath={
        <TriangleIconPath color={'white'} strokeWidth={1} s={1.2} x={25} y={23} />}
        selected={index===6}
        onClick={()=>setIndex(6)}
      />

    </div>
  )
}

const MemberProfileImage=({fileName, scale=1})=>{

  return(
    <div className="w-[100px] h-[100px] p-[7px] rounded-full bg-[rgba(255,255,255,0.1)]"
    style={{
      // filter: 'drop-shadow(0px 0px 12px rgba(0,0,120, 0.3))',
      transform: `scale(${scale})`
    }}>
      <div className="w-full h-full p-[7px] rounded-full bg-[rgba(255,255,255,0.12)]">
        <img className="w-full h-full rounded-full border-white border-[4px] bg-white" alt="x"
          src={`${process.env.PUBLIC_URL}/images/members/${fileName}`} 
        />

      </div>
    </div>
  )
}

const MemberProfileCell=({memberData, toggled=false, onClick, position, index})=>{
  return(
    <div className={`w-full h-auto flex flex-col justify-center items-center`}
    style={toggled?{
      // transition:'all 0.3s ease-in-out',
      gridColumn: 'span 2',
      marginTop: '4rem',
    }:{}}>
      <MemberProfileImage fileName={memberData.Image} scale={toggled? 1.4 : 1}/>
      <div className={`text-white w-[8rem] relative pl-4 ${toggled?'mt-4':''}`}
        onClick={onClick}
      >
        {toggled?`${memberData.Name} ▲`: `${memberData.Name} ▼`}
      </div>

      <div className="w-auto h-auto mt-2 pr-2 pl-2 pt-1 pb-1 bg-[rgba(255,255,255,0.5)] text-[#6181F7] font-bold rounded-full text-center align-middle text-[12px]">
          {memberData.Insta}
      </div>
      
      {toggled?
      <>
      <div className="w-full flex justify-center">
        {
          memberData.Works.map((work, i)=>{
            return( <h1 className="text-white text-m p-4">{work}</h1>
          )})}

      </div>
      <h2 className="text-white text-[14px] pl-8 pr-8 pb-12">
        {memberData.Words}
      </h2>

      </>
      :null
      }
    </div>
  )
}

const CreatorTeamTab=({index=0, setIndex})=>{
  return(
    <>
    <svg xmlns="http://www.w3.org/2000/svg" width="232" height="16" viewBox="0 0 232 16" fill="none"
    className="mt-8 mb-1">
      
      <circle cx="8" cy="8" r="8" fill={index===0?"#F5EEB9":'white'} fillOpacity={index===0?1:"0.4"}/>
      <circle cx="7" cy="6" r="5" fill="white" fillOpacity="0.4"/>
      <circle cx="6.5" cy="4.5" r="2.5" fill="white" fillOpacity="0.8"/>

      <circle cx="116" cy="8" r="8" fill={index===1?"#F5EEB9":'white'} fillOpacity={index===1?1:"0.4"}/>
      <circle cx="115" cy="6" r="5" fill="white" fillOpacity="0.4"/>
      <circle cx="114.5" cy="4.5" r="2.5" fill="white" fillOpacity="0.8"/>
      
      <circle cx="224" cy="8" r="8" fill={index===2?"#F5EEB9":'white'} fillOpacity={index===2?1:"0.4"}/>
      <circle cx="223" cy="6" r="5" fill="white" fillOpacity="0.4"/>
      <circle cx="222.5" cy="4.5" r="2.5" fill="white" fillOpacity="0.8"/>


      <line x1="15" y1="7.5" x2="108" y2="7.5" stroke="white"/>
      <line x1="124" y1="7.5" x2="216" y2="7.5" stroke="white"/>
    </svg>
    <div className="flex justify-between w-[250px] text-white">
      <h1 onClick={()=>setIndex(0)}>총괄</h1>
      <h1 onClick={()=>setIndex(1)}>극작</h1>
      <h1 onClick={()=>setIndex(2)}>작곡</h1>
    </div>
    </>

  )
}


export const TeamDetails=({index})=>{
  const [headDetailOn, setHeadDetailOn]=useState(true);
  const [toggledIndex, setToggledIndex]=useState(-1);
  const [creatorTeamIndex, setCreatorTeamIndex]=useState(0);
  const [teamData, setTeamData] = useState(TeamsData[0].CreatorTeams[0]);

  useEffect(()=>{
    index===0?setTeamData(TeamsData[0].CreatorTeams[creatorTeamIndex]):
    setTeamData(TeamsData[index]);
    setToggledIndex(-1);
  },[index, creatorTeamIndex])


  const hideHeadDetail={
    transition: 'all 0.5s ease-in-out',
    maxHeight: '120px',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #FFF 0%, #FFF 30%, rgba(255, 255, 255, 0.00) 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }
  const showHeadDetail={
    transition: 'all 0.5s ease-in-out',
    maxHeight: '500px',
    overflow: 'hidden',
  }

  function toggleClicked(i){
    if(toggledIndex===i){
      setToggledIndex(-1);
    }
    else{
      setToggledIndex(i);
    }
  }

  return(
    <div key={index} className="w-full flex flex-col justify-center items-center pb-20 fade-in">
      <h1 className="text-white text-[40px] text-center m-8">{teamData.TeamName}</h1>
      <h2 className="text-white text-[14px] pl-8 pr-8">
        {teamData.TeamDescription}
      </h2>

      {
        index===0 &&
        <CreatorTeamTab index={creatorTeamIndex} setIndex={setCreatorTeamIndex}/>
      }


      <div key={creatorTeamIndex} className="w-full flex flex-col justify-center items-center relative fade-in">
        <div className="w-[317px] h-[110px] relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="317" height="311" viewBox="0 0 317 311" fill="none" 
            className="absolute top-0 left-0"
            >
            <g filter="url(#filter0_f_116_2421)">
              <path d="M149.89 113.35H264.69C258.232 97.1925 248.364 83.3158 235.086 71.7198C221.807 60.1239 206.563 51.989 189.352 47.315L149.89 113.35ZM116.885 141.45L174.285 44.505C171.654 44.0367 169.023 43.6854 166.393 43.4512C163.762 43.2171 161.131 43.1 158.5 43.1C142.715 43.1 128.006 46.0271 114.374 51.8812C100.741 57.7354 88.6633 65.58 78.14 75.415L116.885 141.45ZM47.2875 183.6H125.495L68.095 86.655C60.4417 96.2558 54.4625 106.854 50.1575 118.45C45.8525 130.046 43.7 142.396 43.7 155.5C43.7 160.417 44.0014 165.157 44.6041 169.719C45.2068 174.28 46.1012 178.907 47.2875 183.6ZM127.648 263.685L166.393 197.65H52.31C58.7675 213.807 68.6355 227.684 81.9141 239.28C95.1926 250.876 110.437 259.011 127.648 263.685ZM158.5 267.9C174.285 267.9 188.994 264.973 202.626 259.119C216.259 253.265 228.337 245.42 238.86 235.585L200.115 169.55L142.715 266.495C145.346 266.963 147.914 267.315 150.421 267.549C152.927 267.783 155.62 267.9 158.5 267.9ZM248.905 224.345C256.558 214.744 262.537 204.146 266.842 192.55C271.147 180.954 273.3 168.604 273.3 155.5C273.3 150.582 272.999 145.843 272.396 141.281C271.793 136.72 270.899 132.093 269.712 127.4H191.505L248.905 224.345ZM158.5 296C138.888 296 120.353 292.31 102.894 284.929C85.4346 277.548 70.1853 267.478 57.146 254.721C44.1162 241.964 33.832 227.038 26.2935 209.944C18.7549 192.85 14.9905 174.702 15 155.5C15 136.064 18.7693 117.855 26.3078 100.874C33.8464 83.8918 44.1305 69.0269 57.1603 56.2789C70.1901 43.5121 85.4298 33.443 102.879 26.0714C120.329 18.6998 138.869 15.0094 158.5 15C178.351 15 196.948 18.6905 214.293 26.0714C231.637 33.4523 246.819 43.5215 259.84 56.2789C272.879 69.0363 283.163 83.9059 290.692 100.888C298.221 117.869 301.99 136.074 302 155.5C302 174.702 298.231 192.85 290.692 209.944C283.154 227.038 272.87 241.968 259.84 254.735C246.81 267.493 231.623 277.562 214.278 284.943C196.934 292.324 178.341 296.009 158.5 296Z" fill="white" fillOpacity="0.35"/>
            </g>
            <defs>
              <filter id="filter0_f_116_2421" x="0" y="0" width="317" height="311" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur_116_2421"/>
              </filter>
            </defs>
          </svg>
        </div>

        
        
        <MemberProfileImage fileName={teamData.TeamMembers[0].Image} scale={1.8}/>
        
        <h2 className="text-white text-xl mt-8">{teamData.TeamHead}</h2>
        <h1 className="text-white text-2xl m-2">{teamData.TeamMembers[0].Name}</h1>
        <div className="w-auto h-auto pr-2 pl-2 pt-1 pb-1 bg-[rgba(255,255,255,0.5)] text-[#6181F7] font-bold rounded-full text-center align-middle text-[12px]">
          {teamData.TeamMembers[0].Insta}
        </div>

        <h2 className="text-white text-[14px] pl-8 pr-8 mt-8 text-justify"
        style={headDetailOn? hideHeadDetail : showHeadDetail}>
          {teamData.TeamMembers[0].Words}
      </h2>
      {
        headDetailOn?
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none"
        onClick={()=>setHeadDetailOn(false)}>
        <path d="M19.1484 9.7002C19.1484 10.3239 19.3962 10.922 19.8372 11.363C20.2782 11.804 20.8763 12.0518 21.5 12.0518C22.1237 12.0518 22.7218 11.804 23.1628 11.363C23.6038 10.922 23.8516 10.3239 23.8516 9.7002C23.8516 9.07652 23.6038 8.47839 23.1628 8.03739C22.7218 7.59639 22.1237 7.34863 21.5 7.34863C20.8763 7.34863 20.2782 7.59639 19.8372 8.03739C19.3962 8.47839 19.1484 9.07652 19.1484 9.7002ZM19.1484 21.458C19.1484 22.0817 19.3962 22.6798 19.8372 23.1208C20.2782 23.5618 20.8763 23.8096 21.5 23.8096C22.1237 23.8096 22.7218 23.5618 23.1628 23.1208C23.6038 22.6798 23.8516 22.0817 23.8516 21.458C23.8516 20.8343 23.6038 20.2362 23.1628 19.7952C22.7218 19.3542 22.1237 19.1064 21.5 19.1064C20.8763 19.1064 20.2782 19.3542 19.8372 19.7952C19.3962 20.2362 19.1484 20.8343 19.1484 21.458ZM19.1484 33.2158C19.1484 33.8395 19.3962 34.4376 19.8372 34.8786C20.2782 35.3196 20.8763 35.5674 21.5 35.5674C22.1237 35.5674 22.7218 35.3196 23.1628 34.8786C23.6038 34.4376 23.8516 33.8395 23.8516 33.2158C23.8516 32.5921 23.6038 31.994 23.1628 31.553C22.7218 31.112 22.1237 30.8643 21.5 30.8643C20.8763 30.8643 20.2782 31.112 19.8372 31.553C19.3962 31.994 19.1484 32.5921 19.1484 33.2158Z" fill="white"/>
      </svg>
      :
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none"
      onClick={()=>setHeadDetailOn(true)}>
        <path d="M6.72069 0.740201C7.28086 -0.091437 8.50483 -0.0914382 9.065 0.7402L14.9766 9.51657C15.6089 10.4553 14.9362 11.7194 13.8044 11.7194H1.9813C0.849476 11.7194 0.176836 10.4553 0.809141 9.51657L6.72069 0.740201Z" fill="white"/>
      </svg>
      }

      <div className="w-full grid grid-cols-2 justify-between">
      {
        teamData.TeamMembers.length>1 && teamData.TeamMembers.map((member, i)=>{
          return(
            i!==0 &&
            <MemberProfileCell memberData={member} toggled={toggledIndex===i+1} onClick={()=>toggleClicked(i+1)}/>
          )
        })
      }

      </div>
      </div>
    </div>
  )
}