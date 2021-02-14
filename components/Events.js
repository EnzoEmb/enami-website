import Minititle from '../components/Minititle';
import enami from 'enami';
import { useEffect } from 'react';



export default function Events() {


  var myEnami;
  var enami18
  useEffect(() => {


    // events
    enami18 = document.getElementById('e18')
    var events = document.getElementById('events-content')

    enami18.addEventListener('enami:animate-in', function (e) {
      events.innerHTML += '<p><span>Item 18: </span> In viewport</p>'
      events.scrollTop = events.scrollHeight;
    });
    enami18.addEventListener('enami:animate-out', function (e) {
      events.innerHTML += '<p><span>Item 18: </span> Out of viewport</p>'
      events.scrollTop = events.scrollHeight;
    });
    enami18.addEventListener('enami:reset', function (e) {
      events.innerHTML += '<p>Reset triggered</p>'
      events.scrollTop = events.scrollHeight;
    });
    enami18.addEventListener('enami:update', function (e) {
      events.innerHTML += '<p>Update triggered</p>'
      events.scrollTop = events.scrollHeight;
    });
    enami18.addEventListener('enami:init', function (e) {
      events.innerHTML += '<p>Init triggered</p>'
      events.scrollTop = events.scrollHeight;
    });


  })

  function methodInit() {
    // myEnami.init();
    myEnami = new enami({
      selector: '#demo-events',
      once: false,
      root: document.querySelector('#demo-events')
    });
    myEnami.addEventListener('enami:destroy', function (e) {
      events.innerHTML += '<p>Destroy triggered</p>'
      events.scrollTop = events.scrollHeight;
    });


  }

  function methodDestroy() {
    myEnami.destroy();
  }

  function methodUpdate() {
    myEnami.update();
  }

  function methodReset() {
    myEnami.reset();
  }


  return (
    <div className="Events">
      <div className="EventsContainer">
        <div className="events">
          <Minititle>Events Log</Minititle>
          <div id="events-content"></div>
        </div>
        <div className="demo">
          <Minititle>Demo</Minititle>
          <div className="demo-content" id="demo-events">
            <div className="dot event-dot" data-enami="fade-in" ><span>1</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>2</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>3</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>4</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>5</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>6</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>7</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>8</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>9</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>10</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>11</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>12</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>13</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>14</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>15</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>16</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>17</span></div>
            <div className="dot event-dot selected" data-enami="fade-in" id="e18"><span>18</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>19</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>20</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>21</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>22</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>23</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>24</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>25</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>26</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>27</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>28</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>29</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>30</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>31</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>32</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>33</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>34</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>35</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>36</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>37</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>38</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>39</span></div>
            <div className="dot event-dot" data-enami="fade-in" ><span>40</span></div>
          </div>
        </div>
        <div className="methods">
          <Minititle>Trigger Methods</Minititle>
          <div className="methods-content">
            <button onClick={methodInit}>Init</button>
            <button onClick={methodDestroy}>Destroy</button>
            <button onClick={methodReset}>Reset</button>
            <button onClick={methodUpdate}>Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}