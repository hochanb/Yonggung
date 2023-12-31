import { useRef } from "react"
import Header from "components/Header";
import { WaveTop1, WaveTop2, WaveBottom1, WaveBottom2 } from "components/Wave";
import { Disc } from "components/NumberContents";
import Bubble from "components/Bubble";


export default function NumberPage(){
  const ref=useRef(null);

  return(
    
    <div 
    ref={ref}
    style={{
      width: '100vw',
      height: '100vh',
      overflow: 'clip',
      position: 'relative',
      background: 'var(--unnamed, linear-gradient(135deg, #4DEDED 0%, #A9C1FF 72.40%, #8B91FF 100%))',
    }}>

      <Header>
        <h1 className="text-2xl text-center font-coralblue">넘버 리스트</h1>
      </Header>

      <div className="relative z-10">
        <WaveTop1 color="white" className="absolute top-0 w-full"/>
        <WaveTop2 className="absolute top-0"/>
      </div>

      <Disc/>

      <Bubble left={5} top={520}  scale={1}/>
      <Bubble left={300} top={550}  scale={0.4}/>
      <Bubble left={400} top={740}  scale={1}/>

      
    <WaveBottom1 className='absolute bottom-0 left-0 w-full' color='white'/>
    <WaveBottom2 className='absolute bottom-0 left-0 w-full' color='white'/>
    </div>
  )
}