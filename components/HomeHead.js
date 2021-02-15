import { useEffect } from 'react';
import charming from 'charming';
import { useMediaQuery } from 'react-responsive'
import enami from 'enami';
// import enami from '../../enami/src/index.js';

export default function HomeHead() {
  useEffect(() => {

    const element = document.querySelectorAll('[data-charming]')
    element.forEach(e => {
      charming(e, {
        setClassName: function (index, letter) {
          return `index-${index} letter-${letter}`
        }
      })
    });


    new enami({
      // threshold: .5,
      selector: '#top'
    });

  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
  return (

    <div id="top">


      <header id="main-header">
        <h1 className="enami-logo" data-charming="" data-enami-once="true" data-enami-children="span" data-enami-stagger=".1s">enami.js</h1>

        <h2 data-charming="" data-enami-children="span" data-enami-stagger=".02s" data-enami-reset data-enami-delay=".8s">a simple animation-<br />on-scroll library</h2>
        <div className="badge">5kb minified!</div>
        <div className="buttons">
          <a href="https://github.com/EnzoEmb/enami/archive/0.8.0.zip" className="btn-green">Download</a>
          <a href="https://github.com/EnzoEmb/enami" className="btn-green--border">Check on Github</a>
        </div>
      </header>

      { !isTabletOrMobile ? <figure data-enami-children="span > span" data-enami-stagger=".05s" data-enami-delay="0">
        <div className="row">
          {[...Array(16)].map((e, i) => <span key={i}><span></span></span>)}
        </div>
        <div className="row">
          {[...Array(16)].map((e, i) => <span key={i}><span></span></span>)}
        </div>
        <div className="row">
          {[...Array(16)].map((e, i) => <span key={i}><span></span></span>)}
        </div>
        <div className="row">
          {[...Array(16)].map((e, i) => <span key={i}><span></span></span>)}
        </div>
        <div className="row">
          {[...Array(16)].map((e, i) => <span key={i}><span></span></span>)}
        </div>
        <div className="row">
          {[...Array(16)].map((e, i) => <span key={i}><span></span></span>)}
        </div>
        <div className="row">
          {[...Array(16)].map((e, i) => <span key={i}><span></span></span>)}
        </div>
      </figure>


        : null}


    </div>)
}