import HomeHead from '../components/HomeHead';
import Animatron from '../components/Animatron';
import 'enami';



export default function Home() {
  return (
    <main id="main-wrapper">

      <HomeHead />

      <section id="about">
        <div className="container">
          <h4 className="minititle">ABOUT</h4>
          <p data-splitting-lines data-enami-reset data-enami-children=".word" data-enami-stagger=".05s">enami.js provides
          an easy way to animate elements on visibility, it uses the Intersection Observer API to add attributes and
          inline styles to elements visible on the screen. It also includes a css library with multiple animations you
          can use.</p>
        </div>
      </section>

      <section id="animations">
        <div className="container">
          <h4 className="minititle">ENAMI PRE-BUILT ANIMATIONS (enami.css)</h4>

        </div>

        <Animatron />


      </section>

      <article className="demo">
        <div className="container">
          <aside>
            <h2 className="demo-title">Basic Setup</h2>
            <p>Add the <span className="badge">data-enami="animation-name"</span> attribute on the elements you want to
            animate and initiate a new enami</p>
          </aside>
          <div className="demo-content">
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">1</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">2</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">3</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">4</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">5</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">6</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">7</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">8</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">9</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">10</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">1</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">2</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">3</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">4</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">5</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">6</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">7</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">8</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">9</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">10</div>
            </div>
          </div>
        </div>
      </article>

      <article className="demo">
        <div className="container">
          <aside>
            <h2 className="demo-title">Basic Setup FF TEST</h2>
            <p>Add the <span className="badge">data-enami="animation-name"</span> attribute on the elements you want to
            animate and initiate a new enami</p>
          </aside>
          <div className="demo-content">

            <div className="demo-dot" data-enami="scale-in">1</div>

            <div className="demo-dot" data-enami="scale-in">2</div>

            <div className="demo-dot" data-enami="scale-in">3</div>

            <div className="demo-dot" data-enami="scale-in">4</div>

            <div className="demo-dot" data-enami="scale-in">5</div>

            <div className="demo-dot" data-enami="scale-in">6</div>

            <div className="demo-dot" data-enami="scale-in">7</div>

            <div className="demo-dot" data-enami="scale-in">8</div>

            <div className="demo-dot" data-enami="scale-in">9</div>

            <div className="demo-dot" data-enami="scale-in">10</div>

            <div className="demo-dot" data-enami="scale-in">1</div>

            <div className="demo-dot" data-enami="scale-in">2</div>

            <div className="demo-dot" data-enami="scale-in">3</div>

            <div className="demo-dot" data-enami="scale-in">4</div>

            <div className="demo-dot" data-enami="scale-in">5</div>

            <div className="demo-dot" data-enami="scale-in">6</div>

            <div className="demo-dot" data-enami="scale-in">7</div>

            <div className="demo-dot" data-enami="scale-in">8</div>

            <div className="demo-dot" data-enami="scale-in">9</div>

            <div className="demo-dot" data-enami="scale-in">10</div>
          </div>
        </div>
      </article>



      <article className="demo">
        <div className="container">
          <aside>
            <h2 className="demo-title">Parent Setup</h2>
            <p>Add the <span className="badge">data-enami-children="selector"</span> attribute on an elements, and all
            selector inside that match the selector will be animated when the parent is visible.</p>
          </aside>
          <div className="demo-content">
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">1</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">2</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">3</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">4</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">5</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">6</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">7</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">8</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">9</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">10</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">1</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">2</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">3</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">4</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">5</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">6</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">7</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">8</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">9</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">10</div>
            </div>
          </div>
        </div>
      </article>

      <article className="demo">
        <div className="container">
          <aside>
            <h2 className="demo-title">Stagger Setup</h2>
            <p>Add the <span className="badge">data-enami-stagger=".2s"</span> attribute on a parent element and all the
            children elements will get a delay inline style to create a stagger effect</p>
          </aside>
          <div className="demo-content" data-enami-children=".demo-dot" data-enami-stagger=".1s" data-enami-reset>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">1</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">2</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">3</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">4</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">5</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">6</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">7</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">8</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">9</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">10</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">1</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">2</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">3</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">4</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">5</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">6</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">7</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">8</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">9</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-duration="1s">10</div>
            </div>
          </div>
        </div>
      </article>

      <article className="demo">
        <div className="container">
          <aside>
            <h2 className="demo-title">Animation Delay</h2>
            <p>Add the <span className="badge">data-enami-delay=".2s"</span> attribute on a element to add a inline
            transition-animation delay property</p>
          </aside>
          <div className="demo-content sm">
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-delay=".1s">.1s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-delay=".2s">.2s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-delay=".3s">.3s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-delay=".8s">.8s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-delay="1000ms">1000ms</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-delay="1.5s">1.5s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-delay="2s">2s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-delay="3s">3s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-delay="4s">4s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-reset data-enami-delay="5s">5s</div>
            </div>
          </div>
        </div>
      </article>

      <article className="demo">
        <div className="container">
          <aside>
            <h2 className="demo-title">Animation duration</h2>
            <p>Add the <span className="badge">data-enami-duration=".2s"</span> attribute on a element to add a inline
            transition-animation duration property</p>
          </aside>
          <div className="demo-content" id="duration">
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-duration=".1s">.1s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-duration=".5s">.5s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-duration="1s">1s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-duration="2s">2s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-duration="5s">5s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-duration="6s">6s</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">7</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">8</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">9</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">10</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">1</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">2</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">3</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">4</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">5</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">6</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">7</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">8</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">9</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in">10</div>
            </div>
          </div>
        </div>
      </article>


      <article className="demo">
        <div className="container">
          <aside>
            <h2 className="demo-title">Animate once</h2>
            <p>Add the <span className="badge">data-enami-once</span> attribute to animate the element only the first time its
            in view</p>
          </aside>
          <div className="demo-content">
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>1</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>2</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>3</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>4</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>5</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>6</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>7</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>8</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>9</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>10</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>1</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>2</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>3</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>4</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>5</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>6</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>7</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>8</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>9</div>
            </div>
            <div className="demo-dot--container">
              <div className="demo-dot" data-enami="scale-in" data-enami-once>10</div>
            </div>
          </div>
        </div>
      </article>


    </main>
  )
}
