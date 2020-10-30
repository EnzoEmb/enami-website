import { useState, useEffect } from 'react';
// import enami from 'enami';

export default function Animatron() {
    // useEffect(() => {

    //     new enami({
    //         threshold: .5,
    //         selector: '#animatron'
    //     });

    // })


    var [atributo, setAtributo] = useState(0);

    return (
        <div className="container" id="animatron">
            <div className="animation-demo">
                <div className="animations-zone">
                    <div className="ani" data-enami={atributo} data-enami-in>
                        <span>🏄‍♂️</span>
                    </div>
                </div>
                <div className="animations-list">
                    <button onClick={() => setAtributo("fade-up")}>Fade Up <div className="badge">fade-up</div></button>
                    <button onClick={() => setAtributo("fade-left")}>Fade Left <div className="badge">fade-left</div></button>
                    <button onClick={() => setAtributo("fade-right")}>Fade Right <div className="badge">fade-right</div></button>
                    <button onClick={() => setAtributo("fade-down")}>Fade Down <div className="badge">fade-down</div></button>
                    <button onClick={() => setAtributo("jump-up")}>Jump Up <div className="badge">jump-up</div></button>
                    <button onClick={() => setAtributo("jump-left")}>Jump Left <div className="badge">jump-left</div></button>
                    <button onClick={() => setAtributo("jump-right")}>Jump Right <div className="badge">jump-right</div></button>
                    <button onClick={() => setAtributo("jump-down")}>Jump Down <div className="badge">jump-down</div></button>
                    <button onClick={() => setAtributo("scale-in")}>Scale In <div className="badge">scale-in</div></button>
                    <button onClick={() => setAtributo("scale-up")}>Scale Up <div className="badge">scale-up</div></button>
                    <button onClick={() => setAtributo("scale-left")}>Scale Left <div className="badge">scale-left</div></button>
                    <button onClick={() => setAtributo("scale-right")}>Scale Right <div className="badge">scale-right</div></button>
                </div>
            </div>
        </div>)
}