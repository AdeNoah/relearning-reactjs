# first practice the useState hook
use state is react hook that allows the creation of a stateful variable and a setter function to update its value in the virtual DOM [name, setName].


# second, learned the useEffect hook
the useEffect hook tells react to do something when there is a form of rendering change; 
1. when the component re-renders
2. the component mounts 
3. the state of a value changes  
useEffect(function, [dependency array])  
useEffect(() => {})  <!-- runs after every rerender -->
useEffect(() => {}, [])  <!-- runs only on mount -->
useEffect(() => {}, [value])  <!-- runs on mount + when state value changes -->  
what are useEffects used for:
1. Event listeners 
2. DOM manipulation
3. subscriptions (real time updates)
4. Fetching data from APIs
5. clean up when a component unmounts 
