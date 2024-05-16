import React, { useState } from "react";
// import frame_0 from "./frame_0.png"
// import frame_1 from "./frame_1.png"

const Bonk = () => {
    const frame_0 = "./frame_0.png"
    const frame_1 = "./frame_1.png"
    const [frame, setFrame] = useState(frame_0)

    const handleClick = () => {
        if (frame !== frame_1) setFrame(frame_1);
        else setFrame(frame_0)
    }

    return (
        <div>
            <center>
                <img src={frame} alt="doge" />
                <button onClick={handleClick}>
                    Bonk!
                </button>
            </center>
        </div>
    )
}

export default Bonk;