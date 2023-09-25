import React, { useState, useRef, useEffect } from "react";
import { ScrollSection, ScrollContainer } from "components/ScrollSection";
import { ParallaxElement, ParallaxContainer } from "components/ParallaxElement";
import { useSpring, animated } from "react-spring";
import { easings } from "@react-spring/web";
import CenteredSection from "components/CenteredSection";
import { WaveCenter } from "components/Wave";

function clampScroll(scroll, sectionIndex) {
  let s = scroll - sectionIndex;
  return s < 0 ? -s : s > 1 ? 1 : s;
}

const centeredHorizontal = {
  transform: "translateX(-50%)",
  left: "50%",
};

export function MainPage2(props) {
  const [scrollable, setScrollable] = useState(false);
  const [scrollTo, setScrollTo] = useState(0);
  const scrollRef = useRef(null);

  function onStartButtonClick() {
    setScrollable(true);
    setScrollTo(1000);
  }

  return (
    <div className="w-full h-[100vh] bg-yellow-100 relative overflow-scroll">
      <CenteredSection>
        <img
          src={`${process.env.PUBLIC_URL}/images/etc/logo.png`}
          alt="용궁 배경"
          style={{
            ...centeredHorizontal,
            position: "absolute",
            width: "100%",
            top: "200px",
          }}
        />

        <img
          src={`${process.env.PUBLIC_URL}/images/etc/castle_bg_black.png`}
          alt="용궁 배경"
          style={{
            ...centeredHorizontal,
            position: "absolute",
            width: "100%",
            top: "260px",
          }}
        />

        <div
          onClick={onStartButtonClick}
          style={{
            position: "absolute",
            borderRadius: "25px",
            background: "#FFF",
            boxShadow:
              "-2px -4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 0px 50px 0px rgba(0, 0, 0, 0.70)",
            top: "600px",
            width: "174px",
            height: "70px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            lineHeight: "50px",
            fontSize: "35px",
            fontFamily: "neurimbo Gothic",
          }}
        >
          시작하기
        </div>
      </CenteredSection>
      <CenteredSection>2</CenteredSection>
      <CenteredSection>3</CenteredSection>
      <CenteredSection>4</CenteredSection>
    </div>
  );
}

export function MainPage(props) {
  const [scrollable, setScrollable] = useState(false);
  const [scrollTo, setScrollTo] = useState(0);
  const scrollRef = useRef(null);

  function onStartButtonClick() {
    setScrollable(true);
    setScrollTo(1000);
  }

  function onEnterButtonClick() {}

  useEffect(() => {
    const handleScroll = (e) => {
      // get wheel amount, and update index with rotation.
      //change one index per one wheel
      //log scroll number
      e.preventDefault();
      console.log(scrollRef.current.scrollTop);
    };
    scrollRef.current.addEventListener("scroll", handleScroll);
    scrollRef.current.addEventListener("wheel", () => {
      console.log("wheel");
    });
    return () =>
      scrollRef?.current?.removeEventListener("scroll", handleScroll);
  }, []);

  const { scroll } = useSpring({
    scroll: scrollTo,
    from: { scroll: 0 },
    config: { easing: easings.easeInOutCubic, duration: 1500 },
  });

  return (
    <animated.div
      ref={scrollRef}
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

          <div
            onClick={onStartButtonClick}
            style={{
              position: "absolute",
              borderRadius: "25px",
              background: "#FFF",
              boxShadow:
                "-2px -4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 0px 50px 0px rgba(0, 0, 0, 0.70)",
              top: "600px",
              width: "174px",
              height: "70px",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              lineHeight: "50px",
              fontSize: "35px",
              fontFamily: "neurimbo Gothic",
            }}
          >
            시작하기
          </div>

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

          <div
            style={{
              color: "#FFF",
              position: "absolute",
              top: "3100px",
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
            }}
          >
            입장하기
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/images/etc/castle_bg.png`}
            alt="office"
            style={{
              position: "absolute",
              width: "100%",

              top: "3000px",
            }}
          />
        </div>
      </div>
    </animated.div>
  );
}
