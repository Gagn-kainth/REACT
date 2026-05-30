

function Object() {
    // const user ={ firstname :'gagan', lastname :'kainth', age:22 }

    const users=[
        { firstname :'gagan', lastname :'kainth', age:22 },
        { firstname :'rahul', lastname :'bhola', age:25 },
        { firstname :'ritika', lastname :'verma', age:18 }
    ]
function Fullname(user){
    return user.firstname +" "+ user.lastname
}
  return (
   <><h1>Person Details</h1>
   <ul>
    {users.map((user)=>(
        <li>{Fullname(user)}is {user.age}years old</li>
    ))}
   </ul>
   {/* <p>Full name : {Fullname(user)}</p>
   <p>Age :{user.age}</p> */}
   </>
  )
}

export default Object