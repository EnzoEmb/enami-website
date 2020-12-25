import HomeHead from '../components/HomeHead';
import Animatron from '../components/Animatron';
import Demo from '../components/Demo';
import Minititle from '../components/Minititle';
import About from '../components/About';
import HowTo from '../components/HowTo';

// import { useEffect } from 'react';

// import * as enami from 'enami';

export default function Home() {


  // useEffect(() => {
  //   const asd = new enami({
  //     once: false,
  //     threshold: .5
  //   });
  // });


  return (
    <main id="main-wrapper">

      <HomeHead />

      <About />

      <HowTo />


      <section id="animations">
        <div className="container">
          <Minititle>ENAMI PRE-BUILT ANIMATIONS (enami.css)</Minititle>

        </div>

        <Animatron />


      </section>

      <div className="container">
        <Minititle>DEMOS</Minititle>
      </div>

      {/* <Demo title="Demo component title" summary={["Add the ", <span className="badge" key={0}>data-enami="animation-name"</span>, " attribute on an elements, and all selector inside that match the selector will be animated when the parent is visible."]} />


      <Demo title="Parent" summary={["Add the ", <span className="badge" key={0}>data-enami="animation-name"</span>, " attribute on an elements, and all selector inside that match the selector will be animated when the parent is visible."]} />



      <Demo title="Stagger" summary={["Add the ", <span className="badge" key={0}>data-enami="animation-name"</span>, " attribute on an elements, and all selector inside that match the selector will be animated when the parent is visible."]} />


      <Demo title="Animation Delay" summary={["Add the ", <span className="badge" key={0}>data-enami="animation-name"</span>, " attribute on an elements, and all selector inside that match the selector will be animated when the parent is visible."]} />


      <Demo title="Animation Duration" summary={["Add the ", <span className="badge" key={0}>data-enami="animation-name"</span>, " attribute on an elements, and all selector inside that match the selector will be animated when the parent is visible."]} />



      <Demo title="Animate Once" summary={["Add the ", <span className="badge" key={0}>data-enami="animation-name"</span>, " attribute on an elements, and all selector inside that match the selector will be animated when the parent is visible."]} /> */}


      <div className="container">
        <Minititle>METHODS</Minititle>

      </div>






      <div className="container">
        <Minititle>EVENTS</Minititle>

      </div>






    </main>
  )
}
