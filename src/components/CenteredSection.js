export default function CenteredSection({width=400, height=900, children}){
  return(
    <div className="w-full h-full  relative overflow-clip">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " style={{
        width: width,
        height: height,
      }}>
        {children}
      </div>
    </div>
  )
}