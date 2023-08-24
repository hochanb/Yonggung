export function ParallaxElement(props, 
  {
    children, 
    style,
    scrollAmount=0, // amount of scroll in px
    pWeightX=0, // parallax weight for x direction 0 to 1
    pWeightY=0, // parallax weight for y direction 0 to 1
    originPosX=0, // offset from origin in x direction
    originPosY=0, // offset from origin in y direction

  }){
  return (
    <div className="parallax-element" style={{
      ...props.style,
      position: 'absolute',
      top: props.originPosY,
      left: props.originPosX,
      width: 'auto',
      height: 'auto',
      transform: `translateY(${props.scrollAmount * props.pWeightY }px) translateX(${props.scrollAmount * props.pWeightX}px)`,
      transition: 'transform ease-out',
      }}>
      {props.children}
    </div>
  );
}

export function ParallaxContainer(props){
  return(
    <div className={'parallax-container'} style={{position:'relative'}}>
      {props.children}
    </div>
  )
}