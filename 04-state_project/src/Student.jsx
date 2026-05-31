import {useState} from 'react'

function Student() {
    const[student,setStudent]=useState({
        name :'Guest',
        age: 18,
        city:'delhi'
    })
    const changeCity=()=>{
        setStudent({...student, city:'mumbai'})
    }
    
  return (
    <>
    <h1>name :{student.name}</h1>
    <h2>age :{student.age}</h2>
    <h2>city :{student.city}</h2>
    <button onClick={changeCity}>change city</button>
    
    </>
  )
}

export default Student