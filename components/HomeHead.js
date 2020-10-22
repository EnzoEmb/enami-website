import { useEffect } from 'react';
// import dynamic from 'next/dynamic'
import charming from 'charming';

import { useMediaQuery } from 'react-responsive'

import enami from 'enami';

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
      threshold: .5,
      selector: '#top'
    });

  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
  return (

    <div id="top">


      <header id="main-header">

        <div className="logo" data-enami-once="true" data-enami-children=".enami-logo" data-enami-stagger=".05s">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 241.4 64.5"  >
              <g className="enami-logo"><path className="enami-logo-letter" d="M44.8,42.8H7.6c0.9,9,7.6,14.6,15,14.6c6,0,10.5-2.6,12.4-7.7h8.5C41,57.9,33,64.4,22.8,64.4
		C9.8,64.4,0,53.9,0,40.8s9.8-23.7,22.8-23.7C35.7,17.1,45,27.6,45,39.7C45,40.5,44.9,41.1,44.8,42.8z M37.2,36.1
		c-0.4-6.4-6.9-11.9-14.5-11.9c-6.7,0-13,4.1-14.7,11.9H37.2z"></path></g>
              <g className="enami-logo"><path className="enami-logo-letter" d="M49.6,18.4h7.3V27c2.5-5.8,8.9-9.9,16.5-9.9c11.9,0,18.1,7.5,18.1,21.8v24.3h-7.6V39
		c0-10.3-4.7-14.9-12.5-14.9c-7.5,0-14.3,5.9-14.3,15.5v23.6h-7.6V18.4H49.6z"></path></g>
             <g className="enami-logo"> <path className="enami-logo-letter" d="M96.3,40.8c0-13.1,9.4-23.6,21.6-23.6c8.1,0,14.8,4.2,17.8,10.9v-9.6h7.3v44.8h-7.3v-9.5
		c-3,6.6-9.8,10.8-17.8,10.8C105.7,64.5,96.3,54,96.3,40.8z M135.5,40.8c0-9.3-7.1-16.6-15.8-16.6s-15.9,6.9-15.9,16.6
		c0,9.9,7.2,16.6,15.8,16.6C128.4,57.4,135.5,50.2,135.5,40.8z"></path></g>
            <g className="enami-logo">  <path className="enami-logo-letter" d="M223.8,38.9v24.3h-7.5V39c0-10.3-4.4-14.9-11.6-14.9c-6.8,0-13.1,6.3-13.1,15.5v23.6h-7.5V39
		c0-10.3-4.4-14.9-11.5-14.9c-6.9,0-13.1,6.3-13.1,15.5v23.6H152V18.4h7.1l0.1,8.7c2.3-5.6,8.2-9.9,15.4-9.9c8,0,13.3,3.9,15.6,11.5
		c3.5-7.6,9.5-11.5,16.5-11.5C217.9,17.1,223.8,24.6,223.8,38.9z"></path></g>
             <g className="enami-logo"> <path className="enami-logo-letter" d="M232.4,18.4h7.6v44.8h-7.6V18.4z" ></path></g>
             {/* <g className="enami-logo"> <path className="enami-logo-i" d="M231,4.8c0-2.6,2-4.8,5.1-4.8c3.2,0,5.2,2.2,5.2,4.8c0,2.7-2,4.8-5.2,4.8C233,9.6,231,7.5,231,4.8z" ></path></g> */}
             <g className="enami-logo-i">
            <circle className="enami-logo-letter" cx="236.2" cy="5.2" r="5.2" />
            </g>
          </svg>


        </div>

        {/* <h1 data-charming="" data-enami-once="true" data-enami-children="span" data-enami-stagger=".05s">enami.js</h1> */}

        <h2 data-charming="" data-enami-children="span" data-enami-stagger=".05s" data-enami-reset data-enami-delay=".4s">a simple animation-<br />on-scroll library</h2>
        <div className="badge">only 3kb minified!</div>
        <div className="buttons">
          <a href="#" className="btn-green">Download</a>
          <a href="#" className="btn-green--border">Check on Github</a>
        </div>
      </header>

      { !isTabletOrMobile ? <figure data-enami-children="span > span" data-enami-stagger=".05s" data-enami-delay="0">
        {[...Array(150)].map((e, i) => <span key={i}><span></span></span>)}
      </figure> : null}

    </div>)
}