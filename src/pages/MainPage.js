import React, { useState, useRef, useEffect } from "react";
import {ScrollSection, ScrollContainer} from "components/ScrollSection";
import {ParallaxElement, ParallaxContainer}  from "components/ParallaxElement";
import { useSpring, animated } from 'react-spring'
import { easings } from "@react-spring/web";
import CenteredSection from "components/CenteredSection";

function clampScroll(scroll, sectionIndex) {
  let s=scroll-sectionIndex;
  return s < 0 ? -s : s > 1 ? 1 : s;
}

export default function MainPage(props) {

  const [scrollable, setScrollable] = useState(false);
  const [scrollTo, setScrollTo] = useState(0); 
  const scrollRef=useRef(null);

  function onStartButtonClick(){
    setScrollable(true);
    setScrollTo(1000);
  }

  function onEnterButtonClick(){
    
  }

  useEffect(()=>{
    const handleScroll=(e)=>{
      // get wheel amount, and update index with rotation.
      //change one index per one wheel
      //log scroll number
      e.preventDefault();
      console.log(scrollRef.current.scrollTop)
    }
    scrollRef.current.addEventListener('scroll', handleScroll);
    scrollRef.current.addEventListener('wheel', ()=>{console.log('wheel')});
    return ()=>scrollRef?.current?.removeEventListener('scroll', handleScroll);
  },[])

  const {scroll}=useSpring({
    scroll: scrollTo,
    from:{scroll:0},
    config : {easing: easings.steps(10)},
  
  })

  return (
    <animated.div ref={scrollRef} style={{ width: "100vw", height: '100vh', overflow: scrollable?'scroll':'hidden',
    transition: 'all 1s ease-in-out',
  }}
    scrollTop ={scroll}
    >
      <CenteredSection/>
    <div style={{ width: "100vw", height: '3500px', overflow: 'hidden'}}>
    <div  style={{ width: "100vw", height: '4000px', minHeight: '400vh',
    position: 'relative',
      background: 'linear-gradient(180deg, #000 0%, #000 13.54%, #000 25%, #000001 45.31%, #008BC2 53.12%, #00BDFF 61.99%, #71D7FF 70.83%, #70DDF4 75%, #02BEFF 85.43%, #5CE6F0 88.54%, #5CE6F0 100%)'
    }}>
      <img src={`${process.env.PUBLIC_URL}/images/etc/logo.png`} alt="용궁 배경" style={{
        position: 'absolute',
        width: '100vw',
        top: '200px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}/>
      
      <img src={`${process.env.PUBLIC_URL}/images/etc/castle_bg_black.png`} alt="용궁 배경" style={{
        position: 'absolute',
        width: '100vw',
        top: '260px',
      }}/>

      <div 
      onClick={onStartButtonClick}
      style={{
        position: 'absolute',
        borderRadius: '25px',
        background: '#FFF',
        boxShadow: '-2px -4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 0px 50px 0px rgba(0, 0, 0, 0.70)',
        top : '600px',
        width: '174px',
        height: '70px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        lineHeight: '50px',
        fontSize: '35px',
        fontFamily: 'neurimbo Gothic',
      }}>
        시작하기
      </div>

      <img src={`${process.env.PUBLIC_URL}/images/etc/office.png`} alt="office" style={{
        position: 'absolute',
        width: '100vw',
        top: '1050px',
      }}/>

      <div style={{
        color: '#FFF',
        position: 'absolute',
        top : '1350px',
        left: '50%',
        width: '100vw',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        lineHeight: '50px',
        fontSize: '40px',
        fontWeight: 400,
        fontFamily: 'neurimbo Gothic',
      }}>
        '프로젝트 용궁'
      </div>

      <div style={{
        color: '#FFF',
        position: 'absolute',
        top : '1500px',
        left: '50%',
        width: '100vw',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        lineHeight: '50px',
        fontSize: '20px',
        fontWeight: 400,
      }}>
        이 게임을 만든 사람들은 죽거나 실종된다. 
        <br/>
        가상현실 게임을 둘러싼 미스테리, 
      </div>


      <div style={{
        color: '#FFF',
        position: 'absolute',
        top : '2400px',
        width: '100vw',
        textAlign: 'center',
        lineHeight: '50px',
        fontSize: '23px',
        fontWeight: 700,
      }}>
        그리고
        <br/>
        사랑에 관한 이야기
      </div>

      <div style={{
        color: '#FFF',
        position: 'absolute',
        top : '2650px',
        width: '100vw',
        textAlign: 'center',
        lineHeight: '30px',
        fontSize: '24px',
        fontWeight: 700,
      }}>
        <span className="pr-14">"현실보다 더 달콤하고,</span>
        <br/>
        <span className="pl-14">현실보다 더 진짜 같지"</span>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="390" height="63" viewBox="0 0 390 63" fill="none" style={{
        position: 'absolute',
        top : '2550px',
      }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M390 1.99797L383.5 5.43985C377 8.88174 364 15.7655 351 15.7655C338 15.7655 325 8.88173 312 4.60904C299 0.336353 286 -1.32525 273 1.16715C260 3.77823 247 10.5433 234 13.1544C221 15.7655 208 13.9852 195 10.5433C182 7.22011 169 1.99793 156 1.99793C143 1.99793 130 7.2201 117 9.7125C104 12.3236 91 12.3236 78 15.7655C65 19.0887 52 25.9724 39 28.5835C26 31.0759 13 29.4143 6.5 28.5835L-1.34214e-06 27.634L-3.0598e-06 62.9999L6.5 62.9999C13 62.9999 26 62.9999 39 62.9999C52 62.9999 65 62.9999 78 62.9999C91 62.9999 104 62.9999 117 62.9999C130 62.9999 143 62.9999 156 62.9999C169 62.9999 182 62.9999 195 62.9999C208 62.9999 221 62.9999 234 62.9999C247 62.9999 260 62.9999 273 62.9999C286 62.9999 299 62.9999 312 62.9999C325 62.9999 338 62.9999 351 62.9999C364 62.9999 377 62.9999 383.5 62.9999L390 62.9999L390 1.99797Z" fill="url(#paint0_linear_335_643)" fillOpacity="0.31"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.70379e-08 1.99797L6.5 5.43985C13 8.88174 26 15.7655 39 15.7655C52 15.7655 65 8.88173 78 4.60904C91 0.336353 104 -1.32525 117 1.16715C130 3.77823 143 10.5433 156 13.1544C169 15.7655 182 13.9852 195 10.5433C208 7.22011 221 1.99793 234 1.99793C247 1.99793 260 7.2201 273 9.7125C286 12.3236 299 12.3236 312 15.7655C325 19.0887 338 25.9724 351 28.5835C364 31.0759 377 29.4143 383.5 28.5835L390 27.634L390 62.9999L383.5 62.9999C377 62.9999 364 62.9999 351 62.9999C338 62.9999 325 62.9999 312 62.9999C299 62.9999 286 62.9999 273 62.9999C260 62.9999 247 62.9999 234 62.9999C221 62.9999 208 62.9999 195 62.9999C182 62.9999 169 62.9999 156 62.9999C143 62.9999 130 62.9999 117 62.9999C104 62.9999 91 62.9999 78 62.9999C65 62.9999 52 62.9999 39 62.9999C26 62.9999 13 62.9999 6.5 62.9999L3.0598e-06 62.9999L9.70379e-08 1.99797Z" fill="url(#paint0_linear_335_643)" fillOpacity="0.31"/>
        <defs>
          <linearGradient id="paint0_linear_335_643" x1="195.5" y1="0.899967" x2="193.881" y2="62.9707" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="390" height="63" viewBox="0 0 390 63" fill="none" style={{
        position: 'absolute',
        top : '2870px',
      }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M390 1.99797L383.5 5.43985C377 8.88174 364 15.7655 351 15.7655C338 15.7655 325 8.88173 312 4.60904C299 0.336353 286 -1.32525 273 1.16715C260 3.77823 247 10.5433 234 13.1544C221 15.7655 208 13.9852 195 10.5433C182 7.22011 169 1.99793 156 1.99793C143 1.99793 130 7.2201 117 9.7125C104 12.3236 91 12.3236 78 15.7655C65 19.0887 52 25.9724 39 28.5835C26 31.0759 13 29.4143 6.5 28.5835L-1.34214e-06 27.634L-3.0598e-06 62.9999L6.5 62.9999C13 62.9999 26 62.9999 39 62.9999C52 62.9999 65 62.9999 78 62.9999C91 62.9999 104 62.9999 117 62.9999C130 62.9999 143 62.9999 156 62.9999C169 62.9999 182 62.9999 195 62.9999C208 62.9999 221 62.9999 234 62.9999C247 62.9999 260 62.9999 273 62.9999C286 62.9999 299 62.9999 312 62.9999C325 62.9999 338 62.9999 351 62.9999C364 62.9999 377 62.9999 383.5 62.9999L390 62.9999L390 1.99797Z" fill="url(#paint0_linear_335_643)" fillOpacity="0.31"/>
        {/* <path fillRule="evenodd" clipRule="evenodd" d="M9.70379e-08 1.99797L6.5 5.43985C13 8.88174 26 15.7655 39 15.7655C52 15.7655 65 8.88173 78 4.60904C91 0.336353 104 -1.32525 117 1.16715C130 3.77823 143 10.5433 156 13.1544C169 15.7655 182 13.9852 195 10.5433C208 7.22011 221 1.99793 234 1.99793C247 1.99793 260 7.2201 273 9.7125C286 12.3236 299 12.3236 312 15.7655C325 19.0887 338 25.9724 351 28.5835C364 31.0759 377 29.4143 383.5 28.5835L390 27.634L390 62.9999L383.5 62.9999C377 62.9999 364 62.9999 351 62.9999C338 62.9999 325 62.9999 312 62.9999C299 62.9999 286 62.9999 273 62.9999C260 62.9999 247 62.9999 234 62.9999C221 62.9999 208 62.9999 195 62.9999C182 62.9999 169 62.9999 156 62.9999C143 62.9999 130 62.9999 117 62.9999C104 62.9999 91 62.9999 78 62.9999C65 62.9999 52 62.9999 39 62.9999C26 62.9999 13 62.9999 6.5 62.9999L3.0598e-06 62.9999L9.70379e-08 1.99797Z" fill="url(#paint0_linear_335_643)" fillOpacity="0.31"/> */}
        <defs>
          <linearGradient id="paint0_linear_335_643" x1="195.5" y1="0.899967" x2="193.881" y2="62.9707" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="390" height="63" viewBox="0 0 390 63" fill="none" style={{
        position: 'absolute',
        top : '2970px',
      }}>
        {/* <path fillRule="evenodd" clipRule="evenodd" d="M390 1.99797L383.5 5.43985C377 8.88174 364 15.7655 351 15.7655C338 15.7655 325 8.88173 312 4.60904C299 0.336353 286 -1.32525 273 1.16715C260 3.77823 247 10.5433 234 13.1544C221 15.7655 208 13.9852 195 10.5433C182 7.22011 169 1.99793 156 1.99793C143 1.99793 130 7.2201 117 9.7125C104 12.3236 91 12.3236 78 15.7655C65 19.0887 52 25.9724 39 28.5835C26 31.0759 13 29.4143 6.5 28.5835L-1.34214e-06 27.634L-3.0598e-06 62.9999L6.5 62.9999C13 62.9999 26 62.9999 39 62.9999C52 62.9999 65 62.9999 78 62.9999C91 62.9999 104 62.9999 117 62.9999C130 62.9999 143 62.9999 156 62.9999C169 62.9999 182 62.9999 195 62.9999C208 62.9999 221 62.9999 234 62.9999C247 62.9999 260 62.9999 273 62.9999C286 62.9999 299 62.9999 312 62.9999C325 62.9999 338 62.9999 351 62.9999C364 62.9999 377 62.9999 383.5 62.9999L390 62.9999L390 1.99797Z" fill="url(#paint0_linear_335_643)" fillOpacity="0.31"/> */}
        <path fillRule="evenodd" clipRule="evenodd" d="M9.70379e-08 1.99797L6.5 5.43985C13 8.88174 26 15.7655 39 15.7655C52 15.7655 65 8.88173 78 4.60904C91 0.336353 104 -1.32525 117 1.16715C130 3.77823 143 10.5433 156 13.1544C169 15.7655 182 13.9852 195 10.5433C208 7.22011 221 1.99793 234 1.99793C247 1.99793 260 7.2201 273 9.7125C286 12.3236 299 12.3236 312 15.7655C325 19.0887 338 25.9724 351 28.5835C364 31.0759 377 29.4143 383.5 28.5835L390 27.634L390 62.9999L383.5 62.9999C377 62.9999 364 62.9999 351 62.9999C338 62.9999 325 62.9999 312 62.9999C299 62.9999 286 62.9999 273 62.9999C260 62.9999 247 62.9999 234 62.9999C221 62.9999 208 62.9999 195 62.9999C182 62.9999 169 62.9999 156 62.9999C143 62.9999 130 62.9999 117 62.9999C104 62.9999 91 62.9999 78 62.9999C65 62.9999 52 62.9999 39 62.9999C26 62.9999 13 62.9999 6.5 62.9999L3.0598e-06 62.9999L9.70379e-08 1.99797Z" fill="url(#paint0_linear_335_643)" fillOpacity="0.31"/>
        <defs>
          <linearGradient id="paint0_linear_335_643" x1="195.5" y1="0.899967" x2="193.881" y2="62.9707" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      
      <svg xmlns="http://www.w3.org/2000/svg" width="390" height="63" viewBox="0 0 390 63" fill="none" style={{
        position: 'absolute',
        top : '3200px',
      }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M390 1.99797L383.5 5.43985C377 8.88174 364 15.7655 351 15.7655C338 15.7655 325 8.88173 312 4.60904C299 0.336353 286 -1.32525 273 1.16715C260 3.77823 247 10.5433 234 13.1544C221 15.7655 208 13.9852 195 10.5433C182 7.22011 169 1.99793 156 1.99793C143 1.99793 130 7.2201 117 9.7125C104 12.3236 91 12.3236 78 15.7655C65 19.0887 52 25.9724 39 28.5835C26 31.0759 13 29.4143 6.5 28.5835L-1.34214e-06 27.634L-3.0598e-06 62.9999L6.5 62.9999C13 62.9999 26 62.9999 39 62.9999C52 62.9999 65 62.9999 78 62.9999C91 62.9999 104 62.9999 117 62.9999C130 62.9999 143 62.9999 156 62.9999C169 62.9999 182 62.9999 195 62.9999C208 62.9999 221 62.9999 234 62.9999C247 62.9999 260 62.9999 273 62.9999C286 62.9999 299 62.9999 312 62.9999C325 62.9999 338 62.9999 351 62.9999C364 62.9999 377 62.9999 383.5 62.9999L390 62.9999L390 1.99797Z" fill="url(#paint0_linear_335_643)" fillOpacity="0.31"/>
        {/* <path fillRule="evenodd" clipRule="evenodd" d="M9.70379e-08 1.99797L6.5 5.43985C13 8.88174 26 15.7655 39 15.7655C52 15.7655 65 8.88173 78 4.60904C91 0.336353 104 -1.32525 117 1.16715C130 3.77823 143 10.5433 156 13.1544C169 15.7655 182 13.9852 195 10.5433C208 7.22011 221 1.99793 234 1.99793C247 1.99793 260 7.2201 273 9.7125C286 12.3236 299 12.3236 312 15.7655C325 19.0887 338 25.9724 351 28.5835C364 31.0759 377 29.4143 383.5 28.5835L390 27.634L390 62.9999L383.5 62.9999C377 62.9999 364 62.9999 351 62.9999C338 62.9999 325 62.9999 312 62.9999C299 62.9999 286 62.9999 273 62.9999C260 62.9999 247 62.9999 234 62.9999C221 62.9999 208 62.9999 195 62.9999C182 62.9999 169 62.9999 156 62.9999C143 62.9999 130 62.9999 117 62.9999C104 62.9999 91 62.9999 78 62.9999C65 62.9999 52 62.9999 39 62.9999C26 62.9999 13 62.9999 6.5 62.9999L3.0598e-06 62.9999L9.70379e-08 1.99797Z" fill="url(#paint0_linear_335_643)" fillOpacity="0.31"/> */}
        <defs>
          <linearGradient id="paint0_linear_335_643" x1="195.5" y1="0.899967" x2="193.881" y2="62.9707" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>

      <div style={{
        color: '#FFF',
        position: 'absolute',
        top : '3100px',
        borderRadius: '25px',
        border: '1px solid #FFF',
        background: 'rgba(255, 255, 255, 0.35)',
        boxShadow: '0px 0px 40px 0px #00C8FF',
        width: '174px',
        height: '70px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        lineHeight: '70px',
        fontSize: '35px',
        fontWeight: 900,
      }}>
        입장하기
      </div>

      <img src={`${process.env.PUBLIC_URL}/images/etc/castle_bg.png`} alt="office" style={{
        position: 'absolute',
        width: '100vw',
        
        top: '3000px',
      }}/>
    </div>
    </div>
    </animated.div>
  );
}