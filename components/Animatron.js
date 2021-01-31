import { useState } from 'react';

export default function Animatron() {


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
                    <button onClick={() => setAtributo("fade-in")}>Fade In <div className="badge">fade-in</div></button>
                    <button onClick={() => setAtributo("fade-up")}>Fade Up <div className="badge">fade-up</div></button>
                    <button onClick={() => setAtributo("fade-left")}>Fade Left <div className="badge">fade-left</div></button>
                    <button onClick={() => setAtributo("fade-right")}>Fade Right <div className="badge">fade-right</div></button>
                    <button onClick={() => setAtributo("fade-down")}>Fade Down <div className="badge">fade-down</div></button>

                    <button onClick={() => setAtributo("fade-in-out")}>Fade Out <div className="badge">fade-in-out</div></button>
                    <button onClick={() => setAtributo("fade-up-out")}>Fade Up Out <div className="badge">fade-up-out</div></button>
                    <button onClick={() => setAtributo("fade-left-out")}>Fade Left Out <div className="badge">fade-left-out</div></button>
                    <button onClick={() => setAtributo("fade-right-out")}>Fade Right Out <div className="badge">fade-right-out</div></button>
                    <button onClick={() => setAtributo("fade-down-out")}>Fade Down Out <div className="badge">fade-down-out</div></button>

                    <button onClick={() => setAtributo("jump-in")}>Jump In <div className="badge">jump-in</div></button>
                    <button onClick={() => setAtributo("jump-up")}>Jump Up <div className="badge">jump-up</div></button>
                    <button onClick={() => setAtributo("jump-left")}>Jump Left <div className="badge">jump-left</div></button>
                    <button onClick={() => setAtributo("jump-right")}>Jump Right <div className="badge">jump-right</div></button>
                    <button onClick={() => setAtributo("jump-down")}>Jump Down <div className="badge">jump-down</div></button>

                    <button onClick={() => setAtributo("jump-out")}>Jump Out <div className="badge">jump-out</div></button>
                    <button onClick={() => setAtributo("jump-up-out")}>Jump Up Out <div className="badge">jump-up-out</div></button>
                    <button onClick={() => setAtributo("jump-left-out")}>Jump Left Out <div className="badge">jump-left-out</div></button>
                    <button onClick={() => setAtributo("jump-right-out")}>Jump Right Out <div className="badge">jump-right-out</div></button>
                    <button onClick={() => setAtributo("jump-down-out")}>Jump Down Out <div className="badge">jump-down-out</div></button>



                    <button onClick={() => setAtributo("scale-in")}>Scale In <div className="badge">scale-in</div></button>
                    <button onClick={() => setAtributo("scale-up")}>Scale Up <div className="badge">scale-up</div></button>
                    <button onClick={() => setAtributo("scale-left")}>Scale Left <div className="badge">scale-left</div></button>
                    <button onClick={() => setAtributo("scale-right")}>Scale Right <div className="badge">scale-right</div></button>
                    <button onClick={() => setAtributo("scale-down")}>Scale Down <div className="badge">scale-down</div></button>


                    <button onClick={() => setAtributo("scale-out")}>Scale Out <div className="badge">scale-out</div></button>
                    <button onClick={() => setAtributo("scale-up-out")}>Scale Up Out <div className="badge">scale-up-out</div></button>
                    <button onClick={() => setAtributo("scale-left-out")}>Scale Left Out <div className="badge">scale-left-out</div></button>
                    <button onClick={() => setAtributo("scale-right-out")}>Scale Right Out <div className="badge">scale-right-out</div></button>
                    <button onClick={() => setAtributo("scale-down-out")}>Scale Down Out <div className="badge">scale-down-out</div></button>
                </div>
            </div>
        </div>)
}