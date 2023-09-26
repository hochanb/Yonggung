import React, { useRef } from 'react'
import 'css/custom.css'
import { useEffect } from 'react'
import { useState } from 'react'

export function CreditTab(){
  return(
<div className="whitespace-pre-wrap text-white pt-10 pb-10 p-8 fade-in">
<div className=" text-xl font-bold text-center text-white whitespace-pre-wrap">
  {"<프로젝트 용궁> 헤드\n\n"}
</div>
{"총괄 프로듀서 김수민\n"+
"연출 김나래\n"+
"작곡 이정아\n"+
"극본 김수민 이채윤 조경민\n"+
"무대 김수빈\n"+
"경영지원 김은희\n"+
"디자인 김경민\n"+
"홍보 계예진\n\n"}

<div className="text-xl font-bold text-center text-white">
  {"<프로젝트 용궁> 제작진\n\n"}
</div>

{
"[연출부]\n\n"+

"연출 김나래\n"+
"조연출 김수민, 전종원, 김현정\n\n"+

"안무\n"+
"김유진, 김나영, 김시연, 박수빈\n\n"+

"조명디자인 전종원, 김수민\n"+
"콘솔 조명 오퍼레이터 김수민\n"+
"백스 조명 오퍼레이터 전종원\n\n"+

"소품 수퍼바이저 김나래\n"+
"소품\n"+
"김나래, 김현정\n\n"+

"의상 수퍼바이저\n"+
"김현정\n"+
"의상\n"+
"김현정, 김나래, 김영애\n\n"+

"크루 수퍼바이저\n"+
"김현정\n"+
"크루\n"+
"김현정, 전종원, 하소진, 김유진, 박예은, 김영애, 이상헌, 임채준, 진유영, 김나영, 김시연, 박수빈, 김나래\n\n"+

"음성녹음\n"+
"이우석, 김유진\n\n"+

"[음악부]\n\n"+

"음악감독 이정아\n"+
"음악팀원 강서진, 김상은\n\n"+

"음악지도\n"+
"이정아, 강서진\n\n"+

"음향 총괄/ 음향 오퍼레이터\n"+
"김상은\n\n"+

"공연 MR 제작\n"+
"박지인, 이정아\n\n"+

"[경영지원부]\n\n"+

"경영지원팀장 김은희\n\n"+
"경영지원팀원 지영민, 권재윤, 김경민\n\n"+

"회계\n"+
"지영민\n\n"+

"시설예약/조정\n"+
"권재윤, 김나래, 김수민, 전종원\n\n"+

"하우스어셔\n"+
"김은희, 이채윤, 강서진, 김경민, 지영민, 권재윤\n\n"+

"지원사업관리\n"+
"김수민, 지영민, 김은희\n\n"+

"지원사업컨택\n"+
"김수민, 김나래, 김유진, 김현정\n\n"+

"[디자인부]\n\n"+

"디자인팀장 김경민\n"+
"디자인팀원 김경민, 김유진, 방호찬, 황아영\n\n"+

"포스터\n"+
"김경민, 김유진\n\n"+

"온라인 프로그램북(홈페이지)\n\n"+
"김경민, 방호찬\n"+

"무대 소품 디자인\n"+
"김경민, 김나래, 김수민, 김유진, 김현정, 전종원, 하소진\n\n"+

"티켓 디자인\n"+
"김경민\n\n"+

"굿즈 디자인\n"+
"황아영, 강예은, 박서영, 계예진\n\n"+

"[무대부]\n\n"+


"무대조감독 김태준\n"+
"무대팀원 최재영, 편서영, 허유나, 조영서, 김정훈, 김서연, 김경민, 최나음, 조수민, 김나경\n\n"+

"무대 제작\n "+
"김수빈, 김태준, 최재영, 편서영, 허유나, 조영서, 김정훈, 김서연\n\n"+

"무대 작화\n"+
"김경민, 최나음, 조수민, 김나경, 김유진\n\n"+

"무대 디자인\n"+
"김수빈, 김나래, 김수민, 김유진, 김현정\n\n"+

"무대 작화 디자인\n"+
"김경민\n\n"+

"무대 설계\n"+
"김수빈, 김정훈\n\n"+

"무대 셋업\n"+
"김수빈, 김태준, 김정훈, 편서영, 조영서, 최재영, 김서연, 허유나, 강민, 강민수, 류도훈, 이재윤, 조성호, 조한희, 허유나, 김수민, 박수빈\n\n"+

"[홍보부]\n\n"+

"홍보팀장 계예진\n"+
"홍보팀원 강예은, 박서영, 오재원\n\n"+

"포토그래퍼/영상감독\n"+
"계예진\n\n"+

"영상편집\n"+
"강예은, 계예진\n\n"+

"SNS 홍보/디자인\n"+
"계예진, 박서영, 오재원\n\n"
}
</div>
)};

export function CostumeTab(){
  return(
    <div className="p-8 fade-in">
      <img src="/images/members/배우팀/actors_real.png" alt="costume1" className="w-full"/>
      <img src="/images/members/배우팀/actors_game.png" alt="costume1" className="w-full"/>
      <h2 className="text-white font-light mt-8 text-justify text-base">
        의상에서 가장 포인트를 두었던 부분은 게임 속 용궁 의상과 현실 세계의 의상이 확실하게 구분될 수 있도록 하는 것이었습니다. 
        용궁은 한국의 왕궁 느낌을 최대한 살리기 위해, 전통 의상 혹은 생활 한복 등을 최대한 활용하고자 했습니다. 
        용궁 속 NPC들과 용궁에서 플레이하는 재이의 의상을 주목해서 봐주시면 좋을 것 같습니다. 
        한편, 현실 속 의상은 극의 배경이 근미래인 만큼 현재 우리가 자주 볼 수 있는 의상들로 구성했습니다. 여러 시공간이 나타나는 만큼 배우들의 의상도 다양하게 준비하여, 시공간의 변화를 관객이 잘 이해할 수 있도록 노력했습니다.
      </h2>
    </div>
  )
}

export function LightingTab(){
  return(
    <div className="p-8 fade-in">
      <img src="/images/etc/light_scheme.png" alt="costume1" className="w-full"/>
      <h2 className="text-white font-light mt-8 text-justify text-base">
      조명에서 가장 신경 썼던 점은 세심한 조명 밝기입니다. 뮤지컬의 경우 조명의 변화가 다채로워야 관객이 몰입을 지속적으로 이어나갈 수 있기 때문입니다. 그러나 두레문예관은 제한적인 조명만 사용할 수 있었기에 저희는 세세한 밝기 변화에 신경 써 다채로운 표현할 수 있도록 노력했습니다.
      <br/>
      <br/>
      용궁과 현실을 구분하기 위해서도 조명 연출을 많이 활용했습니다. 각 벽에 붙여진 줄 LED 혹은 물결을 나타낼 수 있는 자체 조명 등을 사용해, 용궁 속 신비롭고 사이버틱한 느낌을 구현하고자 노력했습니다. 반면, 현실을 구현하는 과정에서는 관객들의 지루함을 최대한 줄이기 위해 체스판 고보 조명, D 벽의 전체를 LED 벽으로 만들어 그림자 연출을 시도하는 등의 여러 연출법을 도전했습니다.
      </h2>
    </div>
  )
}

export function StageTab(){
  return(
    
    <div className="p-8 fade-in">
      <img src="/images/etc/stage1.png" alt="costume1" className="w-full"/>
      <img src="/images/etc/stage2.png" alt="costume1" className="w-full"/>
      <h2 className="text-white font-light mt-8 text-justify text-base">
      무대는 총 4개의 구조적 볼륨과 그로 인해 구성된 6개의 공간으로 구성되어 있다. 
      <br/>
      고정적으로 벽면을 구성하는 가장 왼쪽의 A벽은 조명과 여러 효과를 통해 그곳에서 일어나는 상황들을 안정적으로 뒷받침해준다. 
      <br/>
      그리고 회전을 통해 총 4개의 공간을 표현하는 가운데 B벽과 C벽은 {"<프로젝트 : 용궁>"} 속 게임 접속 ‘전’과 ‘후’가 극명하게 달라지도록 하기 위해 회전벽으로 설치하였다. 폭3m 높이2.5m의 대형 벽 두개가 잘 회전할 수 있도록 양옆의 프레임은 단단히 고정되어 있다.
      <br/>
      B/C벽의 앞면은 XPS 회사의 사무실로, 뒷면은 게임 속 용궁으로 시각화하였다.  
      <br/>
      마지막으로 가장 오른쪽의 D벽은 암전 없이 배우들의 인아웃이 원활히 이루어지도록 뒤에 가벽이 세워져 있다. 더불어 A, B, C, D 총 4개의 거대벽 사이로 움직이는 바퀴벽이 존재한다. 이들은 앞뒤로 움직이며 각 공간을 분리하고 재구성하는 역할을 한다.
      </h2>
    </div>
  )
}

const practiceTexts=[
  {
    Title1:"찬란한 세상이 펼쳐져",
    Title2:"힘들지만 보람찬 연출 회의",
    Text:"무대 구상부터 씬메이킹까지 <프로젝트 용궁:낙원의 미스테리>의 모두의 모든 것을 모조리 쌓아가는 연출 회의 현장입니다. 낮과 밤을 가리지 않고 6개월 동안 지속적으로 회의를 해왔는데요. 회의를 하며 조명, 안무, 동선, 소품, 의상 등 전반적인 부분을 만들어 나갔습니다. 특히 여름에 3박 4일로 진행했던 씬메이킹 합숙을 통해서 더 나은 공연을 올리기 위해 노력했습니다."
  },
  {
    Title1:"가보자 용궁",
    Title2:"첫 워크쓰루",
    Text:"이날은 배우팀, 음악팀, 연출팀 전원이 모여 처음으로 연습한 날인데요. 그동안 음악과 연출 연습을 각자 진행했다면, 이날부터는 안무, 연기, 노래를 동시에 연습하며 연습팀이 다 같이 극을 준비하기 시작했습니다. 좋은 공연을 위해 더운 여름에도 쉬지 않고, 열심히 달려온 연습팀의 열정이 느껴지네요."
  },
  {
    Title1:"비록 느리지만 힘을 합쳤으니 어려울 거 없지",
    Title2:"배우를 대신해 무대에 오른 연출팀",
    Text:"배우팀 중 한 명이 연습을 못 오게 되자, 그 자리를 대신해 조연출 종원이가 런쓰루 무대 위로 올랐는데요. 급작스러운 부탁에도 최선을 다해 연기를 하던 조연출의 모습이 생생합니다. 그와 더불어 이 상황에서조차 몰입하는 배우팀에게 다시 한번 놀라고, 고마웠던 순간이네요. 수많은 변수 속에서도 함께 힘을 합쳐 연습을 진행하는 연습팀의 모습이었습니다."
  },
  {
    Title1:"감당할 수 없다 해서 외면할 순 없어",
    Title2:"소품 지옥에 빠지다.",
    Text:"XPS 사무실, 재이의 방, 컨테이너, 해연전, 백화제, 운정전 등 공간이 많이 나오는 뮤지컬답게 그에 필요한 소품 목록도 어마무시했는데요. 다른 뮤지컬들에 비해 압도적인 소품을 준비하고 제작하는 과정이 정말 어려웠습니다. 소품에 둘러쌓여 있는 연출의 모습이 귀여우면서도 고생이 여기까지 느껴지네요. 소품을 구하고 옮기는 과정에서 흔쾌히 도와주신 부모님께도 정말 감사드립니다!"
  },
  {
    Title1:"베루스, 멘트 업데이트 좀 하지 그래?",
    Title2:"베루스 녹음 현장",
    Text:"<프로젝트 용궁: 낙원의 미스테리>에 나오는 인공지능 ‘베루스’는 어떻게 만들어졌을까요? 목소리의 주인공은 바로 이우석님이셨습니다. 바로 위 사진이 녹음하는 과정이었는데요! 문장 하나하나를 녹음한 이후에 후작업을 통하여 베루스가 탄생한 것이지요. 우석님과 더불어 게임 속 음성을 녹음해준 김유진님께 감사를 표합니다."
  },
  {
    Title1:"너와 춤추는 이 시간이 내겐 가장 큰 행복",
    Title2:"안무 연습 현장",
    Text:"그 남자의 죽음, 튜토리얼, 목련의 춤 등 <프로젝트 용궁: 낙원의 미스테리>에는 수많은 안무들이 등장하는데요. 서울대학교 여성 댄스 동아리 ‘고어헤드’분들의 도움으로 더 멋있는 안무를 선보일 수 있었습니다. 사진을 통해 코믹하지만 멋있는 튜토리얼부터, 분위기 있고 웅장한 목련의 춤까지 열심히 땀 흘려 연습하는 과정을 엿볼 수 있습니다!"
  },
  {
    Title1:"우린 이 계절에 다시 만날거야. \n함께하게 될 거야",
    Title2:"연습이 끝나고.",
    Text:"연습을 진행하다 보면 더위에 지치기도, 어려운 장면들에 연습이 막히기도 하는데요. 때로는 과로와 업무 스트레스에 의해 쳐지기도 하지만, 그럼에도 재미있게 연습해 나가는 연습팀의 모습입니다. 혼자가 아닌 함께라 어려움도 같이 이겨내며 더 나은 공연을 위해 달려올 수 있었습니다."
  }
]


export function Practicing(){
  const [index, setIndex]=useState(0);

  function scrollToIndex(s){
    const offset=-40;
    if(s<480+offset) return 0;
    if(s<900+offset) return 1;
    if(s<1280+offset) return 2;
    if(s<1600+offset) return 3;
    if(s<1920+offset) return 4;
    if(s<2280+offset) return 5;
    else return 6;
  }

  const scrollRef=useRef(null);
  useEffect(()=>{
    function onScrollHandler(){
      const s2i=scrollToIndex(scrollRef.current?.scrollLeft);
      setIndex(s2i);
    }
    //add event listener
    scrollRef.current?.addEventListener('scroll', onScrollHandler);
    return ()=>{
      //remove event listener
      scrollRef.current?.removeEventListener('scroll', onScrollHandler);
    }
  }, [])
  return(
    <div className='overflow-hidden'>
      <div className='h-[105px] mt-8'>
      <h2 style={{fontFamily:'iceJaram', fontSize:25, color:'white', whiteSpace:'pre-wrap'}}>
        {`“${practiceTexts[index]?.Title1}”`}
      </h2>
      <h2 style={{ fontSize:20, color:'white'}}>{practiceTexts[index]?.Title2}</h2>
      </div>
      <div ref={scrollRef} className='w-[390px] h-auto overflow-x-scroll noscrollbar'>
        <div className='w-[2800px]'>
          <img src="/images/etc/behind_photos.png" alt="costume1" className=""/>
        </div>
      </div>
      <h2 key={index} className='p-8 text-white font-light fade-in'>{practiceTexts[index]?.Text}</h2>

    </div>
  )
}