import { useState } from "react";
import { CastHeader } from "./CastPage";
import { ActorData } from "MemberInfo";
import { Link } from "react-router-dom";

function QnA({className, qna, textLeft=false}){
  return(
    <div className={className+" w-full flex justify-center mt-12"}>
      <div className="w-[300px] text-white font-light" style={{
        lineHeight: '20px',
        fontSize: '16px',
      }}>
        <div className="text-[20px] font-bold mb-4">Q</div>
        <div className="text-[20px] mb-4" style={{fontFamily:'iceJaram'}}>{qna.Q}</div>
        <div className="text-[20px] font-bold mt-12 mb-4">A</div>
        <div className={`text-[16px] mb-4 font-light whitespace-pre-wrap ${textLeft?'text-justify':'text-center'}`
        } style={{lineHeight: '24px'}}
        >{qna.A}</div>
      </div>
    </div>
  )
}


export default function ActorPage({index}){
  const [actor]=useState(ActorData[index]);

  return(
    <div 
    style={{
      width: '100vw',
      minHeight:'100vh',
      paddingBottom: '150px',
      background: 'var(--unnamed, linear-gradient(135deg, #4DEDED 0%, #A9C1FF 72.40%, #8B91FF 100%))',
    }}>
      <CastHeader/>

    <div className="w-full p-10 relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" fill="none"
        className="absolute top-14 left-9"
        onClick={()=>window.history.back()}
      >
        <path d="M13.2123 20.661C14.1449 19.8795 14.1457 18.4453 13.2139 17.6628L6.93418 12.3887C5.98253 11.5894 5.98253 10.1249 6.93418 9.32563L13.2139 4.05148C14.1457 3.26895 14.1449 1.83483 13.2123 1.05329C12.4852 0.44394 11.4257 0.44394 10.6986 1.05329L0.82915 9.32425C-0.124693 10.1236 -0.124694 11.5907 0.829149 12.39L10.6986 20.661C11.4257 21.2703 12.4852 21.2703 13.2123 20.661Z" fill="white"/>
      </svg>
      <span className="text-white font-bold text-center" style={{
        fontSize: '41px',
      }}>{actor.Name}</span>
      <span className="text-white text-[41px]"> | </span>
      <span className="text-white font-normal text-center text-[24px]" >{actor.Role}</span>
      
    </div>
    <div className="w-full flex items-center justify-center relative">
      
    <div className="absolute w-[300px] h-[485px]" style={{
          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25) inset',
          zIndex: 1,
          border: '7px solid rgba(255, 255, 255, 0.7)',
        }}/>
      <div alt="actor" style={{
        width:300-14,
        height:485-14,
        // marginTop: '7px',
        // border: '7px solid rgba(255, 255, 255, 0.7)',
        // boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25) inset',
        boxSizing: 'content-box',
        background:`url(${process.env.PUBLIC_URL}/images/members/${actor.Image}) no-repeat top center / cover `,
        backgroundSize: 'auto 400px',
        position: 'relative',
      }}>
        <div className="w-full h-[400px] flex justify-center items-center" style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 63.76%, rgba(255, 255, 255, 0.72) 84.93%, rgba(255,255,255,1) 95% , #FFF 100%)'
        }}/>
        <div className="absolute bottom-0 w-full h-[85px] flex justify-center items-center bg-white whitespace-pre-wrap"
        style={{
          fontFamily: 'iceJaram',
          fontSize: '25px',
          fontWeight: 600,
          lineHeight: '20px',
        }}>
          {`${actor.Words}`}
        </div>
      </div>  
    </div>
    <div className="w-full flex justify-center items-center mt-12">
      <div className="w-[300px] text-white font-light" style={{
        lineHeight: '20px',
        fontSize: '16px',
        marginBottom:'136px',
      }}>
        {actor.Description}
      </div>
    </div>
    
    <div className="text-[41px] text-white mb-4">INTERVIEW</div>
    <QnA qna={actor.Questions[0]} textLeft={true}/>
    {actor.Insta && <div className="w-full flex justify-end pl-8 pr-8">
        <Link className="w-auto h-auto mt-2 pr-2 pl-2 pt-1 pb-1 bg-[rgba(255,255,255,0.5)] text-[#6181F7] font-light rounded-full text-center align-middle text-[14px]"
            to={`https://www.instagram.com/${actor.Insta}`}
            target="_blank"
          >
              {'@' + actor.Insta}
      </Link>
    </div>}
    <div className="text-[24px] mb-4 text-white mt-12 underline"  style={{fontFamily:'iceJaram'}}>"지금부터는 극 속 인물의 입장에서 답해주세요!"</div>
      {actor.Questions.slice(1).map((qna, index)=><QnA key={index} qna={qna}/>)}
    </div>
  )
}