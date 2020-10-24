import { useEffect } from 'react';
import Minititle from './Minititle';
import charming from 'charming';
import enami from 'enami';

export default function HowTo() {
  useEffect(() => {

    const element = document.querySelectorAll('[data-charming-lines]')
    element.forEach(e => {
      charming(e, {
        setClassName: function (index, word) {
          if (word != " ") {
            return `index-${index} word`
          }
        },
        split: function (string) {
          return string.split(/(\s+)/);
        }
      })

    });

    // new enami({
    //   // threshold: .5,
    //   selector: '#howto',
    //   reset: true,
    //   once: false,
    // });


  })


  return (
    <section id="howto" >
      <div className="container">
        <Minititle>HOW TO USE</Minititle>
        <div>
          <p><span><span className="number">1.</span> Add enami.js script </span><code>&lt;script src=&quot;https://unpkg.com/enami@0.1.0/dist/index.js&quot;&gt;&lt;/script&gt;</code></p>
          <p><span><span className="number">2.</span> Add data-enami attribute to your elements </span><code>&lt;h2 data-enami=&quot;fade-up&quot;&gt;&lt;/h2&gt;</code></p>
          <p><span><span className="number">3.</span> Initialize the script </span><code>&lt;script&gt; new enami();  &lt;/script&gt;</code></p>
        </div>
      </div>
    </section>
  );

}