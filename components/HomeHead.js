import { useEffect } from 'react';
// import dynamic from 'next/dynamic'
import charming from 'charming';


// import { useEffect } from 'react';

import * as enami from 'enami';

export default function HomeHead() {
  useEffect(() => {

    const element = document.querySelectorAll('[data-splitting]')
    element.forEach(e => {
      charming(e, {
        setClassName: function (index, letter) {
          return `index-${index} letter-${letter}`
        }
      })

    });


    new enami({
      threshold: .5
    });

  })
  return (

    <div id="top">


      <header id="main-header">
        <h1 data-splitting="" data-enami-once="true" data-enami-children="span" data-enami-stagger=".05s">enami.js</h1>

        <h2 data-splitting="" data-enami-children="span" data-enami-stagger=".05s" data-enami-reset
          data-enami-delay=".4s">a simple animation-<br />on-scroll library</h2>
        <div className="badge">only 3kb minified!</div>
        <div className="buttons">
          <a href="#" className="btn-green">Download</a>
          <a href="#" className="btn-green--border">Check on Github</a>
        </div>
      </header>


      <figure data-enami-children="span > span" data-enami-stagger=".05s" data-enami-delay="0">
        {[...Array(150)].map((e, i) => <span key={i}><span></span></span>)
        }

      </figure>
    </div>)
}