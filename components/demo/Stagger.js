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
          <h2 className="demo-title">Staggering</h2>
          <p>Use the <span className="badge">data-enami-stagger=".05s"</span> along with the <span className="badge">data-enami-children=".my-children-selector"</span> and <span className="badge">data-enami-animation="fade-up"</span> to make a staggering effect on the children elements</p>
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



  const htmlCode = `<section id="demo" data-enami-children=".demo-dot" data-enami-animation="scale-in" data-enami-stagger=".2s">
  <div class="demo-dot">1</div>
  <div class="demo-dot">2</div>
  <div class="demo-dot">3</div>
  <div class="demo-dot">4</div>
  <div class="demo-dot">5</div>
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

        : <CodeContent/>}

      <div className="demo-buttons">
        <button onClick={() => setTab('demo')} className={tab == 'demo' ? 'active' : ''}>Demo</button>
        <button onClick={() => setTab('code')} className={tab == 'code' ? 'active' : ''}>Code</button>
      </div>
    </div>
  )
}