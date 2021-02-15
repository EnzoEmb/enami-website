import { useEffect, useState } from 'react';
import enami from 'enami';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Minititle from '../Minititle';


export default function Demo(props) {
  return (

    <article className="demo">
      <div className="container">
        <aside>
          <h2 className="demo-title">Once: false</h2>
          <p>Add the setting <span className="badge">once: false</span> to trigger the animation every time its on viewport</p>
        </aside>
        <DemoContent />
      </div>
    </article>
  )
}


function CodeContent() {



  const jsCode = `new enami({
  selector: '#demo',
  once: false,
});
    `;



  const htmlCode = `<section id="demo">
  <div class="demo-dot" data-enami="scale-in">1</div>
  <div class="demo-dot" data-enami="scale-in">2</div>
  <div class="demo-dot" data-enami="scale-in">3</div>
  <div class="demo-dot" data-enami="scale-in">4</div>
  <div class="demo-dot" data-enami="scale-in">5</div>
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
      selector: '#demo-once',
      // reset: false,
      once: false,
    });

  })

  const [tab, setTab] = useState('demo');

  return (

    <div className="demo-container" id="demo-once">
      {tab == 'demo' ? <div className="demo-content">
        {[...Array(40)].map((e, i) =>
          <div className="demo-dot--container" key={i}>
            <div className="demo-dot" data-enami="scale-in">{i + 1}</div>
          </div>
        )}
      </div>

        : <CodeContent/>}

      <div className="demo-buttons">
        <button onClick={() => setTab('demo')} className={tab == 'demo' ? 'active' : ''}>Demo</button>
        <button onClick={() => setTab('code')} className={tab == 'code' ? 'active' : ''}>Code</button>
      </div>
    </div>
  )
}