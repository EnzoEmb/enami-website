import { useEffect, useState } from 'react';
// import enami from 'enami';
import enami from '../../../enami/src/index.js';


export default function Demo(props) {
  return (

    <article className="demo">
      <div className="container">
        <aside>
          <h2 className="demo-title">Offset</h2>
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
      selector: '#demo-offset .demo-content',
      // reset: false,
      offset: '0% 0% -50% 0%',
      once: false,
      root: document.querySelector('#demo-offset')
    });

  })

  const [tab, setTab] = useState('demo');

  return (

    <div className="demo-container" id="demo-offset">
      {tab == 'demo' ? <div className="demo-content">
        {[...Array(40)].map((e, i) =>
          <div className="demo-dot--container" key={i}>
            <div className="demo-dot" data-enami="scale-in">{i + 1}</div>
          </div>
        )}
      </div>

        : <div class="demo-content">Hola que tal</div>}

      <div className="demo-buttons">
        <button onClick={() => setTab('demo')} className={tab == 'demo' ? 'active' : ''}>Demo</button>
        <button onClick={() => setTab('code')} className={tab == 'code' ? 'active' : ''}>Code</button>
      </div>
    </div>
  )
}