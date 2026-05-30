function Props({name='Guest' ,age=18,city='unknown', hobbies }) {
    //deconstructing the variableS
   // const{name,age,city}=props; instead of this you can add it in parameters
   //can also add default parameter values-if someone hasn't add any value

  return (
    <>
      <h1>Hello {name} !!</h1>
      <p>Age : {age}</p>
      <p>City : {city}</p>
      <h2>hobbies</h2>
      <ul>
        {hobbies.map((hobby,index)=>(
            <li key= {index} > {hobby}</li>
        ))}
      </ul>
    </>
  );
}

export default Props;
