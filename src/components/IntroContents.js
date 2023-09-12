import { HexagonPath } from 'svgpaths'
import { CashbagIconPath, MusicIconPath, SegmentedCirclePath, SpannerIconPath, StarIconPath, TriangleIconPath, WandIconPath } from '../svgpaths';
import 'css/custom.css'
import { Link } from 'react-router-dom';

export function IntroDawn() {
  return (
    <div className="w-full p-10 pt-[7rem] text-white fade-in">
      
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
    <div className="flex w-full justify-center flex-col pt-32 pb-20 p-8 fade-in " style={{
      background: 'var(--unnamed, linear-gradient(135deg, #4DEDED 0%, #A9C1FF 72.40%, #8B91FF 100%))',

    }}>
      <div className="flex w-full justify-center relative top-0">
        <img src={`${process.env.PUBLIC_URL}/images/members/김수민.png`} alt="placeholder"
        style={{
          width: '150px',
          height: '150px',
          marginBottom: '20px',
          borderRadius: '50%',
          background: 'white',
          objectFit: 'cover',
          border: '3px solid #EFF3F8',
          // filter: `drop-shadow(0 0 12px rgba(255,255,255,1))`,
          // boxShadow: '0 0 12px 8px rgba(255,255,255,1)',
          
        }}/>
        </div>
        <div className='text-white text-[21px] font-[400]' style={{
          textShadow: '0px 0px 15px rgba(97, 129, 247, 0.60)',
        }}>
          총괄 프로듀서
        </div>
          
        <div className='text-white text-[24px] font-[500]' style={{
          textShadow: '0px 0px 15px rgba(97, 129, 247, 0.60)',
        }}>
          김수민
        </div>
        <br/>
        <br/>
        <div className='text-white text-[17px] font-bold' style={{
          textShadow: '0px 0px 15px rgba(97, 129, 247, 0.60)',
          lineHeight: '40px',
        }}>
          프로젝트 용궁, 드디어 세상 밖으로!
        </div>
        <div className='text-white text-base text-center' style={{
          lineHeight: '30px',
          fontWeight: '300',
        }}>
          안녕하세요! 뮤지컬 {"<프로젝트 용궁 : 낙원의 미스테리>"}의 총괄 프로듀서이자, 작가 김수민입니다.
          귀한 걸음으로 저희 공연 찾아 주신 모든 관객 
          여러분께 가장 먼저 감사의 말씀드립니다.
        </div>
        <br/>
        <div className='text-white text-base text-justify' style={{
          lineHeight: '30px',
          fontWeight: '300',
        }}>
          
{"뮤지컬 <프로젝트 용궁>은 2021년 말부터 기획되어 완성된 공연으로, 많은 분들의 오랜 노력과 헌신으로 이루어진 작품입니다. 본 공연은 학부를 졸업하기 전에 모두에게 의미가 깊은 프로젝트를 완성해 보고 싶다는 제 목표와 함께 시작했습니다. 정말 감사하게도 학부 생활 동안 만났던 친구, 동료들을 중심으로 수많은 분들이 뮤지컬 <프로젝트 용궁>에 합류해 주셨고, 상상하지도 못했던 큰 규모의 뮤지컬 프로덕션을 만들 수 있게 되었습니다. 총괄 프로듀서로서 참 영광스럽고 꿈같은 경험이었습니다."}
<br/>
{"저희 창작집단 새벽은 비전공생들이 만든 학생 창작극이라는 한계를 탈피하기 위해 제작 과정에서 부단한 노력을 해왔습니다. 회전 무대라는 실험적인 무대 구성과, 화려한 검무 퍼포먼스, 다양한 연출적, 극작적 시도를 통해 창작 뮤지컬의 장점을 극대화했습니다. 이러한 노력의 흔적이 가득 담긴 공연을 즐겁게 감상해 주시면 더할 나위 없이 기쁠 것 같습니다."}
<br/>
<br/>
{"이 자리를 빌려 감사 인사를 드려야 할 분들이 너무나도 많습니다."}
<br/>
{"먼저 최고의 넘버를 선물해 준 작곡가 정아. 함께 극을 써준 채윤, 경민 언니. 가장 신뢰하고 의지했던 총연출 나래에게 무한한 감사를 전합니다."}
<br/>
{"이어서 <프로젝트 용궁>의 소중한 헤드 총연출 나래, 음악감독 정아, 경영지원 은희, 회계 영민, 무대감독 수빈, 디자이너 경민, 홍보팀장 예진, 안무감독 유진에게 존경과 감사를 표합니다."}
<br/>
{"또한 <프로젝트 용궁>을 완성하기 위해 저희 헤드들과 함께 달려와주신 창작집단 새벽의 모든 팀원분들과 8명의 배우님들께 큰 감사 인사를 올립니다."}
<br/>
<br/>
{"마지막으로 뮤지컬 제작 과정 전반에 큰 지원을 아끼지 않아주셨던 서울대학교 문화예술원 이중식 교수님과 항상 제 프로젝트를 지지하고 응원해 주시는 창작집단 새벽 류준필 지도교수님께도 정말 감사드립니다."}
<br/>
<br/>
{"<프로젝트 용궁>에 참 많은 애정을 주었습니다. 사람도, 준비과정도, 연습도 그 무엇도 잊을 수 없는 소중한 추억이 될 것 같습니다. 총괄로서 부족한 점도 많았지만, 그럼에도 용궁을 준비하면서 참 행복했습니다. 이 극을 준비하셨던, 그리고 보러와주신 모든 분들께도 이 뮤지컬이 행복한 기억으로 남길 진심으로 바라봅니다!"}
<br/>


        </div>
    </div>
  )
}

  const radius=35;  //40% length
  
const TeamButton = ({name, index, iconPath, center=false}) => {
  return (
    <Link style={{
      width: '90px',
      height: '90px',
      position: 'absolute',
      // background: 'pink',
      transform: 'translate(-50%, -50%)',
      top: center?'50%' : `${50-radius*Math.cos(2*Math.PI/6*index)}%`, 
      left: center?'50%' : `${50+radius*Math.sin(2*Math.PI/6*index)}%`
    }}
    to='/team' 
    state={{index:index}}
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
    </Link>
  )
}


export const OrganizationChart = () => {

  return(
    <div className="flex flex-col w-full justify-center items-center fade-in pt-8">
      <div style={{
        marginTop: '2rem',
        width: '390px',
        height: '390px',
        // background: 'white',
        position: 'relative',
      }}>
        <TeamButton name="연출" index={1} 
        iconPath={
          <SegmentedCirclePath color={'white'} strokeWidth={1} x={21} y={22}/>
        }/>
        <TeamButton name="음악" index={2} iconPath={
          <MusicIconPath color={'white'} strokeWidth={1} x={24} y={26}/>
        }/>
        <TeamButton name="경영지원" index={3} iconPath={
          <CashbagIconPath color={'white'} strokeWidth={1} x={23} y={22}/>
        }/>
        <TeamButton name="디자인" index={4} iconPath={
          <WandIconPath color={'white'} strokeWidth={1} x={24} y={22}/>
        }/>
        <TeamButton name="홍보" index={5} iconPath={
          <TriangleIconPath color={'white'} strokeWidth={1} x={26} y={22}/>
        }/>
        <TeamButton name="무대" index={6} iconPath={
          <SpannerIconPath color={'white'} strokeWidth={1} x={26} y={28}/>
        }/>
        <TeamButton name="창작진" index={0} center={true} iconPath={
          <StarIconPath color={'white'} strokeWidth={1} x={25} y={26}/>
        }/>

      <div className='w-full h-full flex items-center justify-center'>

        <svg width="250" height="258" viewBox="0 0 250 258" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M94 1L33 39" stroke="white" strokeOpacity="0.47"/>
          <path d="M216.999 219L157.5 257.5" stroke="white" strokeOpacity="0.47"/>
          <path d="M34 218L93 257" stroke="white" strokeOpacity="0.47"/>
          <path d="M157 1L217 38" stroke="white" strokeOpacity="0.47"/>
          <path d="M249 95.5L249 161" stroke="white" strokeOpacity="0.47"/>
          <path d="M1 95.5L1 161" stroke="white" strokeOpacity="0.47"/>
        </svg>
      </div>

      </div>
    </div>
  );
}