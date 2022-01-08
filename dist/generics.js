"use strict";
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState();
newState.setState("665");
console.log(newState.getState());
