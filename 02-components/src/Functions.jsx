
function Functions() {
function handleClick(){
  alert("you clicked the button !!")
}

    function getname(yourname){
        return yourname
    }

    const lastname =(lname)=>{
      return lname
    }
    const Surname = 'kainth'
    const name ='garry'
  return (
    <>
    <h1 className="test">Hello {getname(name)}</h1>
    <h1 className="test">Your lastname is{lastname (Surname)}</h1>
    <button className="btn" onClick={handleClick}>CLICK ME</button>
    </>
  )
}

export default Functions