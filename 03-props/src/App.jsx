import Props from "./Props"
import Button from "./Button"
function App() {

//we can also add function in props
function message(){
  alert("You Clicked the button!!")
}
function byebye(){
  alert("BYE-BYE ~~~SAYONARAAAA!!!")
}

  //we can also add an array in the props
  const hobbies=['coding','movies','running','reading']
  return (
  <>
  <Props name='Garry' age={22} city='ropar'hobbies={hobbies}/>
  <Button label={'CLICK ME !!'} handleClick={message}/>
  <Button label={'Log Out'} handleClick={byebye}/>
    </>
  )
}

export default App