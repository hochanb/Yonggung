export default function Bubble({className,top,left,right, bottom, scale=1, opacity=0.6}){
  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/etc/bubble.png`}
      alt="bubble"
      className={className}
      style={{
        position:'absolute',
        top:top,
        left:left,
        right:right,
        bottom:bottom,
        transform:`scale(${scale}) translate(-50%,-50%)`,
        zIndex: 1,
        opacity:opacity,
      }}

    />
  )
}