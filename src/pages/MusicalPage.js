import { useRef, useState } from "react"
import Header from "components/Header";
import { MusicalContainer, MusicalHeader } from "components/MusicalContents";
import { useEffect } from "react";

const  topOffset=(n) => n === 0 ? 0 : n === 1 ? -300 : -200;

export default function MusicalPage(){
  const [section, setSection]=useState(0);  //current section number
  const contentRefs=[useRef(null), useRef(null), useRef(null)];
  const pageRef=useRef(null);

  const onSectionButton=(number)=>{
    // setSection(number);
    pageRef?.current?.scrollTo({behavior: 'smooth', top: contentRefs[number].current?.offsetTop + topOffset(number)});
    // contentRefs[number].current?.scrollIntoView({ behavior: 'smooth', offsetTop: 0});
  }

  function onScrollContainer(){
    // console.log(
    //   `page: ${pageRef?.current?.scrollTop},
    //   section1: ${contentRefs[0]?.current?.offsetTop},
    //   section2: ${contentRefs[1]?.current?.offsetTop}
    //   section3: ${contentRefs[2]?.current?.offsetTop}`);
    if(pageRef.current?.scrollTop<contentRefs[1].current?.offsetTop + topOffset(1)){
      setSection(0);
    }else if(pageRef.current?.scrollTop<contentRefs[2].current?.offsetTop + topOffset(2)){
      setSection(1);
    }else{
      setSection(2);
    }

  }
  useEffect(()=>{
    pageRef.current?.addEventListener('scroll', onScrollContainer);
    return ()=>{
      pageRef.current?.removeEventListener('scroll', onScrollContainer);
    }
  }, [pageRef])

return(
  <div 
  style={{
    width: '100vw',
    height: '100vh',
    overflow: 'clip',
    display:'flex',
    flexDirection:'column',
  }}>
  
  <div className="fixed w-full top-0 z-20">
    <Header>
      <div className="flex flex-col">
        <h1 className="text-2xl text-center font-coralblue">프로젝트 용궁</h1>
        <h2 className="text-lg font-bold text-center font-coralblue">:낙원의 미스테리</h2>
      </div>
    </Header>
    <div className="w-full relative">
      <MusicalHeader section={section} setSection={onSectionButton} />
    </div>
  </div>
  
  <MusicalContainer 
    pageRef={pageRef}
    ref1={contentRefs[0]} 
    ref2={contentRefs[1]}
    ref3={contentRefs[2]}
  />


</div>
)
}