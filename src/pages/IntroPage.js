import Header from "components/Header";
import {IntroDawn, IntroGreeting} from "components/IntroContents";
import IntroHeaderTab from "components/IntroHeaderTab";
import {WaveTop2, WaveTop1} from "components/Wave";
import { useEffect, useState } from "react";
import { OrganizationChart } from "components/IntroContents";


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

      <div className="absolute top-0 z-10">
        <WaveTop1 color="white" className="absolute top-0 w-full"/>
        <WaveTop2 className="absolute top-0"/>
      </div>

      {index===0? <IntroDawn/>:
      index===1? <IntroGreeting/>:
      index===2? <OrganizationChart/>: null
      }
      </div>
    </div>
  );
}