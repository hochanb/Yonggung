import { useEffect, useState, useFrame, useRef } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { useSpring, animated } from 'react-spring'
import { WaveBottom1, WaveBottom2 } from './Wave';

const offsetL=50 ;//px
const offsetT=-200 ;//px
const offsetA=40 ;//deg
const radius=240 ;//px
const rotation=60 ;//deg

const musicList=[
  {
    title: '그 남자의 죽음',
    src: `${process.env.PUBLIC_URL}/music/m1.wav`,
    description: '그 남자가 만들어 낸\n또 하나의 미스테리',
  },
  {
    title: '그리움과의 동행',
    src: `${process.env.PUBLIC_URL}/music/m2.wav`,
    description: '내 인생은 어쩌면\n그리움과의 동행',
  },
  {
    title: '튜토리얼',
    src: `${process.env.PUBLIC_URL}/music/m3.wav`,
    description: '현실보다 더 달콤하고\n현실보다 더 진짜같지',
  },
  {
    title: '네가 몰랐던 이야기',
    src: `${process.env.PUBLIC_URL}/music/m4.wav`,
    description: '절망의 자리에 희망과 기대를\n함께 짓고 칠하고 꾸미자 우리',
  },
  {
    title: '잃어버린 봄을 찾아',
    src: `${process.env.PUBLIC_URL}/music/m5.wav`,
    description: '우리는 이 계절에 다시 만날 거야\n함께하게 될 거야',
  },
  {
    title: '목련의 춤',
    src: `${process.env.PUBLIC_URL}/music/m6.wav`,
    description: '용궁의 심장을 갈라\n낙원의 비밀 다 밝혀내리',
  },
  {
    title: '상실 너머로',
    src: `${process.env.PUBLIC_URL}/music/m7.wav`,
    description: '상실 저편에는 문이 있어\n어둡고 칙칙한 길 펼쳐져\n너 없는 삶을 질질 끌고 계속 걸어가야 해',
  },
  {
    title: '나의 갈라테이어',
    src: `${process.env.PUBLIC_URL}/music/m8.wav`,
    description: '거짓보다 더 달콤하고\n꿈보다 더 영원하지',
  },
  {
    title: '이 사랑 계속되길',
    src: `${process.env.PUBLIC_URL}/music/m9.wav`,
    description: '시리도록 아름다운 사랑의 춤\n그 끝에는 우리만 남을 거야',
  },
]

const SelectedNumber=({index, currentIndex, title})=>{
  //index: index of this component
  //currentIndex: index of selected number

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
  const r=clamp((currentIndex-index+2)*rotation + offsetA,0,359);

  const {rotate}=useSpring({
    rotate: r,
    from:{rotate:0},
  })

  return(
    
    <animated.div
    style={{
      width:'180px',
      zIndex:2,
      position:'absolute',
      top: rotate.to((rotate)=>`${Math.sin(rotate*Math.PI/180)*radius +320 + offsetT}px`),
      left: rotate.to((rotate)=>`${Math.cos(rotate*Math.PI/180)*radius +320 + offsetL*2}px`),
      transform: 'translate(-50%, -50%)',
      filter:'drop-shadow(0 0 3px rgba(0,0,0,0.2))'
      
    }}
    >
      <div className='text-white text-[40px]'>
        {`${index+1}`.padStart(2, '0')}
      </div>
      <div className='text-white text-[22px]' style={{
        letterSpacing: '-2.34px',
        fontWeight: '600',
      }}>
        {title}
      </div>  
    </animated.div>
  )
}



export const Disc=()=>{


  const scrollRef=useRef(null);

  const [index, setIndex] = useState(0)
  const [r, setR] = useState(0)

  const {rotate}=useSpring({
    rotate: r,
    from:{rotate:0},
  })

  useEffect(()=>{
    const handleScroll=(e)=>{
      // get wheel amount, and update index with rotation.
      //change one index per one wheel
      console.log(e)
    }
    scrollRef.current.addEventListener('mousedown', handleScroll);
    // return ()=>scrollRef.current.removeEventListener('mousedown', handleScroll);
  },[])



  
  return (
    <>
    
    <div className={`h-[500px] top-[-40px] relative overflow-hidden`} ref={scrollRef}>
      <animated.div
        style={{
          width:'700px',
          position:'absolute',
          top:offsetT,
          left:offsetL,
          transform: rotate.to((rotate)=>`rotate(${rotate}deg)`),
          zIndex:1,
        }}
      >
        <img alt="disc" style={{
          opacity:0.9,
        }}
        src={`${process.env.PUBLIC_URL}/images/etc/disc.png`} 
        />
      </animated.div>
      {musicList.map((music, i)=>{
        return <SelectedNumber key={i} index={i} currentIndex={index} title={music.title}/>
      })}

    <img className='absolute z-30' src={`${process.env.PUBLIC_URL}/images/etc/stick.png`} alt='stick' 
      style={{
        top: `${offsetT+400}px`,
        left: `${200}px`,
        transform: 'rotate(-30deg)',
      }}
    />

    </div>

    <div className='text-white text-[22px]' style={{
        letterSpacing: '-1',
        fontFamily: 'iceJaram',
        whiteSpace: 'pre-wrap',
      }}>
        {musicList[index].description}
    </div>

    
    <ReactAudioPlayer
      src={musicList[index].src}
      autoPlay
      // controls
    />
    
    <div className='w-20 h-10 bg-pink-200 rounded-sm z-10'
        onClick={()=>{
          setIndex((index+8)%9)
          setR(r-rotation)
        }}>prev</div>
    <div className='w-20 h-10 bg-pink-200 rounded-sm z-10'onClick={()=>{
      setIndex((index+1)%9)
      setR(r+rotation)
    }}>next</div>

    <WaveBottom1 className='absolute bottom-0 left-0' color='white'/>
    <WaveBottom2 className='absolute bottom-0 left-0' color='white'/>
    </>
  )
}

