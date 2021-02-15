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
          <h2 className="demo-title">Base Setup</h2>
          <p>Adding <span className="badge">data-enami="fade-up"</span> attribute on an elements</p>
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
      selector: '#demo',
      // reset: false,
      // once: true,
    });

  })

  const [tab, setTab] = useState('demo');

  return (

    <div className="demo-container" id="demo">
      {tab == 'demo' ? <div className="demo-content">
        {[...Array(40)].map((e, i) =>
          <div className="demo-dot--container" key={i}>
            <div className="demo-dot" data-enami="scale-in">{i + 1}</div>
          </div>
        )}
      </div>

        : <CodeContent />}

      <div className="demo-buttons">
        <button onClick={() => setTab('demo')} className={tab == 'demo' ? 'active' : ''}>Demo</button>
        <button onClick={() => setTab('code')} className={tab == 'code' ? 'active' : ''}>Code</button>
      </div>
    </div>
  )
}