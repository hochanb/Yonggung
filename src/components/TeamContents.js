import { CashbagIconPath, HexagonPath, MusicIconPath, SegmentedCirclePath, SpannerIconPath, StarIconPath, TriangleIconPath, WandIconPath } from "svgpaths"
import { useState } from "react"
import 'css/custom.css'
import {TeamsData} from 'MemberInfo'
import { useEffect } from "react"

const tabIconSize=50;

const TeamButton=({selected, onClick, iconPath, offsetY=0})=>{
  return(
    <div style={{
      width: `${tabIconSize}px`,
      height: `${tabIconSize}px`,
      transform: `translateY(${offsetY}px)`,
      transitionProperty: 'transform',
      transitionDuration: '0.1s',
    }}
    onClick={onClick}
    >
    <div className='w-full h-full absolute' > 
      <svg xmlns="http://www.w3.org/2000/svg" width={tabIconSize} viewBox="0 0 90 90" fill="none" className='absolute top-0'
      >
        <HexagonPath color={selected?'#F5EEB9':'rgba(255,255,255,0.33)'} strokeWidth={2} s={0.95} x={-7} y={-3}/>
      </svg>
      < svg xmlns="http://www.w3.org/2000/svg" width={tabIconSize} viewBox="0 0 90 90" fill="none" className='absolute top-0'
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
    <div className="w-full h-[48px] relative flex justify-evenly pl-4 pr-4">
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="40" viewBox="0 0 14 22" fill="none">
          <path d="M13.2123 20.661C14.1449 19.8795 14.1457 18.4453 13.2139 17.6628L6.93418 12.3887C5.98253 11.5894 5.98253 10.1249 6.93418 9.32563L13.2139 4.05148C14.1457 3.26895 14.1449 1.83483 13.2123 1.05329C12.4852 0.44394 11.4257 0.44394 10.6986 1.05329L0.82915 9.32425C-0.124693 10.1236 -0.124694 11.5907 0.829149 12.39L10.6986 20.661C11.4257 21.2703 12.4852 21.2703 13.2123 20.661Z" fill="white"/>
      </svg>   */}
      <TeamButton iconPath={
        //창작진
        <StarIconPath color={'white'} strokeWidth={1} s={1.2} x={21} y={20} />}
        selected={index===0}
        onClick={()=>setIndex(0)}
        offsetY={-4}
      />
      <TeamButton iconPath={
        //연출
        <SegmentedCirclePath color={'white'} strokeWidth={1} s={1.2} x={16} y={16} />}
        selected={index===1}
        onClick={()=>setIndex(1)}
        offsetY={0}
      />
      <TeamButton iconPath={
        //음악
        <MusicIconPath color={'white'} strokeWidth={1} s={1.2} x={20} y={22} />}
        selected={index===2}
        onClick={()=>setIndex(2)}
        offsetY={-6}
      />
      <TeamButton iconPath={
        //경영지원
        <CashbagIconPath color={'white'} strokeWidth={1} s={1.2} x={19} y={18} />}
        selected={index===3}
        onClick={()=>setIndex(3)}
        offsetY={-2}
      />
      <TeamButton iconPath={
        //디자인
        <WandIconPath color={'white'} strokeWidth={1} s={1.2} x={22} y={19} />}
        selected={index===4}
        onClick={()=>setIndex(4)}
        offsetY={-2}
      />
      <TeamButton iconPath={
        //홍보
        <TriangleIconPath color={'white'} strokeWidth={1} s={1.2} x={21} y={19} />}
        selected={index===5}
        onClick={()=>setIndex(5)}
        offsetY={-6}
      />
      <TeamButton iconPath={
        //무대
        <SpannerIconPath color={'white'} strokeWidth={1} s={1.2} x={23} y={24}/>}
        selected={index===6}
        onClick={()=>setIndex(6)}
        offsetY={-10}
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
        <img className="w-full h-full rounded-full border-white border-[2px] bg-white" alt="x"
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

      <div className="w-auto h-auto mt-2 pr-2 pl-2 pt-1 pb-1 bg-[rgba(255,255,255,0.5)] text-[#6181F7] font-bold rounded-full text-center align-middle text-[10px]">
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
      <h2 className="text-white text-[14px] pl-8 pr-8 pb-12 font-light">
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
  const bgIcon=(i)=>{
    switch(i){
      case 0:
        return <StarIconPath color={'white'} strokeWidth={1} s={6} x={40} y={30} />
      case 1:
        return <SegmentedCirclePath s={6.5}/>
      case 2:
        return <MusicIconPath color={'white'} strokeWidth={1} s={6} x={23} y={50} />
      case 3:
        return <CashbagIconPath color={'white'} strokeWidth={1} s={6} x={23} y={0} />
      case 4:
        return <WandIconPath color={'white'} strokeWidth={1} s={6} x={25} y={0} />
      case 5:
        return <TriangleIconPath color={'white'} strokeWidth={1} s={6} x={38} y={18} />
      case 6:
        return <SpannerIconPath color={'white'} strokeWidth={1} s={6.5} x={25} y={50} />
      default:
        return null;
    }
  }

  return(
    <div key={index} className="w-full flex flex-col justify-center items-center pb-20 fade-in">
      <h1 className="text-white text-[40px] text-center mt-[74px] mb-[36px]">{teamData.TeamName}</h1>
      <h2 className="text-white text-[16px] pl-8 pr-8 font-light">
        {teamData.TeamDescription}
      </h2>

      {
        index===0 &&
        <CreatorTeamTab index={creatorTeamIndex} setIndex={setCreatorTeamIndex}/>
      }

      <svg xmlns="http://www.w3.org/2000/svg" width="390" height="37" viewBox="0 0 390 37" fill="none" className="mt-[33px] mb-0">
        <path fill-rule="evenodd" clipRule="evenodd" d="M390 1.17341L383.5 3.19485C377 5.21628 364 9.25914 351 9.25914C338 9.25914 325 5.21627 312 2.7069C299 0.197538 286 -0.778327 273 0.685467C260 2.21897 247 6.19212 234 7.72562C221 9.25912 208 8.21355 195 6.19212C182 4.24039 169 1.17339 156 1.17338C143 1.17338 130 4.24038 117 5.70418C104 7.23768 91 7.23767 78 9.2591C65 11.2108 52 15.2537 39 16.7872C26 18.251 13 17.2751 6.5 16.7872L-9.86871e-07 16.2295L-2.24986e-06 37L6.5 37C13 37 26 37 39 37C52 37 65 37 78 37C91 37 104 37 117 37C130 37 143 37 156 37.0001C169 37.0001 182 37.0001 195 37.0001C208 37.0001 221 37.0001 234 37.0001C247 37.0001 260 37.0001 273 37.0001C286 37.0001 299 37.0001 312 37.0001C325 37.0001 338 37.0001 351 37.0001C364 37.0001 377 37.0001 383.5 37.0001L390 37.0001L390 1.17341Z" fill="url(#paint0_linear_339_668)" fill-opacity="0.31"/>
        <defs>
          <linearGradient id="paint0_linear_339_668" x1="195.5" y1="0.528547" x2="194.941" y2="36.9992" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>

      <div key={creatorTeamIndex} className="w-full flex flex-col justify-center items-center relative fade-in">
        <div className="w-[317px] h-[110px] relative blur-[7.5px] opacity-40">
          <svg xmlns="http://www.w3.org/2000/svg" width="317" height="311" viewBox="0 0 317 311" fill="none" 
            className="absolute top-0 left-0"
            >
              {bgIcon(index)}
          </svg>
        </div>

        
        
        <MemberProfileImage fileName={teamData.TeamMembers[0].Image} scale={2.4}/>
        
        <h2 className="text-white text-xl mt-8">{teamData.TeamHead}</h2>
        <h1 className="text-white text-2xl m-2">{teamData.TeamMembers[0].Name}</h1>
        <div className="w-auto h-auto pr-2 pl-2 pt-1 pb-1 bg-[rgba(255,255,255,0.5)] text-[#6181F7] font-bold rounded-full text-center align-middle text-[14px] font-normal">
          {teamData.TeamMembers[0].Insta}
        </div>

        <h2 className="text-white text-[15px] font-light pl-8 pr-8 mt-8 text-justify"
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