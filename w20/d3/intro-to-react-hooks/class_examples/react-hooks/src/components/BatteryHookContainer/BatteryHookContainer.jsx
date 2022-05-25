import React, {useState, useEffect} from "react";
import Battery from "../Battery/Battery";
import {register, unregister} from '../../utils/battery';

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

    // we want to create a brand new state item for our name
    const [name, setName] = useState('Ashwin')

    const [batteryData, setBatteryData] = useState({
        level: 0.1,
        charging: false,
        brand: 'Duracel',
        type: 'AA'
    })

    // Equivalent of componentDidUpdate | this is the same as not wrapping it in useEffect
    useEffect(() => {
        console.log('This will run with every render')
    })

    // Equivalent of ComponentDidMount
    useEffect(() => {
        console.log('this will only run once - component Did Mount')
        // we will register our batter here
        register(setBatteryData)

        // returning a function in a use effect runs this as a clean up
        return () => {
            unregister(setBatteryData)
        }
    }, [])

    // this allows to run this function everytime a render is caused based on a name change
    // componentDidUpdate but only for name updates
    useEffect(() => {
        console.log('This only runs on name change')
        // This would a great place to do a PUT request on the name endpoint
    }, [name])

    useEffect(() => {
        console.log('This only runs on level change')
        // This would a great place to do a PUT request on the level endpoint
    }, [level])

    return (
        <>
            <Battery charging={batteryData.charging} level={batteryData.level} />
            <button onClick={() => setBatteryData({
                ...batteryData,
                level: batteryData.level + 0.01
            })}> Add to Battery Level </button>

            <button onClick={() => setBatteryData({
                ...batteryData,
                charging: true
            })}>Turn on charge</button>

            {/* <button onClick={() => setLevel(level + 0.01)}> Add to Level</button> */}

            Our Name: {name}
            <button onClick={() => setName('Jessica')}>Change name</button>
        </>
    )
}

export default BatteryHookContainer