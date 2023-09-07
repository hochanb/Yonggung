import React, { useState, useRef, useEffect } from "react";
import {ScrollSection, ScrollContainer} from "components/ScrollSection";
import {ParallaxElement, ParallaxContainer}  from "components/ParallaxElement";


function clampScroll(scroll, sectionIndex) {
  let s=scroll-sectionIndex;
  return s < 0 ? -s : s > 1 ? 1 : s;
}

export default function MainPage(props) {
  const [scroll, setScroll] = useState(0);    // scroll in normalized value
  const [scrollPx, setScrollPx] = useState(0);  // scroll in px
  const [scrollAble, setScrollAble] = useState(false);  // scroll in px
  const scrollRef = useRef(null);
  const sectionHeight = window.innerHeight;
  function onScroll(e) {
    // console.log(e.target.scrollTop);
    setScroll(e.target.scrollTop/sectionHeight);
    setScrollPx(e.target.scrollTop);
  }
  function onStartButtonPressed(){
    console.log('start button pressed');
    setScrollAble(true);
    scrollRef.current.scrollTo({top: sectionHeight, behavior: 'smooth'})
  }
  function onEnterButtonPressed(){
    console.log('enter button pressed');
    alert('enter');
  }

  return (
    <div style={{ width: "100vw", height: "100vh", 
    background: 'linear-gradient(180deg, #000 0%, #000 13.54%, #000 25%, #000001 45.31%, #008BC2 53.12%, #00BDFF 61.99%, #71D7FF 70.83%, #70DDF4 75%, #02BEFF 85.43%, #5CE6F0 88.54%, #5CE6F0 100%)'
    }}>
      <ScrollContainer onScroll={onScroll} scrollRef={scrollRef} scrollAble={scrollAble}>
        <ScrollSection style={{  }}>

        <ParallaxContainer>
          <ParallaxElement
            scrollAmount={scrollPx*clampScroll(scroll, 0)}
            pWeightX={-0.1}
            pWeightY={0}
            originPosX={'20vw'}
            originPosY={'80vh'}
          >
            <h1 className="color-black">장식장식</h1>
          </ParallaxElement>
          <ParallaxElement
            scrollAmount={scrollPx*clampScroll(scroll, 0)}
            pWeightX={0.1}
            pWeightY={0}
            originPosX={'60vw'}
            originPosY={'80vh'}
          >
            <h1 className="color-black">장식장식</h1>
          </ParallaxElement>
          </ParallaxContainer>

          <h1>Section 0</h1>
          <h1 className="mt-[16rem] text-[2rem]">Project</h1>
          <h1 className="mt-1 text-[4rem] font-extrabold">용궁</h1>
          <button className="mt-[2rem] w-60 h-20 bg-yellow-300 rounded-full" onClick={onStartButtonPressed} 
          >게임 시작!</button>

        </ScrollSection>

        <ScrollSection style={{  }}>
          <h1>Section 1</h1>
          <ParallaxContainer>
            <ParallaxElement
              scrollAmount={scrollPx*clampScroll(scroll, 1)}
              pWeightX={-0.05}
              pWeightY={0}
              originPosX={'20vw'}
              originPosY={'80vh'}
            >
              <h1 className="color-black">나는 해초1</h1>
            </ParallaxElement>
            <ParallaxElement
              scrollAmount={scrollPx*clampScroll(scroll, 1)}
              pWeightX={0.05}
              pWeightY={0}
              originPosX={'50vw'}
              originPosY={600}
            >
              <h1 className="color-black">나는 해초2</h1>
            </ParallaxElement>
          </ParallaxContainer>
        </ScrollSection>

        <ScrollSection style={{  }}>
          <h1>Section 2</h1>
          <ParallaxContainer>
            <ParallaxElement
              scrollAmount={scrollPx*clampScroll(scroll, 2)}
              pWeightX={-0.05}
              pWeightY={0}
              originPosX={'20vw'}
              originPosY={'80vh'}
            >
              <h1 className="color-black">나는 바위1</h1>
            </ParallaxElement>
            <ParallaxElement
              scrollAmount={scrollPx*clampScroll(scroll, 2)}
              pWeightX={0.05}
              pWeightY={0}
              originPosX={'50vw'}
              originPosY={600}
            >
              <h1 className="color-black">나는 바위2</h1>
            </ParallaxElement>
          </ParallaxContainer>
        </ScrollSection>
        
        <ScrollSection style={{  }}>
          <h1>Section 3</h1>
          <ParallaxContainer>
            <ParallaxElement
              scrollAmount={scrollPx*clampScroll(scroll, 3)}
              pWeightX={-0.05}
              pWeightY={0}
              originPosX={'20vw'}
              originPosY={'80vh'}
            >
              <h1 className="color-black">나는 장식1</h1>
            </ParallaxElement>
            <ParallaxElement
              scrollAmount={scrollPx*clampScroll(scroll, 3)}
              pWeightX={0.05}
              pWeightY={0}
              originPosX={'50vw'}
              originPosY={600}
            >
              <h1 className="color-black">나는 장식2</h1>
            </ParallaxElement>
          </ParallaxContainer>
        </ScrollSection>
        
        <ScrollSection style={{ }}>
          <h1>Section 4</h1>
          <div className="mt-[36rem]">
          <button className="mt-[2rem] w-60 h-20 bg-yellow-300 rounded-full" onClick={onEnterButtonPressed} 
          >용궁 입장하기</button>
          <br/>
          <button className="mt-[2rem] w-10 h-10 bg-slate-500 rounded-full" onClick={()=>scrollRef.current.scrollTo({top: 0, behavior: 'smooth'})} 
          >🔺</button>
          </div>
        </ScrollSection>
    </ScrollContainer>
      </div>
  );
}
