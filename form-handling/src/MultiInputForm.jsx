import { useState } from "react"
function MultiInputForm() {

    const [formData,setFormData]=useState({
        name:'',
        age:'',
        email:''
    })

    const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    }

    const handelChange =(e)=>{
        const {name,value}=e.target
        setFormData((prev)=>({
            ...prev,[name]:value
        }))
        }

    


  return (
<form onSubmit={handleSubmit}>
    <h2>React Form Example</h2>

    <label>Name:</label>
    <input name="name" type="text" value={formData.name} onChange={handelChange} />
    <br />
    <label>Age: </label>
    <input name="age" type="number" value={formData.age} onChange={handelChange} />
    <br />
    <label>Email:</label>
    <input name="email" type="email" value={formData.email} onChange={handelChange} />
    <br />
    <button type="submit">Submit</button>
</form>
  )
}

export default MultiInputForm