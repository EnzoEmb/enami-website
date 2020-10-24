import { useEffect } from 'react';
import Minititle from './Minititle';
import charming from 'charming';
import enami from 'enami';

export default function About() {
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

    new enami({
      // threshold: .5,
      selector: '#about',
      // reset: false,
      // once: true,
    });


  })


  return (
    <section id="about" >
      <div className="container">
        <Minititle>ABOUT</Minititle>
        <div data-charming-lines data-enami-children=".word" data-enami-stagger=".02s">
          <p>enami.js provides an easy way to animate elements on visibility, it uses the Intersection Observer API to add attributes and inline styles to elements visible on the screen. It also includes a css library with multiple animations you can use.</p>
        </div>
      </div>
    </section>
  );

}