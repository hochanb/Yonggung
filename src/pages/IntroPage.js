import Header from "components/Header";
import {IntroDawn, IntroGreeting} from "components/IntroContents";
import IntroHeaderTab from "components/IntroHeaderTab";
import {WaveTop2, WaveTop1} from "components/Wave";
import { useEffect, useState } from "react";
import { OrganizationChart } from "components/IntroContents";
import Bubble from "components/Bubble";


export default function IntroPage() {
  const [index, setIndex] = useState(0);

  return (
    <div 
    style={{
      width: '100vw',
      height: '100vh',
      overflow: 'scroll',
      background: 'var(--unnamed, linear-gradient(135deg, #4DEDED 0%, #A9C1FF 72.40%, #8B91FF 100%))',
      position: 'relative',
    }}>
      <Header>
        <h1 className="text-2xl text-center font-coralblue">창작집단: 새벽</h1>
      </Header>
      <IntroHeaderTab index={index} setIndex={setIndex}/>
      <div className="relative">

      <div className="absolute top-0 z-10 w-full">
        <WaveTop1 color="white" className="absolute top-0 w-full"/>
        <WaveTop2 className="absolute top-0 w-full"/>
      </div>

      {index===0? <IntroDawn/>:
      index===1? <IntroGreeting/>:
      index===2? <OrganizationChart/>: null
      }

      <Bubble left={243} top={68}  scale={0.4}/>
      <Bubble left={50} top={145}  scale={0.2}/>
      <Bubble left={360} top={159}  scale={0.6}/>
      <Bubble left={30} top={260}  scale={0.8}/>
      <Bubble left={260} top={270}  scale={0.4}/>

      </div>
    </div>
  );
}