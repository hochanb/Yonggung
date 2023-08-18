import { HexagonPath } from 'svgpaths'
import { CashbagIconPath, MusicIconPath, SegmentedCirclePath, SpannerIconPath, StarIconPath, TriangleIconPath, WandIconPath } from '../svgpaths';
import 'css/custom.css'

export function IntroDawn() {
  return (
    <div className="w-full p-10  text-white fade-in">
      <div style={{
        fontSize: '25px',
        fontWeight: '500',
      }}>
        “해 뜨기 전 새벽”
        </div>
      <div className="" style={{
        fontSize: '17px',
        lineHeight: '2rem',
        fontWeight: '300',
      }}>
<br/> 밤에서 아침으로 가는 과도기. 
<br/> 어둠을 뚫고 다음 날로 가는 가능성과 
<br/> 희망, 변화에 대한 믿음을 가리킨다.
<br/> 새벽[새:闢] 뮤지컬이라는 형태를 통해 
<br/> 새로운 이야기들을 무대에 가져와 
<br/> 상연되도록 하고자 한다. 
<br/> 이는 완결의 상태가 아니라 
<br/> 언제나 과정의 한가운데에서 
    </div>
    <div style={{
      marginTop: '2rem',
      fontSize: '20px',
      fontWeight: '500',
      
    }}>
    아직 오지 않은 날을 그려보는 시도이다.
    </div>
    </div>
  )
}

export function IntroGreeting() {
  return (
    <div className="flex w-full justify-center flex-col pt-16 pb-20 fade-in">
      <div className="flex w-full justify-center">
        <img src={`${process.env.PUBLIC_URL}/images/members/glassy.jpg`} alt="placeholder"
        style={{
          width: '125px',
          height: '150px',
          marginBottom: '20px',
          borderRadius: '50%',
          background: 'white',
          objectFit: 'cover',
          // filter: `drop-shadow(0 0 12px rgba(255,255,255,1))`,
          boxShadow: '0 0 12px 8px rgba(255,255,255,1)',
          
        }}/>
        </div>
        <div className='text-white text-lg font-bold'>
          조유리
        </div>
        <div className='text-white mt-10'>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        밤에서 아침으로 가는 과도기. <br/>
        </div>
    </div>
  )
}

  const radius=35;  //40% length
  
const TeamButton = ({name, index, onClick, iconPath, center=false}) => {
  return (
    <div style={{
      width: '90px',
      height: '90px',
      position: 'absolute',
      // background: 'pink',
      transform: 'translate(-50%, -50%)',
      top: center?'50%' : `${50-radius*Math.cos(2*Math.PI/6*index)}%`, 
      left: center?'50%' : `${50+radius*Math.sin(2*Math.PI/6*index)}%`
    }}
    
    >
    <div className='w-full h-full'> 
      <svg xmlns="http://www.w3.org/2000/svg" width="90" viewBox="0 0 90 90" fill="none" className='absolute top-0'
        style={center? {filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.8))'}:null}
      >
        {center?
          <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:'rgba(116, 212, 255, 0.69)'}} />
            <stop offset="100%" style={{stopColor:'rgba(144, 152, 255, 0.65)'}} />
          </linearGradient>
        </defs>
        :null}
        <HexagonPath color={center? "url(#grad1)":'rgba(255,255,255,0.33)'} strokeWidth={1} s={0.95} x={-7} y={-3}/>
      </svg>
      < svg xmlns="http://www.w3.org/2000/svg" width="90" viewBox="0 0 90 90" fill="none" className='absolute top-0'>
        {iconPath}
      </svg>
    </div>
    <div style={{
      marginTop: '0.3rem',
      fontSize: '18px',
      color: 'white',
      fontWeight: 700,
    }}>
      {name}
    </div>
    </div>
  )
}


export const OrganizationChart = () => {

  return(
    <div className="flex flex-col w-full justify-center items-center fade-in">
      <div style={{
        marginTop: '2rem',
        width: '390px',
        height: '390px',
        // background: 'white',
        position: 'relative',
      }}>
        <TeamButton name="연출" index={0} iconPath={
          <SegmentedCirclePath color={'white'} strokeWidth={1} x={21} y={22}/>
        }/>
        <TeamButton name="음악" index={1} iconPath={
          <MusicIconPath color={'white'} strokeWidth={1} x={24} y={26}/>
        }/>
        <TeamButton name="경영지원" index={2} iconPath={
          <CashbagIconPath color={'white'} strokeWidth={1} x={23} y={22}/>
        }/>
        <TeamButton name="디자인" index={3} iconPath={
          <WandIconPath color={'white'} strokeWidth={1} x={24} y={22}/>
        }/>
        <TeamButton name="홍보" index={4} iconPath={
          <TriangleIconPath color={'white'} strokeWidth={1} x={26} y={22}/>
        }/>
        <TeamButton name="무대" index={5} iconPath={
          <SpannerIconPath color={'white'} strokeWidth={1} x={26} y={28}/>
        }/>
        <TeamButton name="창작진" index={0} center={true} iconPath={
          <StarIconPath color={'white'} strokeWidth={1} x={25} y={26}/>
        }/>

      <div className='w-full h-full flex items-center justify-center'>

        <svg width="250" height="258" viewBox="0 0 250 258" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M94 1L33 39" stroke="white" stroke-opacity="0.47"/>
          <path d="M216.999 219L157.5 257.5" stroke="white" stroke-opacity="0.47"/>
          <path d="M34 218L93 257" stroke="white" stroke-opacity="0.47"/>
          <path d="M157 1L217 38" stroke="white" stroke-opacity="0.47"/>
          <path d="M249 95.5L249 161" stroke="white" stroke-opacity="0.47"/>
          <path d="M1 95.5L1 161" stroke="white" stroke-opacity="0.47"/>
        </svg>
      </div>

      </div>
    </div>
  );
}