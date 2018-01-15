import React from "react";

export const ToggleButton = (props) => {
    return(<button onClick={() => props.giveOrTakeItem(props.name)}>add/remove</button>)
}



