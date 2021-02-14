import { useEffect, useState } from 'react';
import enami from 'enami';

export default function DemoContent() {
    
    useEffect(()=>{

    new enami({
        // threshold: .5,
        selector: '#demo',
        // reset: false,
        // once: true,
      });
  
    })

    const [tab, setTab] = useState('demo');

    return (

        <div className="demo-container" id="demo">
            {tab == 'demo' ? <div className="demo-content">
                {[...Array(20)].map((e, i) =>
                    <div className="demo-dot--container" key={i}>
                        <div className="demo-dot" data-enami="scale-in">{i}</div>
                    </div>
                )}
            </div>

                : <div class="demo-content">Hola que tal</div>}

            <div className="demo-buttons">
                <button onClick={() => setTab('demo')} className={tab == 'demo' ? 'active' : ''}>Demo</button>
                <button onClick={() => setTab('code')} className={tab == 'code' ? 'active' : ''}>Code</button>
            </div>
        </div>
    )
}