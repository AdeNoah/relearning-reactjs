# first practice the useState hook
use state is react hook that allows the creation of a stateful variable and a setter function to update its value in the virtual DOM [name, setName].




# second, learned the useEffect hook
the useEffect hook tells react to do something when there is a form of rendering change; 
1. when the component re-renders
2. the component mounts 
3. the state of a value changes  
useEffect(function, [dependency array])     // syntax of a useEffect  
useEffect(() => {})     // runs after every rerender 
useEffect(() => {}, [])     // runs only on mount 
useEffect(() => {}, [value])    // runs on mount + when state value changes 
what are useEffects used for:
1. Event listeners 
2. DOM manipulation
3. subscriptions (real time updates)
4. Fetching data from APIs
5. clean up when a component unmounts 




# third, reviewed the useContext hook
the useContext hook is a hook that allow for sharing of values between multiple levels of components without passing props through each level.
so, useContent has 2 important parts and they are:

## provider component 
the provider component:
1. imports the { createContext } from 'react'
2. exports theContext = createContext()
3. <theContext.Provider value={value}>
        <Child />
   </theContext.Provider>

## consumer component
the consumer component:
1. import { useContext } from 'react'
2. impoer { theContext } from './Parent'
3. const value = useContext(theContext)




# fourth the useRef hook
use reference or useRef does not cause re-renders when its values change. it is used when a component is to remember an information but the information or information change is not to trigger a re-render.  
useRef is used for the follwing;
1. accessing and interacting with dom elements
2. handling focus, animations and transitions 
3. managing timers and intervals 
