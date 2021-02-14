import HomeHead from '../components/HomeHead';
import Animatron from '../components/Animatron';
// import Demo from '../components/Demo';
import Minititle from '../components/Minititle';
import About from '../components/About';
import HowTo from '../components/HowTo';
import Head from 'next/head'
import Events from '../components/Events';
import { Toaster } from 'react-hot-toast';


// Demos
import Base from '../components/demo/Base';
import Once from '../components/demo/Once';
import Offset from '../components/demo/Offset';
import Delay from '../components/demo/Delay';
import Stagger from '../components/demo/Stagger';

export default function Home() {



  return (
    <main id="main-wrapper">

      <Toaster position="bottom-center" />

      <Head>
        <title>enami.js — a simple animation-on-scroll library</title>
        {/* <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏄‍♂️</text></svg>" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="img/favicon/site.webmanifest" />
        <link rel="mask-icon" href="img/favicon/safari-pinned-tab.svg" color="#002665" />
        <link rel="shortcut icon" href="img/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#002665" />
        <meta name="msapplication-config" content="img/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#002665" />

      </Head>


      <HomeHead />

      <About />

      <HowTo />


      <section id="animations">
        <div className="container">
          <Minititle>ENAMI PRE-BUILT ANIMATIONS (enami.css)</Minititle>

        </div>

        <Animatron />


      </section>

      <div className="container">
        <Minititle>DEMOS</Minititle>
      </div>



      <Base />
      <Once />
      <Offset />
      <Delay />
      <Stagger />






      <div className="container">
        <Minititle>METHODS AND EVENTS</Minititle>
        <Events />
      </div>








    </main>
  )
}
