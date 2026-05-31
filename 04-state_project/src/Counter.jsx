import {useState} from 'react'

function Counter() {
 const [counter,setCounter]=useState(0);
 const increase =()=>(
    setCounter(counter + 1)
 )
 const decrease=()=>(
    setCounter(counter - 1)
 )
  
 return (
 <>
 <h1>Count : {counter}</h1>

<button onClick={increase}>Increase</button>
<button onClick={decrease}>Decrease</button>

 </>  
  )
}

export default Counter