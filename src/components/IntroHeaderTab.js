import {HexagonPath, DawnPath, CrownPath, CubePath, Line} from 'svgpaths'


export default function IntroHeaderTab({index, setIndex}) {

  return (
    <div className='relative'>
      <span className='w-[70%] h-1 absolute top-16 left-[15%] border-b-2 border-[rgba(172, 167, 130, 0.3)]'/>
      <div className='flex justify-between items-center pt-5 bg-white h-[10rem]'>
        <IntroTabIcon onClick={()=>setIndex(0)} selected={index===0} label={"새벽 소개"} innerIconPath={<DawnPath color='white'/>}/>
        <IntroTabIcon onClick={()=>setIndex(1)} selected={index===1} label={"총괄 인사말"} innerIconPath={<CrownPath color='white'/>}/>
        <IntroTabIcon onClick={()=>setIndex(2)} selected={index===2} label={"새벽 조직도"} innerIconPath={<CubePath color='white'/>}/>
      </div>
    </div>
    
  )

}


function IntroTabIcon({selected=true, innerIconPath, label, onClick}) {

  return (
    <div className='w-[120px] h-full relative' onClick={onClick}>

    <div className='w-full flex justify-center' 
    style={{
      transform: selected?'scale(1) translateY(-8px)':'scale(1) translateY(0)',
      transitionProperty: 'transform',
      transitionDuration: '0.3s',
    }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="90" viewBox="0 0 100 100" fill="none" className='absolute t-0 l-0'
    style={{
      filter: `drop-shadow(0px 8px 8px ${selected?'rgba(70,200,224,0.8)':'rgba(226,218,154,0.5)'}`,
    }}
    >
    <HexagonPath color={selected?"#60E4F1":'#F5EEB9'} strokeWidth={selected?5:2}/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="90" viewBox="0 0 100 100" fill="none"  className='absolute t-0 l-0'>
    {innerIconPath}
    </svg>
    </div>

    <h1 className='mt-[6rem] font-bold'
      style={{
        color: selected?'#39D6E5':'#E8C64D',
      }}
    >
      {label}
    </h1>
    </div>
  );
}