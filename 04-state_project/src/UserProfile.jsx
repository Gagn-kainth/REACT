import {useState} from 'react'

function UserProfile() {
    const[name,setName]=useState('Guest')
    const[age,setAge]=useState(18)

  return (
    <>
    <h1>NAME:{name} </h1>
    <h1>AGE: {age}</h1>

       <button onClick={()=>setName('Garry')}>change name</button>
       <button onClick={()=>setAge(age + 1)}>change age</button>
       </>

  )
}

export default UserProfile