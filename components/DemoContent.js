import { useState } from 'react';
export default function DemoContent() {

    const [tab, setTab] = useState('demo');

    return (

        <div className="demo-container">
            {tab == 'demo' ? <div class="demo-content">
                {[...Array(20)].map((e, i) =>
                    <div className="demo-dot--container">
                        <div className="demo-dot" data-enami="scale-in" key={i}>{i}</div>
                    </div>
                )}
            </div>

                : <div class="demo-content">Hola que tal</div>}

            <div className="demo-buttons">
                <button onClick={() => setTab('demo')} class={tab == 'demo' ? 'active' : ''}>Demo</button>
                <button onClick={() => setTab('code')} class={tab == 'code' ? 'active' : ''}>Code</button>
            </div>
        </div>
    )
}