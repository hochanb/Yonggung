import React, { useState, useRef, useEffect } from "react";
import { ScrollSection, ScrollContainer } from "components/ScrollSection";
import { ParallaxElement, ParallaxContainer } from "components/ParallaxElement";
import { useSpring, animated } from "react-spring";
import { easings } from "@react-spring/web";
import CenteredSection from "components/CenteredSection";
import { WaveCenter } from "components/Wave";
import 'css/custom.css'
import { Link } from "react-router-dom";
import Bubble from "components/Bubble";

function clampScroll(scroll, sectionIndex) {
  let s = scroll - sectionIndex;
  return s < 0 ? -s : s > 1 ? 1 : s;
}

const centeredHorizontal = {
  transform: "translateX(-50%)",
  left: "50%",
};



export function MainPage(props) {
  const [scrollable, setScrollable] = useState(false);
  const [scrollTo, setScrollTo] = useState(0);
  const scrollRef = useRef(null);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(true);

  const sectionTop=[
    0,
    1100,
    2200,
    2906
  ]

  function onStartButtonClick() {
    setScrollable(true);
    setIsMoving(true);
    setSectionIndex(1);
    setScrollTo(sectionTop[1]);
    console.log(scrollTo);
  }

  function onEnterButtonClick() {}


  const handleScroll = (e) => {
    e.preventDefault();
    const scr=scrollRef.current.scrollTop;

    console.log(scrollRef.current.scrollTop, scrollTo, isMoving)
    if(isMoving){
      if(scr <= scrollTo +3 && scr >= scrollTo -3){
        setIsMoving(false);
        console.log(isMoving);
      }
      console.log('moving');
      return;
    }
    else{

    const si=sectionIndex;
    const dY = sectionTop[si] - scr;
    if(dY<-3 && si <4 ){
      setSectionIndex(si+1);
      setIsMoving(true);
      setScrollTo(scr)
      setScrollTo(sectionTop[si+1]);
      console.log('down');
    }
    else if(dY>3 && si > 0){
      setSectionIndex(si-1);
      setIsMoving(true);
      setScrollTo(scr)
      setScrollTo(sectionTop[si-1]);
      console.log('up');
    }
    else{
      setScrollTo(scr)
    }
  }

    console.log(scr);
  };

  // useEffect(() => {
  //   scrollRef.current.addEventListener("scroll", handleScroll);
  //   return () =>
  //     scrollRef?.current?.removeEventListener("scroll", handleScroll);
  // }, );

  const { scroll } = useSpring({
    scroll: scrollTo,
    from: { scroll: 0 },
    config: { easing: easings.easeInOutCubic, duration: 2200 },
  });

  return (
    <animated.div
      ref={scrollRef}
      className={'fade-in-slow'}
      style={{
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
        overflowY: scrollable ? "scroll" : "hidden",
        position: "relative",
        transition: "all 1s ease-in-out",
        background:'black'
      }}
      scrollTop={scroll}
    >
      <div
        style={{
          width: "390px",
          height: "3750px",
          overflow: "hidden",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%,0)",
        }}
      >
        <div
          style={{
            width: "390px",
            height: "4000px",
            position: "relative",
            background:
              "linear-gradient(180deg, #000 0%, #000 13.54%, #000 25%, #000001 45.31%, #008BC2 53.12%, #00BDFF 61.99%, #71D7FF 70.83%, #70DDF4 75%, #02BEFF 85.43%, #5CE6F0 88.54%, #5CE6F0 100%)",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/etc/logo.png`}
            alt="용궁 배경"
            style={{
              position: "absolute",
              width: "100%",
              top: "200px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/images/etc/castle_bg_black.png`}
            alt="용궁 배경"
            style={{
              position: "absolute",
              width: "100%",
              top: "260px",
            }}
          />

          <img
            onClick={onStartButtonClick}
            className="floating flex flex-col justify-center items-center"
            src={`${process.env.PUBLIC_URL}/images/etc/startbutton.png`} alt="start"
            style={{
              position: "absolute",
              borderRadius: "25px",
              background: "#FFF",
              boxShadow:
                "-2px -4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 0px 50px 0px rgba(0, 0, 0, 0.70)",
              // filter:'drop-shadow(0px 0px 8px 8px rgb(0,0,0))',
              top: "600px",
              width: "174px",
              height: "70px",
              left: "50%",
              transform: "translateX(-50%)",
              // lineHeight: "70px",
              
            }}
            />
          {/* > */}
            {/* <span style={{
              textAlign: "center",
              fontSize: "35px",
              fontFamily: "neurimbo Gothic",
              lineHeight: "70px",
            }}>시작하기</span> */}
          {/* </div> */}


          <img
            src={`${process.env.PUBLIC_URL}/images/etc/office.png`}
            alt="office"
            style={{
              position: "absolute",
              width: "100%",
              top: "1050px",
            }}
          />

          <div
            style={{
              color: "#FFF",
              position: "absolute",
              top: "1350px",
              left: "50%",
              width: "100%",
              transform: "translateX(-50%)",
              textAlign: "center",
              lineHeight: "50px",
              fontSize: "40px",
              fontWeight: 400,
              fontFamily: "neurimbo Gothic",
            }}
          >
            '프로젝트 용궁'
          </div>

          <div
            style={{
              color: "#FFF",
              position: "absolute",
              top: "1500px",
              left: "50%",
              width: "100%",
              transform: "translateX(-50%)",
              textAlign: "center",
              lineHeight: "50px",
              fontSize: "20px",
              fontWeight: 400,
            }}
          >
            이 게임을 만든 사람들은 죽거나 실종된다.
            <br />
            가상현실 게임을 둘러싼 미스테리,
          </div>

          <div
            style={{
              color: "#FFF",
              position: "absolute",
              top: "2400px",
              width: "100%",
              textAlign: "center",
              lineHeight: "50px",
              fontSize: "23px",
              fontWeight: 700,
            }}
          >
            그리고
            <br />
            사랑에 관한 이야기
          </div>

          <div
            style={{
              color: "#FFF",
              position: "absolute",
              top: "2650px",
              width: "100%",
              textAlign: "center",
              lineHeight: "30px",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            <span className="pr-14">"현실보다 더 달콤하고,</span>
            <br />
            <span className="pl-14">현실보다 더 진짜 같지"</span>
          </div>

          <WaveCenter
            style={{
              position: "absolute",
              top: "2250px",
            }}
          />
          <WaveCenter
            flip={true}
            style={{
              position: "absolute",
              top: "2250px",
            }}
          />

          <WaveCenter
            style={{
              position: "absolute",
              top: "2870px",
            }}
          />

          <WaveCenter
            flip={true}
            style={{
              position: "absolute",
              top: "2970px",
            }}
          />

          <WaveCenter
            style={{
              position: "absolute",
              top: "3300px",
            }}
          />

          <Link
            to='/map'
            className="floating"
            style={{
              color: "#FFF",
              position: "absolute",
              top: "3200px",
              borderRadius: "25px",
              border: "1px solid #FFF",
              background: "rgba(255, 255, 255, 0.35)",
              boxShadow: "0px 0px 40px 0px #00C8FF",
              width: "174px",
              height: "70px",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              lineHeight: "70px",
              fontSize: "35px",
              fontWeight: 900,
              zIndex: 20,
            }}
          >
            입장하기
          </Link>

          <img
            src={`${process.env.PUBLIC_URL}/images/etc/castle_bg.png`}
            alt="office"
            style={{
              position: "absolute",
              width: "100%",

              top: "3000px",
            }}
          />

          <Bubble left={247} top={1988}  scale={0.2}/>
          <Bubble left={294} top={2101}  scale={0.3}/>
          <Bubble left={165} top={2238}  scale={0.4}/>
          <Bubble left={25} top={2324}  scale={0.3}/>
          <Bubble left={25} top={2711}  scale={0.4}/>
          <Bubble left={351} top={2741}  scale={0.3}/>
          <Bubble left={150} top={2811}  scale={1}/>

        </div>
      </div>
    </animated.div>
  );
}
