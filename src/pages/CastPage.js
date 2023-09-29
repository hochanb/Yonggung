import { ActorData, DancerData } from "MemberInfo"
import { Link } from "react-router-dom"
import { useState } from "react"
import Bubble from "components/Bubble"

function ProfileCell({style, name="배우명", role="배역명", src='images/members/조유리.jpg', index=1, useDetail=true, toggled=false, onClick}){
    
  const content = (
  
    <div style={{
      ...style,
      width:150,
      height:200,
      border: '3px solid #f0f0f0',
      boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25) inset',
      position: 'relative',
      zIndex: 10,
      background:`url(${process.env.PUBLIC_URL}/images/members/${src}) no-repeat center center / cover`,
    }}
    onClick={!useDetail?onClick:()=>{}}
    >
    <div className="w-[144px] h-[32px] absolute bottom-0 bg-[#00D3EE]">
      <span className="text-white font-bold text-center" style={{
        lineHeight: '32px',
        fontSize: '20px',
      }}>{name}</span> 
      <span className="text-white">{(!useDetail?(toggled?' ▲':' ▼'):'')}</span>
      { useDetail && <span className="text-white font-[20px]"> | </span> }
      {useDetail && <span className="text-white font-normal text-center text-[12px]" >{role}</span>
      }
    </div>

    {useDetail&&
    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="39" viewBox="0 0 37 39" fill="none" style={{
      position: 'absolute',
      right: 0,
      bottom: 30,
      filter: 'drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.25))',
    }}>
      <g>
        <path d="M23.8958 22.6854H22.6779L22.2463 22.2479C23.8093 20.3424 24.6684 17.9097 24.6667 15.3937C24.6667 13.3106 24.079 11.2743 22.9779 9.54224C21.8768 7.8102 20.3117 6.46023 18.4806 5.66306C16.6496 4.86589 14.6347 4.65732 12.6909 5.06371C10.747 5.4701 8.96148 6.47322 7.56004 7.9462C6.1586 9.41918 5.20421 11.2959 4.81755 13.339C4.4309 15.382 4.62934 17.4998 5.3878 19.4243C6.14625 21.3488 7.43064 22.9938 9.07856 24.1511C10.7265 25.3084 12.6639 25.9261 14.6458 25.9261C17.1279 25.9261 19.4096 24.9701 21.1671 23.3821L21.5833 23.8358V25.1159L29.2917 33.2016L31.5888 30.7872L23.8958 22.6854ZM14.6458 22.6854C10.8071 22.6854 7.70834 19.4284 7.70834 15.3937C7.70834 11.359 10.8071 8.10207 14.6458 8.10207C18.4846 8.10207 21.5833 11.359 21.5833 15.3937C21.5833 19.4284 18.4846 22.6854 14.6458 22.6854Z" fill="white"/>
      </g>
    </svg>
    }
    </div>
  )

  return (
    useDetail?
    <Link to={`/cast/${index}`}>
      {content}
    </Link>
    :
    content
  )
}

export const CastHeader = () => {

  const onMapClick=()=>{

  }
  
  const onMenuClick=()=>{

  }

  return (
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="390" height="64" viewBox="0 0 390 64" fill="none" className="w-full" preserveAspectRatio="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.70379e-08 61.9703L6.5 58.4738C13 54.9773 26 47.9842 39 47.9842C52 47.9842 65 54.9773 78 59.3178C91 63.6583 104 65.3463 117 62.8143C130 60.1618 143 53.2893 156 50.6368C169 47.9843 182 49.7928 195 53.2893C208 56.6653 221 61.9704 234 61.9704C247 61.9704 249.5 59.532 262.5 57.0001C275.5 54.3475 296 58.8077 314 54.1333C327 50.7574 332.5 48.6526 345.5 46.0001C358.5 43.4681 377 47.1333 390 54.1333L390 0.000127195L383.5 0.000126156C377 0.000125116 364 0.000123038 351 0.00012096C338 0.000118882 325 0.000116804 312 0.000114726C299 0.000112648 286 0.000110569 273 0.000108491C260 0.000106413 247 0.000104335 234 0.000102257C221 0.000100179 208 9.81004e-05 195 9.60223e-05C182 9.39441e-05 169 9.18659e-05 156 8.97878e-05C143 8.77096e-05 130 8.56315e-05 117 8.35533e-05C104 8.14751e-05 91 7.9397e-05 78 7.73188e-05C65 7.52407e-05 52 7.31625e-05 39 7.10843e-05C26 6.90062e-05 13 6.6928e-05 6.5 6.58889e-05L3.0598e-06 6.48499e-05L9.70379e-08 61.9703Z" fill="white" fillOpacity="0.31"/>
  </svg>

  <div className="relative w-full flex justify-between pl-5 pr-5 items-top z-20" style={{
  fontFamily: 'SUITE Variable'
}}>
  <Link to={'/map'}>
    <svg onClick={onMapClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">    
      <path d="M11.5 0C6.80071 0 3 3.756 3 8.4C3 14.7 11.5 24 11.5 24C11.5 24 20 14.7 20 8.4C20 3.756 16.1993 0 11.5 0ZM11.5 11.4C9.82429 11.4 8.46429 10.056 8.46429 8.4C8.46429 6.744 9.82429 5.4 11.5 5.4C13.1757 5.4 14.5357 6.744 14.5357 8.4C14.5357 10.056 13.1757 11.4 11.5 11.4Z" fill="#fff"/>
    </svg>
  </Link>
    <svg onClick={onMenuClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
      <path d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5Z" fill="#fff"/>
      <path d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z" fill="#fff"/>
      <path d="M12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17Z" fill="#fff"/>
    </svg>
  </div>
  </div>
  )
}

function DancerToggle({memberData, toggled=false}){
  return(
    <div style={{
      maxHeight: toggled?'500px':'0px',
      transition: 'all 0.5s ease-in-out',
    }}>
    {memberData?.Insta && <Link className="w-auto h-auto mt-2 mb-8 pr-2 pl-2 pt-1 pb-1 bg-[rgba(255,255,255,0.5)] text-[#6181F7] font-bold rounded-full text-center align-middle text-[10px]"
      to={`https://www.instagram.com/${memberData?.Insta}`}
      target="_blank"
    >
        {'@' + memberData?.Insta}
    </Link>}
    
    <h2 className="text-white text-[14px] mt-4 pl-8 pr-8 pb-12 font-light whitespace-pre-wrap">
      {memberData?.Words}
    </h2>
    </div>
    )
}

export default function CastPage(){

  const [dancerToggleIndex, setDancerToggleIndex] = useState(-1);

  function toggle(index){
    if(dancerToggleIndex===index)
      setDancerToggleIndex(-1);
    else
      setDancerToggleIndex(index);
  }

  return (
    <div 
    style={{
      width: '100vw',
      minHeight:'100vh',
      paddingBottom: '150px',
      background: 'var(--unnamed, linear-gradient(135deg, #4DEDED 0%, #A9C1FF 72.40%, #8B91FF 100%))',
      position: 'relative',
    }}>

      <CastHeader/>

      <div className="w-full text-center text-white text-[18px] font-bold mt-8" style={{
        letterSpacing: '3.6px',
        textShadow: '0px 0px 4px #4EC3CB',
      }}>
        MUSICAL
      </div>

      <div style={{
        color: '#fff',
        textAlign: 'center',
        textShadow: '0px 0px 10px #4EC3CB',
        fontFamily: 'neurimbo Gothic',
        fontSize: '42px',
        lineHeight: '40px',
      }}>
        프로젝트 용궁
      </div>
      <div style={{
        color: '#fff',
        textAlign: 'center',
        textShadow: '0px 0px 10px #4EC3CB',
        fontFamily: 'neurimbo Gothic',
        fontSize: '34px',
        fontWeight: 400,
        lineHeight: '30px',
      }}>
        :낙원의 미스테리
      </div>

      <div style={{
        marginTop: '48px',
        color: 'white',
        textAlign: 'center',
        textShadow: '0px 0px 10px #FFF, 0px 0px 4px rgba(0, 166, 198, 0.80), 0px 0px 5px rgba(0, 167, 199, 0.60)',
        fontSize: '60px',
        fontWeight: 900,
        lineHeight: '32px',
      }}>
        CAST
      </div>

      <div className="w-full flex justify-center mt-10">
        <div className="w-[316px] grid grid-cols-2 items-center justify-center gap-x-4 gap-y-6" >
          {ActorData.map((data, index)=>{
            return <ProfileCell key={index} name={data.Name} role={data.Role} src={data.Image} index={index} useDetail={true}/>
          })
          }
        </div>      
      </div>

      <div className="text-white text-[36px] font-light mt-14">
        안무팀
      </div>

      <div className="w-full flex flex-col justify-center mt-10 gap-y-6">
      <div className="w-full flex items-center justify-center gap-4" >
        <ProfileCell name={DancerData[0].Name} src={DancerData[0].Image} index={0} useDetail={false} toggled={dancerToggleIndex===0} onClick={()=>toggle(0)}/>
        <ProfileCell name={DancerData[1].Name} src={DancerData[1].Image} index={1} useDetail={false} toggled={dancerToggleIndex===1} onClick={()=>toggle(1)}/>
      </div>      
      <div className="w-full flex items-center justify-center gap-4" >
        <ProfileCell name={DancerData[2].Name} src={DancerData[2].Image} index={2} useDetail={false} toggled={dancerToggleIndex===2} onClick={()=>toggle(2)}/>
      </div>
      <DancerToggle memberData={dancerToggleIndex!==-1 ? DancerData[dancerToggleIndex]:null} toggled={dancerToggleIndex===2}/>
      </div>

      <Bubble left={94} top={94}  scale={0.2}/>
      <Bubble left={321} top={115}  scale={0.3}/>
      <Bubble left={365} top={145}  scale={0.4}/>
      <Bubble left={-5} top={180}  scale={0.8}/>
      <Bubble left={20} top={693}  scale={0.8}/>
      <Bubble left={350} top={940}  scale={0.8}/>
      <Bubble left={16} top={1026}  scale={0.8}/>

      <Bubble left={13} bottom={40}  scale={1}/>
      <Bubble left={218} bottom={100}  scale={0.6}/>
      <Bubble left={380} bottom={130}  scale={1.2}/>

    </div>
  )
}