import Minititle from './Minititle';
import HowToCode from './HowToCode';

export default function HowTo() {

  return (
    <section id="howto" >
      <div className="container">
        <Minititle>HOW TO USE</Minititle>
        <div>
          <HowToCode number="1" title="Add enami.js script">
            &lt;<span className="red">script</span> <span className="green">src</span>=&quot;<span className="yellow">https://unpkg.com/enami@0.1.0/dist/index.js</span>&quot;&gt;&lt;/<span className="red">script</span>&gt;
          </HowToCode>
          <HowToCode number="2" title="Add data-enami attribute to your elements">
            &lt;<span className="red">h2</span> <span className="green">data-enami</span>=&quot;<span className="yellow">fade-up</span>&quot;&gt;&lt;/<span className="red">h2</span>&gt;
          </HowToCode>
          <HowToCode number="3" title="Initialize the script">
            &lt;<span className="red">script</span>&gt; <span className="grey">new</span> <span className="cyan">enami()</span>;  &lt;/<span className="red">script</span>&gt;
          </HowToCode>


        </div>
      </div>
    </section>
  );

}