import { useEffect, useState } from 'react';
import enami from 'enami';
// import enami from '../../../enami/src/index.js';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Minititle from '../Minititle';

export default function Demo(props) {
  return (

    <article className="demo">
      <div className="container">
        <aside>
          <h2 className="demo-title">Delay</h2>
          <p>Add the <span className="badge">data-enami-delay="1s"</span> attribute to change the animation delay</p>
        </aside>
        <DemoContent />
      </div>
    </article>
  )
}



function CodeContent() {



  const jsCode = `new enami({
  selector: '#demo',
});
    `;



  const htmlCode = `<section id="demo">
  <div class="demo-dot" data-enami="scale-in" data-enami-delay="1s">1</div>
  <div class="demo-dot" data-enami="scale-in" data-enami-delay="2s">2</div>
  <div class="demo-dot" data-enami="scale-in" data-enami-delay="3s">3</div>
  <div class="demo-dot" data-enami="scale-in" data-enami-delay="4s">4</div>
  <div class="demo-dot" data-enami="scale-in" data-enami-delay="5s">5</div>
</section>
  `;

  return (
    <div className="demo-content">
      <Minititle>JS</Minititle>
      <SyntaxHighlighter language="javascript" style={monokai}>
        {jsCode}
      </SyntaxHighlighter>

      <Minititle>HTML</Minititle>
      <SyntaxHighlighter language="xml" style={monokai}>
        {htmlCode}
      </SyntaxHighlighter>

    </div>)

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

        : <CodeContent/>}

      <div className="demo-buttons">
        <button onClick={() => setTab('demo')} className={tab == 'demo' ? 'active' : ''}>Demo</button>
        <button onClick={() => setTab('code')} className={tab == 'code' ? 'active' : ''}>Code</button>
      </div>
    </div>
  )
}