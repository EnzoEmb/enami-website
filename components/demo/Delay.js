import { useEffect, useState } from 'react';
// import enami from 'enami';
import enami from '../../../enami/src/index.js';


export default function Demo(props) {
  return (

    <article className="demo">
      <div className="container">
        <aside>
          <h2 className="demo-title">Delay</h2>
          <p>Add the <span className="badge" key={0}>data-enami="animation-name"</span> attribute on an elements, and all selector inside that match the selector will be animated when the parent is visible."</p>
        </aside>
        <DemoContent />
      </div>
    </article>
  )
}


function DemoContent() {

  useEffect(() => {

    new enami({
      // threshold: .5,
      selector: '#demo-delay',
      // reset: false,
      // offset: '0% 0% -50% 0%',
      once: false,
    });

  })

  const [tab, setTab] = useState('demo');

  return (

    <div className="demo-container" id="demo-delay">
      {tab == 'demo' ? <div className="demo-content">

        <div className="demo-dot--container">
          <div className="demo-dot" data-enami="scale-in" data-enami-delay="3.5s">8</div>
        </div>
        <div className="demo-dot--container">
          <div className="demo-dot" data-enami="scale-in" data-enami-delay="1.5s">4</div>
        </div>
        <div className="demo-dot--container">
          <div className="demo-dot" data-enami="scale-in" data-enami-delay="2s">5</div>
        </div>
        <div className="demo-dot--container">
          <div className="demo-dot" data-enami="scale-in">1</div>
        </div>
        <div className="demo-dot--container">
          <div className="demo-dot" data-enami="scale-in" data-enami-delay="2.5s">6</div>
        </div>
        <div className="demo-dot--container">
          <div className="demo-dot" data-enami="scale-in" data-enami-delay=".5s">2</div>
        </div>
        <div className="demo-dot--container">
          <div className="demo-dot" data-enami="scale-in" data-enami-delay="4s">9</div>
        </div>
        <div className="demo-dot--container">
          <div className="demo-dot" data-enami="scale-in" data-enami-delay="1s">3</div>
        </div>
        <div className="demo-dot--container">
          <div className="demo-dot" data-enami="scale-in" data-enami-delay="3s">7</div>
        </div>
        <div className="demo-dot--container">
          <div className="demo-dot" data-enami="scale-in" data-enami-delay="4.5s">10</div>
        </div>


      </div>

        : <div class="demo-content">Hola que tal</div>}

      <div className="demo-buttons">
        <button onClick={() => setTab('demo')} className={tab == 'demo' ? 'active' : ''}>Demo</button>
        <button onClick={() => setTab('code')} className={tab == 'code' ? 'active' : ''}>Code</button>
      </div>
    </div>
  )
}