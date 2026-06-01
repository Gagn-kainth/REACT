import { useState } from "react";
function AdvancedForm() {
    const [formData,setFormData]=useState({
        gender:'',
        country:'India',
        agree:false
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        }
    
        const handelChange =(e)=>{
            const {name,type,value,checked}=e.target
            setFormData((prev)=>({
                ...prev,[name]:type==='checkbox' ? checked : value
            }))
            }
    
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Form with checkbox,radio & select</h2>
      <label>
        <input type="radio" name="gender" value="Male"
        checked={formData.gender==='Male'}
        onChange={handelChange} />
        Male
      </label>

      <label>
        <input 
        type="radio" 
        name="gender" value="Female" 
        checked={formData.gender==='Female'}
        onChange={handelChange}/>
        Female
      </label>
      <br />

      <label>
        Country:
        <select name="country"
        value={formData.country} onChange={handelChange}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
        </select>
      </label>
      <br />
      <label >
        <input 
        type="checkbox" name="agree"
        checked={formData.agree}
        onChange={handelChange}
         />
        I agree to terms and conditions
      </label>
      <br />
      <button type="submit">Submit</button>
      </form>
    </>

  );
}

export default AdvancedForm;
