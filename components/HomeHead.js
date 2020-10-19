import {useEffect} from 'react';
import dynamic from 'next/dynamic'

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from 'splitting'
// let myClientPkg;

// if (typeof window !== 'undefined') {
// }
// 
// 
// import Splitting from "splitting";
// 


// const Splitting = dynamic(() =>
//   import('splitting').then((mod) => mod())
// )


const Splitting = dynamic(
  () => import('splitting'),
  { ssr: false }
)


export default function HomeHead(){
  useEffect(() => {


    // useEffect(() => {

      if (typeof window !== "undefined") {
      Splitting()
      }
      // return () => {
      //   Splitting()
      // }

    // Splitting({
    //   target: "[data-splitting]",
    //   by: "chars",
    //   key: null
    // });


    // Splitting()

    
// async function importSplittingModule(cb) {
//   const { default: Splitting } = await import("splitting")
 
//   console.log(Splitting())
//   // cb()
// }


  })
    return (

        <div id="top">
  
  
          <header id="main-header">
            <h1 data-splitting="" data-enami-once="true" data-enami-children=".char" data-enami-stagger=".05s">enami.js</h1>
            <h2 data-splitting="" data-enami-children=".char" data-enami-stagger=".05s" data-enami-reset
              data-enami-delay=".4s">a simple animation-<br />on-scroll library</h2>
            <div className="badge">only 3kb minified!</div>
            <div className="buttons">
              <a href="#" className="btn-green">Download</a>
              <a href="#" className="btn-green--border">Check on Github</a>
            </div>
          </header>
  
  
          <figure data-enami-children="span > span" data-enami-stagger=".05s" data-enami-delay="0">
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
            <span><span></span> </span>
          </figure>
        </div>)
}