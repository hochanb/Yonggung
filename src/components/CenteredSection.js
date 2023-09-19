export default function CenteredSection({width=400, height=1200, children}){
  return(
    <div className="w-full h-full bg-yellow-100 relative overflow-clip">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-200" style={{
        width: width,
        height: height,
      }}>
        {children}
      </div>
    </div>
  )
}