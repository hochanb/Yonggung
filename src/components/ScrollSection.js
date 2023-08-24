import React from "react";

/*
* section used in one page scroll
* 
* 
*/

export function ScrollSection({ children, style}) {
  
  return (
    <div className="scroll-section" style={{
      ...style,
      height: '100vh',
      width: '100vw',
      scrollSnapAlign: 'start',
      scrollSnapStop: "always",
      overflow: 'hidden',
      }} >
      {children}
    </div>
  );
}
export function ScrollContainer(props){
  const scrollRef=props.scrollRef;
  return(
    <div
    ref={scrollRef}
    className={"scroll-page"}
    onScroll={props.onScroll}
    style={{
      ...props.style,
      height: "100vh",
      overflowY: props.scrollAble?"scroll":"hidden",
      padding: 0,
      margin: 0,
      scrollSnapType: "y mandatory",
      scrollSnapStop: "always",
    }}
  >
      {props.children}
    </div>
  )
}
