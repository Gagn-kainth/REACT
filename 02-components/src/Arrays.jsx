


function Arrays() {
    const fruits=['apple','banana','mango','grapes','kiwi'];
  return (
    <>
    <ul>
        {fruits.map((fruit)=>
        <li>{fruit}</li>
        )}
    </ul>
    </>
  )
}

export default Arrays