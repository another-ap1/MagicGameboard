import React, {useState} from "react";

const CommanderDMG = ({}) => {

    const dealDmg = () => setDmg(dmg + 1);
    const takeAway = () => setDmg(dmg - 1);

    const [dmg, setDmg] = useState(0);

    return(
        <div className="lifeCounter">
            <button onClick={takeAway}>-</button> {dmg} <button onClick={dealDmg}>☠️</button>
        </div>
    )
}

export default CommanderDMG;