import CenteredSection from "components/CenteredSection"
import { AmmonitePath, ConchPath, KnifePath, NotePath, PathPath, SandPath, ShellPath, StarfishPath } from "svgpaths"
import { Link } from "react-router-dom"
import { WaveCenter } from "components/Wave"
import 'css/custom.css'


export default function MapPage(){
  const textStyle={
    color: 'white',
    textAlign: 'center',
    textShadow: '0px 0px 4px #00BDFF, 0px 0px 1.3px #39C0C9, 0px 0px 1.7px rgba(0, 0, 0, 0.40), 0px 0px 6px #02A4A8',
    fontSize: 20,
    fontWeight: 900,
    zIndex: 20,
  }
  return(
    
    <div 
    style={{
      width: '100vw',
      minHeight:'100vh',
      height:'100vh',
      // paddingBottom: '150px',
      background: 'var(--unnamed, linear-gradient(135deg, #4DEDED 0%, #A9C1FF 72.40%, #8B91FF 100%))',
      position: 'relative',
    }}>
      <div className="absolute top-0 z-10 w-full h-full fade-in">
        <CenteredSection width={390} height={844}>
          <ShellPath className='absolute top-[130px] left-[170px]'/>
          <Link style={textStyle} className='absolute top-[177px] left-[191px]' to='/intro'>새벽 소개</Link>
          <ConchPath className='absolute top-[227px] left-[237px]'/>
          <Link style={textStyle} className='absolute top-[250px] left-[250px]' to='/team'>팀 소개</Link>
          <KnifePath className='absolute top-[282px] left-[54px]'/>  
          <Link style={textStyle} className='absolute top-[337px] left-[77px]' to='/musical'>극 소개</Link>
          <NotePath className='absolute top-[400px] left-[236px]'/>
          <Link style={textStyle} className='absolute top-[427px] left-[237px]' to='/number'>넘버 리스트</Link>
          <StarfishPath className='absolute top-[492px] left-[63px]'/>
          <Link style={textStyle} className='absolute top-[533px] left-[88px]' to='/cast'>캐스트</Link>
          <AmmonitePath className='absolute top-[612px] left-[188px]'/>
          <Link style={textStyle} className='absolute top-[644px] left-[207px]' to='/behind'>비하인드</Link>
          <PathPath className='absolute top-[215px] left-[102px]'/>
        </CenteredSection>
      </div>
      <SandPath className='absolute bottom-0 w-full z-10'/>
      <WaveCenter style={{position:'absolute', top:121, width:'full'}}/>
      <WaveCenter style={{position:'absolute', top:310, width:'full'}} flip={true}/>
      <WaveCenter style={{position:'absolute', top:537, width:'full'}}/>

    </div>
  )
};
