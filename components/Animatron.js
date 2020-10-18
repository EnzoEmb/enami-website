import { useState } from 'react';

export default function Animatron() {
    var [atributo, setAtributo] = useState(0);

    return (
        <div className="container">
            <div className="animation-demo">
                <div className="animations-zone">
                    <div className="ani" data-enami={atributo} data-enami-in>
                        <span>🏄‍♂️</span>
                    </div>
                </div>
                <div className="animations-list">
                    <button onClick={() => setAtributo("fade-in")}>Fade Up <div className="badge">fade-up</div></button>
                    <button onClick={() => setAtributo("fade-left")}>Fade Left <div className="badge">fade-left</div></button>
                    <button onClick={() => setAtributo("fade-right")}>Fade Right <div className="badge">fade-right</div></button>
                    <button onClick={() => setAtributo("fade-down")}>Fade Down <div className="badge">fade-down</div></button>
                    <button onClick={() => setAtributo("jump-up")}>Jump Up <div className="badge">jump-up</div></button>
                    <button onClick={() => setAtributo("fade-in")}>Jump Left <div className="badge">jump-left</div></button>
                    <button onClick={() => setAtributo("fade-in")}>Jump Right <div className="badge">jump-right</div></button>
                    <button onClick={() => setAtributo("fade-in")}>Jump Down <div className="badge">jump-down</div></button>
                    <button onClick={() => setAtributo("fade-in")}>Pop Up <div className="badge">pop-up</div></button>
                    <button onClick={() => setAtributo("fade-in")}>Pop Left <div className="badge">pop-left</div></button>
                    <button onClick={() => setAtributo("fade-in")}>Pop Right <div className="badge">pop-right</div></button>
                    <button onClick={() => setAtributo("fade-in")}>Pop Down <div className="badge">pop-down</div></button>


                    <button onClick={() => setAtributo("fade-in")}>Jack In The Box <div className="badge">jack-in-the-box</div></button>
                    <button onClick={() => setAtributo("fade-in")}>Scale In <div className="badge">scale-in</div></button>
                </div>
            </div>
        </div>)
}