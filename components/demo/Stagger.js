import { useEffect, useState } from 'react';
// import enami from 'enami';
import enami from '../../../enami/src/index.js';


export default function Demo(props) {
  return (

    <article className="demo">
      <div className="container">
        <aside>
          <h2 className="demo-title">Staggering</h2>
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
      selector: '#demo-stagger',
      // reset: false,
      // offset: '0% 0% -50% 0%',
      once: false,
      // root: document.querySelector('#demo-stagger')
    });

    var myEnami = document.getElementById('demo-stagger')

    myEnami.addEventListener('enami:animate-in', function (e) {
      // alert('Hello World')
    });

  })

  const [tab, setTab] = useState('demo');

  return (

    <div className="demo-container" id="demo-stagger">
      {tab == 'demo' ? <div className="demo-content" data-enami-animation="fade-up" data-enami-children=".demo-dot" data-enami-stagger=".05s">
        {[...Array(40)].map((e, i) =>
          <div className="demo-dot--container" key={i}>
            <div className="demo-dot" >{i + 1}</div>
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