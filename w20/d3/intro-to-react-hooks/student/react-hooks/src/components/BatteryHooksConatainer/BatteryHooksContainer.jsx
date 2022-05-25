import React, {useState} from "react";
import { useEffect } from "react";
import Battery from "../Battery/Battery";

// state = {};

// function ourOwnUseState(defaultValue) { 
//     const stateKey = '1234'
//     this.setState({
//         [stateKey]: defaultValue
//     })

//     const updateFunc = (newValue) => {
//         this.setState({
//             [stateKey]: newValue
//         })
//     }

//     return [
//         this.state[stateKey],
//         updateFunc
//     ]
// }

function BatteryHookContainer(props) {
    // the param inside of useState is the initial state value for that state key
    // const levelState = useState(0)

    // the first item returned by the useState function is the state item value
    // the second item is a function that allows us to set the state item

    // const level = levelState[0]
    // const setLevel = levelState[1]

    const [level, setLevel] = useState(0.05)

    const [name, setName] = useState('Ashwin')

    useEffect(() => {
        console.log('User Effect Ran')

    })

    return (
        <>
            <Battery charging={true} level={level} />
            <button onClick={() => setLevel(level + 0.01)}> Add to Level</button>

            Our Name: {name}
            <button onClick={() => setName('Ahmed')}>Change Name</button>
        </>
    )
}

export default BatteryHookContainer