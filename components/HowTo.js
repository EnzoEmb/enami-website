import Minititle from './Minititle';
import HowToCode from './HowToCode';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function HowTo() {

  const scriptCode = `<script src="https://unpkg.com/enami@0.8.0/dist/enami.min.js"></script>`;
  const cssCode = `<link rel="stylesheet" href="https://unpkg.com/enami@0.8.0/dist/enami.min.css">`;
  const htmlCode = `<h2 data-enami="fade-up"></h2>`;
  const initCode = `<script>new enami();</script>`;

  return (
    <section id="howto" >
      <div className="container">
        <Minititle>HOW TO USE</Minititle>
        <div>
          <HowToCode number="1" title="Add enami.js script" copy={scriptCode}>
            <SyntaxHighlighter language="html" style={monokai}>
              {scriptCode}
            </SyntaxHighlighter>
          </HowToCode>

          <HowToCode number="2" title="Add enami.css style" copy={cssCode}>
            <SyntaxHighlighter language="html" style={monokai}>
              {cssCode}
            </SyntaxHighlighter>
          </HowToCode>

          <HowToCode number="3" title="Add data-enami attribute to your elements" copy={htmlCode}>
            <SyntaxHighlighter language="html" style={monokai}>
              {htmlCode}
            </SyntaxHighlighter>
          </HowToCode>

          <HowToCode number="4" title="Initialize the script" copy={initCode}>
            <SyntaxHighlighter language="html" style={monokai}>
              {initCode}
            </SyntaxHighlighter>
          </HowToCode>


        </div>
      </div>
    </section>
  );

}